import {
  Component,
  createRef,
  CSSProperties,
  HTMLAttributes,
  LegacyRef,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  TouchEvent,
  TouchEventHandler,
} from "react";
import interact from "interactjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { _get } from "../utility/generic";
import { composeEvents } from "../utility/events";
import { defaultItemRenderer } from "./defaultItemRenderer";
import { coordinateToTimeRatio } from "../utility/calendar";
import { getSumOffset, getSumScroll } from "../utility/dom-helpers";
import {
  leftResizeStyle,
  overridableStyles,
  rightResizeStyle,
  selectedAndCanMove,
  selectedAndCanResizeLeft,
  selectedAndCanResizeLeftAndDragLeft,
  selectedAndCanResizeRight,
  selectedAndCanResizeRightAndDragRight,
  selectedStyle,
} from "./styles";
import { Id, ItemContext, TimelineItemBase, TimelineKeys } from "../types/main";
import { TimelineContext, TimelineContextType } from "../timeline/TimelineStateContext";
import isEqual from "lodash/isEqual";

dayjs.extend(utc);

export type ResizeEdge = "left" | "right";

type OnSelect = (
  itemId: string | null,
  clickType: "click" | "touch",
  event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>
) => void;

export type ItemProps<CustomItem extends TimelineItemBase<number>> = {
  canvasTimeStart: number;
  canvasTimeEnd: number;
  canvasWidth: number;
  minResizeWidth?: number;
  order: { index: number };
  dragSnap?: number;
  itemProps?: HTMLAttributes<HTMLDivElement>;
  onDrag: (itemId: string, dragTime: number, newGroupOrder: number) => void;
  onDrop: (itemId: string, dragTime: number, newGroupOrder: number) => void;
  onResizing: (itemId: string, time: number, resizeEdge: ResizeEdge | null) => void;
  onResized: (itemId: string, time: number, resizeEdge: ResizeEdge | null, delta: number) => void;
  moveResizeValidator?: (
    action: "move" | "resize",
    item: TimelineItemBase<any>,
    time: number,
    resizeEdge?: ResizeEdge | null
  ) => number;
  itemRenderer?: (props: ItemRendererProps<CustomItem>) => ReactNode;
  selected: boolean;
  canChangeGroup?: boolean;
  canMove?: boolean;
  canSelect?: boolean;
  dimensions?: ItemContext["dimensions"];
  useResizeHandle?: boolean;
  canResizeLeft: boolean;
  canResizeRight: boolean;

  keys: TimelineKeys;
  item: CustomItem;

  onSelect: OnSelect;
  onContextMenu?: (i: Id, e: MouseEvent<HTMLDivElement>) => void;
  groupTops: number[];
  onItemDoubleClick: (i: Id, e: MouseEvent<HTMLDivElement>) => void;
  scrollRef: HTMLElement | null;
  scrollOffset: number;
};

type DragProps = { offset: number; x: number; y: number };

interface ItemState {
  interactMounted: boolean;
  dragging: boolean;
  dragStart: null | DragProps;
  preDragPosition: { x: number; y: number } | null;
  dragTime: null | number;
  dragGroupDelta: null | number;
  resizing: boolean;
  resizeEdge: null | "left" | "right";
  resizeStart: null | number;
  resizeTime: null | number;
}

export type GetItemPropsParams = HTMLAttributes<HTMLDivElement> & {
  leftClassName?: string;
  rightClassName?: string;
  leftStyle?: CSSProperties;
  rightStyle?: CSSProperties;
};

export interface ItemRendererProps<CustomItem extends TimelineItemBase<number>> {
  item: CustomItem;
  timelineContext: TimelineContextType;
  itemContext: ItemContext;
  getItemProps: (
    params: GetItemPropsParams
  ) => HTMLAttributes<HTMLDivElement> & { key: string; ref: LegacyRef<HTMLDivElement> };
  getResizeProps: GetResizeProps;
}
type GetResizePropsDirection = {
  ref: LegacyRef<HTMLDivElement>;
  className: string;
  style: CSSProperties;
};
export type GetResizeProps = (params?: GetItemPropsParams) => {
  right: GetResizePropsDirection;
  left: GetResizePropsDirection;
};

export default class Item<CustomItem extends TimelineItemBase<number>> extends Component<
  ItemProps<CustomItem>,
  ItemState
> {
  static defaultProps = {
    selected: false,
    itemRenderer: defaultItemRenderer,
  };
  declare context: TimelineContextType;
  static contextType = TimelineContext;

  state: ItemState = {
    interactMounted: false,

    dragging: false,
    dragStart: null,
    preDragPosition: null,
    dragTime: null,
    dragGroupDelta: null,

    resizing: false,
    resizeEdge: null,
    resizeStart: null,
    resizeTime: null,
  };
  private get itemId(): string {
    return _get(this.props.item, this.props.keys.itemIdKey);
  }
  private get itemTitle(): string {
    return _get(this.props.item, this.props.keys.itemTitleKey);
  }
  private get itemDivTitle(): string {
    return this.props.keys.itemDivTitleKey ? _get(this.props.item, this.props.keys.itemDivTitleKey) : this.itemTitle;
  }
  private get itemTimeStart(): number {
    return _get(this.props.item, this.props.keys.itemTimeStartKey);
  }
  private get itemTimeEnd(): number {
    return _get(this.props.item, this.props.keys.itemTimeEndKey);
  }
  private itemRef = createRef<HTMLDivElement>();
  private dragLeft?: HTMLElement;
  private dragRight?: HTMLElement;
  private startedClicking: boolean = false;
  private startedTouching: boolean = false;
  private dragInProgress: boolean = false;
  private resizeInProgress: boolean = false;
  private currentResizeEdge: "left" | "right" | null = null;

  constructor(props: ItemProps<CustomItem>) {
    super(props);
  }

  shouldComponentUpdate(nextProps: ItemProps<CustomItem>, nextState: ItemState) {
    /*const shouldUpdate =
      nextState.dragging !== this.state.dragging ||
      nextState.dragTime !== this.state.dragTime ||
      nextState.dragGroupDelta !== this.state.dragGroupDelta ||
      nextState.resizing !== this.state.resizing ||
      nextState.resizeTime !== this.state.resizeTime ||
      nextProps.keys !== this.props.keys ||
      !deepObjectCompare(nextProps.itemProps, this.props.itemProps) ||
      nextProps.selected !== this.props.selected ||
      nextProps.item !== this.props.item ||
      nextProps.canvasTimeStart !== this.props.canvasTimeStart ||
      nextProps.canvasTimeEnd !== this.props.canvasTimeEnd ||
      nextProps.canvasWidth !== this.props.canvasWidth ||
      (nextProps.order ? nextProps.order.index : undefined) !==
        (this.props.order ? this.props.order.index : undefined) ||
      nextProps.dragSnap !== this.props.dragSnap ||
      nextProps.minResizeWidth !== this.props.minResizeWidth ||
      nextProps.canChangeGroup !== this.props.canChangeGroup ||
      nextProps.canSelect !== this.props.canSelect ||
      nextProps.canMove !== this.props.canMove ||
      nextProps.canResizeLeft !== this.props.canResizeLeft ||
      nextProps.canResizeRight !== this.props.canResizeRight ||
      nextProps.dimensions !== this.props.dimensions*/
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  getTimeRatio() {
    const { canvasTimeStart, canvasTimeEnd, canvasWidth } = this.props;
    return coordinateToTimeRatio(canvasTimeStart, canvasTimeEnd, canvasWidth);
  }

  dragTimeSnap(dragTime: number, considerOffset?: boolean) {
    const { dragSnap } = this.props;
    if (dragSnap) {
      const offset = considerOffset ? dayjs().utcOffset() * 60 * 1000 : 0;
      return Math.round(dragTime / dragSnap) * dragSnap - (offset % dragSnap);
    } else {
      return dragTime;
    }
  }

  resizeTimeSnap(dragTime: number) {
    const { dragSnap } = this.props;
    if (dragSnap) {
      const endTime = this.itemTimeEnd! % dragSnap;
      return Math.round((dragTime - endTime) / dragSnap) * dragSnap + endTime;
    } else {
      return dragTime;
    }
  }

  dragTime(e: MouseEvent) {
    const startTime = dayjs(this.itemTimeStart);

    if (this.state.dragging) {
      return this.dragTimeSnap(this.timeFor(e) + this.state.dragStart!.offset, true);
    } else {
      return startTime.valueOf();
    }
  }

  timeFor(e: MouseEvent) {
    const ratio = coordinateToTimeRatio(this.props.canvasTimeStart, this.props.canvasTimeEnd, this.props.canvasWidth);

    const offset = getSumOffset(this.props.scrollRef!).offsetLeft;
    const scrolls = getSumScroll(this.props.scrollRef!);

    return (e.pageX - offset + scrolls.scrollLeft + this.props.scrollOffset) * ratio + this.props.canvasTimeStart;
  }

  dragGroupDelta(e: MouseEvent) {
    const { groupTops, order } = this.props;
    if (this.state.dragging) {
      if (!this.props.canChangeGroup) {
        return 0;
      }
      let groupDelta = 0;

      const offset = getSumOffset(this.props.scrollRef!).offsetTop;
      const scrolls = getSumScroll(this.props.scrollRef!);

      for (const key of Object.keys(groupTops)) {
        const groupTop = groupTops[Number(key)];
        if (e.pageY - offset + scrolls.scrollTop > groupTop) {
          groupDelta = parseInt(key, 10) - order!.index;
        } else {
          break;
        }
      }

      if (this.props.order!.index + groupDelta < 0) {
        return 0 - this.props.order.index;
      } else {
        return groupDelta;
      }
    } else {
      return 0;
    }
  }

  resizeTimeDelta(e: MouseEvent, resizeEdge: ResizeEdge | null) {
    const length = this.itemTimeEnd! - this.itemTimeStart!;
    const timeDelta = this.dragTimeSnap((e.pageX - this.state.resizeStart!) * this.getTimeRatio());

    if (length + (resizeEdge === "left" ? -timeDelta : timeDelta) < (this.props.dragSnap || 1000)) {
      if (resizeEdge === "left") {
        return length - (this.props.dragSnap || 1000);
      } else {
        return (this.props.dragSnap || 1000) - length;
      }
    } else {
      return timeDelta;
    }
  }

  mountInteract() {
    const leftResize = this.props.useResizeHandle ? ".rct-item-handler-resize-left" : true;
    const rightResize = this.props.useResizeHandle ? ".rct-item-handler-resize-right" : true;

    interact(this.itemRef.current!)
      .resizable({
        edges: {
          left: this.canResizeLeft() && leftResize,
          right: this.canResizeRight() && rightResize,
          top: false,
          bottom: false,
        },
        enabled: this.props.selected && (this.canResizeLeft() || this.canResizeRight()),
      })
      .draggable({
        enabled: this.props.selected && this.canMove(),
      })
      .styleCursor(false)
      .on("dragstart", (e) => {
        if (this.props.selected) {
          this.dragInProgress = true;
          const clickTime = this.timeFor(e);
          this.setState({
            dragging: true,
            dragStart: {
              x: e.pageX,
              y: e.pageY,
              offset: this.itemTimeStart! - clickTime,
            },
            preDragPosition: { x: e.target.offsetLeft, y: e.target.offsetTop },
            dragTime: this.itemTimeStart!,
            dragGroupDelta: 0,
          });
        } else {
          return false;
        }
      })
      .on("dragmove", (e) => {
        if (this.state.dragging) {
          this.setState((state) => {
            // stop updating when dropped already
            if (!this.dragInProgress) {
              return { ...state };
            }
            let dragTime = this.dragTime(e);
            const dragGroupDelta = this.dragGroupDelta(e);
            if (this.props.moveResizeValidator) {
              dragTime = this.props.moveResizeValidator("move", this.props.item, dragTime);
            }

            if (this.props.onDrag) {
              this.props.onDrag(this.itemId!, dragTime, this.props.order.index + dragGroupDelta);
            }

            return {
              dragTime: dragTime,
              dragGroupDelta: dragGroupDelta,
            };
          });
        }
      })
      .on("dragend", (e) => {
        if (this.state.dragging) {
          if (this.props.onDrop) {
            this.dragInProgress = false;
            this.fireInteractEvent(false);
            let dragTime = this.dragTime(e);

            if (this.props.moveResizeValidator) {
              dragTime = this.props.moveResizeValidator("move", this.props.item, dragTime);
            }

            this.props.onDrop(this.itemId!, dragTime, this.props.order.index + this.dragGroupDelta(e));
          }

          this.setState({
            dragging: false,
            dragStart: null,
            preDragPosition: null,
            dragTime: null,
            dragGroupDelta: null,
          });
        }
      })
      .on("resizestart", (e) => {
        if (this.props.selected) {
          this.resizeInProgress = true;
          this.currentResizeEdge = null;
          this.setState({
            resizing: true,
            resizeEdge: null, // we don't know yet
            resizeStart: e.pageX,
            resizeTime: 0,
          });
        } else {
          return false;
        }
      })
      .on("resizemove", (e) => {
        if (this.resizeInProgress) {
          if (!this.currentResizeEdge) {
            this.currentResizeEdge = e.deltaRect.left !== 0 ? "left" : "right";
            this.setState({ resizeEdge: this.currentResizeEdge });
          }
          const resizeEdge = this.currentResizeEdge;
          let resizeTime = this.resizeTimeSnap(this.timeFor(e));

          if (this.props.moveResizeValidator) {
            resizeTime = this.props.moveResizeValidator("resize", this.props.item, resizeTime, resizeEdge);
          }

          if (this.props.onResizing) {
            this.props.onResizing(this.itemId, resizeTime, resizeEdge);
          }

          this.updateResizeLabel(resizeTime, resizeEdge);
          this.setState({
            resizeTime,
          });
        }
      })
      .on("resizeend", (e) => {
        if (this.resizeInProgress) {
          this.resizeInProgress = false;
          this.fireInteractEvent(false);
          const resizeEdge = this.currentResizeEdge;
          this.currentResizeEdge = null;
          let resizeTime = this.resizeTimeSnap(this.timeFor(e));

          if (this.props.moveResizeValidator) {
            resizeTime = this.props.moveResizeValidator("resize", this.props.item, resizeTime, resizeEdge);
          }

          if (this.props.onResized) {
            this.props.onResized(this.itemId, resizeTime, resizeEdge, this.resizeTimeDelta(e, resizeEdge));
          }
          this.resetResizeLabel();
          this.setState({
            resizing: false,
            resizeStart: null,
            resizeEdge: null,
            resizeTime: null,
          });
        }
      })
      .on("tap", (e) => {
        this.actualClick(e, e.pointerType === "mouse" ? "click" : "touch");
      });

    // Native pointerdown fires on the item element during bubble phase, before the
    // event reaches ScrollElement's div listener. This ensures isItemInteraction is
    // set synchronously before ScrollElement's handleMouseDown runs.
    // Guard on selected: listeners persist after deselection since mountInteract is
    // only called once, so we must not fire when the item is no longer selected.
    this.itemRef.current!.addEventListener("pointerdown", () => {
      if (this.props.selected) this.fireInteractEvent(true);
    });
    // Reset on pointerup to handle clicks that don't become drags or resizes.
    // dragend/resizeend handle the reset for actual interactions.
    this.itemRef.current!.addEventListener("pointerup", () => {
      if (this.props.selected) this.fireInteractEvent(false);
    });

    this.setState({
      interactMounted: true,
    });
  }

  private formatDuration(ms: number): string {
    const hours = ms / 3_600_000;
    if (hours >= 1) return `${hours.toFixed(1).replace(".", ",")} h`;
    const minutes = ms / 60_000;
    if (minutes >= 1) return `${Math.round(minutes)} min`;
    return `${Math.round(ms / 1000)} s`;
  }

  private getOrCreateResizeOverlay(): HTMLElement {
    const el = this.itemRef.current!;
    let overlay = el.querySelector<HTMLElement>(".rct-resize-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "rct-resize-overlay";
      overlay.style.cssText =
        "position:absolute;inset:0;display:none;align-items:center;" +
        "padding:0 6px;pointer-events:none;z-index:1;overflow:hidden;background:inherit;";
      el.appendChild(overlay);
    }
    return overlay;
  }

  private updateResizeLabel(resizeTime: number, resizeEdge: "left" | "right") {
    const el = this.itemRef.current;
    if (!el) return;
    const startTime = resizeEdge === "left" ? resizeTime : this.itemTimeStart;
    const endTime = resizeEdge === "right" ? resizeTime : this.itemTimeEnd;
    const durationMs = endTime - startTime;
    const text = durationMs > 0 && el.offsetWidth >= 50 ? this.formatDuration(durationMs) : "";
    // Update dedicated duration span if present (defaultItemRenderer)
    const durSpan = el.querySelector<HTMLElement>(".rct-item-duration");
    if (durSpan) {
      durSpan.textContent = text;
      return;
    }
    // Fallback for custom renderers: show overlay without touching existing content
    const overlay = this.getOrCreateResizeOverlay();
    overlay.textContent = text;
    overlay.style.display = "flex";
  }

  private resetResizeLabel() {
    const el = this.itemRef.current;
    if (!el) return;
    // If using defaultItemRenderer, restore duration in its span
    const durSpan = el.querySelector<HTMLElement>(".rct-item-duration");
    if (durSpan) {
      const durationMs = this.itemTimeEnd - this.itemTimeStart;
      durSpan.textContent = durationMs > 0 && el.offsetWidth >= 50 ? this.formatDuration(durationMs) : "";
      return;
    }
    // Hide overlay for custom renderers
    const overlay = el.querySelector<HTMLElement>(".rct-resize-overlay");
    if (overlay) overlay.style.display = "none";
  }

  canResizeLeft(props = this.props) {
    if (!props.canResizeLeft || props.minResizeWidth === undefined) {
      return false;
    }
    const width = parseInt(props.dimensions!.width?.toString(), 10);
    return width >= props.minResizeWidth;
  }

  canResizeRight(props = this.props) {
    if (!props.canResizeRight || props.minResizeWidth === undefined) {
      return false;
    }
    const width = parseInt(props.dimensions!.width?.toString(), 10);
    return width >= props.minResizeWidth;
  }

  canMove(props = this.props) {
    return !!props.canMove;
  }
  fireInteractEvent = (itemInteraction: boolean) => {
    if (this.itemRef && this.itemRef.current) {
      const event = new CustomEvent("itemInteraction", {
        bubbles: true,
        detail: {
          itemInteraction,
        },
      });
      this.itemRef.current?.dispatchEvent(event);
    }
  };

  componentDidUpdate(prevProps: ItemProps<CustomItem>) {
    let { interactMounted } = this.state;
    const couldDrag = prevProps.selected && this.canMove(prevProps);
    const couldResizeLeft = prevProps.selected && this.canResizeLeft(prevProps);
    const couldResizeRight = prevProps.selected && this.canResizeRight(prevProps);
    const willBeAbleToDrag = this.props.selected && this.canMove(this.props);
    const willBeAbleToResizeLeft = this.props.selected && this.canResizeLeft(this.props);
    const willBeAbleToResizeRight = this.props.selected && this.canResizeRight(this.props);

    if (this.itemRef && this.itemRef.current) {
      if (this.props.selected && !interactMounted) {
        this.mountInteract();
        interactMounted = true;
      }
      if (
        interactMounted &&
        (couldResizeLeft !== willBeAbleToResizeLeft || couldResizeRight !== willBeAbleToResizeRight)
      ) {
        const leftResize = this.props.useResizeHandle ? this.dragLeft : true;
        const rightResize = this.props.useResizeHandle ? this.dragRight : true;

        interact(this.itemRef.current).resizable({
          enabled: willBeAbleToResizeLeft || willBeAbleToResizeRight,
          edges: {
            top: false,
            bottom: false,
            left: willBeAbleToResizeLeft && leftResize,
            right: willBeAbleToResizeRight && rightResize,
          },
        });
      }
      if (interactMounted && couldDrag !== willBeAbleToDrag) {
        interact(this.itemRef.current).draggable({ enabled: willBeAbleToDrag });
      }
    } else {
      interactMounted = false;
    }
    if (interactMounted !== this.state.interactMounted) {
      this.setState({
        interactMounted,
      });
    }
  }

  onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!this.state.interactMounted) {
      e.preventDefault();
      this.startedClicking = true;
    }
  };

  onMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!this.state.interactMounted && this.startedClicking) {
      this.startedClicking = false;
      this.actualClick(e, "click");
    }
  };

  onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    if (!this.state.interactMounted) {
      e.preventDefault();
      this.startedTouching = true;
    }
  };

  onTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    if (!this.state.interactMounted && this.startedTouching) {
      this.startedTouching = false;
      this.actualClick(e, "touch");
    }
  };

  handleDoubleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (this.props.onItemDoubleClick) {
      this.props.onItemDoubleClick(this.itemId, e);
    }
  };

  handleContextMenu: MouseEventHandler<HTMLDivElement> = (e) => {
    if (this.props.onContextMenu) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onContextMenu(this.itemId, e);
    }
  };

  actualClick(e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>, clickType: "click" | "touch") {
    if (this.props.canSelect && this.props.onSelect) {
      this.props.onSelect(this.itemId!, clickType, e);
    }
  }

  //getItemRef = (el: HTMLElement) => (this.item = el)
  getDragLeftRef = (el: HTMLElement) => (this.dragLeft = el);
  getDragRightRef = (el: HTMLElement) => (this.dragRight = el);

  getItemProps = ({
    className: propsClassName,
    onMouseDown,
    onMouseUp,
    onTouchStart,
    onTouchEnd,
    onDoubleClick,
    onContextMenu,
    leftClassName,
    rightClassName,
    leftStyle,
    rightStyle,
    ...rest
  }: GetItemPropsParams = {}) => {
    const classNames = "rct-item" + (this.props.item.className ? ` ${this.props.item.className}` : "");

    return {
      ...rest,
      key: this.itemId,
      ref: this.itemRef,
      title: this.itemDivTitle,
      className: classNames + ` ${propsClassName ? propsClassName : ""}`,
      onMouseDown: composeEvents(this.onMouseDown, onMouseDown),
      onMouseUp: composeEvents(this.onMouseUp, onMouseUp),
      onTouchStart: composeEvents(this.onTouchStart, onTouchStart),
      onTouchEnd: composeEvents(this.onTouchEnd, onTouchEnd),
      onDoubleClick: composeEvents(this.handleDoubleClick, onDoubleClick),
      onContextMenu: composeEvents(this.handleContextMenu, onContextMenu),
      style: Object.assign(
        {},
        this.getItemStyle({ leftClassName, rightClassName, leftStyle, rightStyle, ...rest } as GetItemPropsParams)
      ),
    };
  };

  getResizeProps = (props: GetItemPropsParams = {} as GetItemPropsParams) => {
    let leftName = "rct-item-handler rct-item-handler-left rct-item-handler-resize-left";
    if (props.leftClassName) {
      leftName += ` ${props.leftClassName}`;
    }

    let rightName = "rct-item-handler rct-item-handler-right rct-item-handler-resize-right";
    if (props.rightClassName) {
      rightName += ` ${props.rightClassName}`;
    }
    return {
      left: {
        ref: this.getDragLeftRef,
        className: leftName,
        style: Object.assign({}, leftResizeStyle, props.leftStyle),
      },
      right: {
        ref: this.getDragRightRef,
        className: rightName,
        style: Object.assign({}, rightResizeStyle, props.rightStyle),
      },
    } as ReturnType<GetResizeProps>;
  };

  getItemStyle(props: GetItemPropsParams) {
    const dimensions = this.props.dimensions!;

    const baseStyles = {
      position: "absolute",
      boxSizing: "border-box",
      left: `${dimensions.left}px`,
      top: `${dimensions.top}px`,
      width: `${dimensions.width}px`,
      height: `${dimensions.height}px`,
      lineHeight: `${dimensions.height}px`,
    };

    const finalStyle = Object.assign(
      {},
      overridableStyles,
      this.props.selected ? selectedStyle : {},
      this.props.selected && this.canMove(this.props) ? selectedAndCanMove : {},
      this.props.selected && this.canResizeLeft(this.props) ? selectedAndCanResizeLeft : {},
      this.props.selected && this.canResizeLeft(this.props) && this.state.resizing
        ? selectedAndCanResizeLeftAndDragLeft
        : {},
      this.props.selected && this.canResizeRight(this.props) ? selectedAndCanResizeRight : {},
      this.props.selected && this.canResizeRight(this.props) && this.state.resizing
        ? selectedAndCanResizeRightAndDragRight
        : {},
      props.style,
      baseStyles
    );
    return finalStyle;
  }

  render() {
    if (typeof this.props.order === "undefined" || this.props.order === null) {
      return null;
    }

    const timelineContext = this.context;
    const itemContext: ItemContext = {
      dimensions: this.props.dimensions!,
      useResizeHandle: !!this.props.useResizeHandle,
      title: this.itemTitle,
      canMove: this.canMove(this.props),
      canResizeLeft: this.canResizeLeft(this.props),
      canResizeRight: this.canResizeRight(this.props),
      selected: this.props.selected,
      dragging: this.state.dragging,
      dragStart: this.state.dragStart,
      dragTime: this.state.dragTime,
      dragGroupDelta: this.state.dragGroupDelta,
      resizing: this.state.resizing,
      resizeEdge: this.state.resizeEdge,
      resizeStart: this.state.resizeStart,
      resizeTime: this.state.resizeTime,
    };
    if (!this.props.itemRenderer) {
      return defaultItemRenderer({
        item: this.props.item,
        timelineContext,
        itemContext,
        getItemProps: this.getItemProps,
        getResizeProps: this.getResizeProps,
      });
    } else
      return this.props.itemRenderer({
        item: this.props.item,
        timelineContext,
        itemContext,
        getItemProps: this.getItemProps,
        getResizeProps: this.getResizeProps,
      });
  }
}
