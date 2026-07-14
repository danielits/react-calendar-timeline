import { Component, ReactNode } from "react";
type Props = {
  children: ReactNode;
  width: number;
  height: number;
  traditionalZoom: boolean;
  scrollRef: (e: HTMLDivElement) => void;
  onZoom: (n: number, m: number) => void;
  onWheelZoom: (speed: number, xPosition: number, deltaY: number) => void;
  onScroll: (n: number) => void;
  scrollOffset: number;
};
type State = {
  isDragging: boolean;
};
declare class ScrollElement extends Component<Props, State> {
  scrollComponentRef: import("react").RefObject<HTMLDivElement>;
  private dragLastPosition;
  private lastTouchDistance;
  private singleTouchStart;
  private lastSingleTouch;
  private isItemInteraction;
  private rafId;
  private pendingScrollOffset;
  constructor(props: Props);
  /**
   * Batch scroll updates to once per animation frame, mimicking
   * how the browser coalesces native scroll events. Without this,
   * each wheel/pointer event triggers a separate onScroll → onTimeChange
   * → canvas recalculation cycle.
   */
  scheduleScroll: (scrollOffset: number) => void;
  componentDidMount(): void;
  handlePointerStart: (e: PointerEvent) => void;
  handlePointerMove: (e: PointerEvent) => void;
  handlePointerEnd: (e: PointerEvent) => void;
  /**
   * Normalize wheel delta values for consistent behavior across browsers.
   * Addresses issue #929 (trackpad scrolling too fast on some platforms)
   * and issue #975 (mouse wheel zoom jumps).
   *
   * Browsers report wheel events differently:
   * - deltaMode 0 (DOM_DELTA_PIXEL): Raw pixel values (varies by OS/browser)
   * - deltaMode 1 (DOM_DELTA_LINE): Line-based scrolling (multiply by pixels/line)
   * - deltaMode 2 (DOM_DELTA_PAGE): Page-based scrolling (rare)
   */
  normalizeWheelDelta: (e: WheelEvent) => number;
  handleWheel: (e: WheelEvent) => void;
  handleMouseDown: (e: PointerEvent) => void;
  handleMouseMove: (e: PointerEvent) => void;
  handleMouseUp: () => void;
  handlePointerLeave: (e: PointerEvent) => void;
  handleTouchStart: (e: PointerEvent) => void;
  handleTouchMove: (e: PointerEvent) => void;
  handleTouchEnd: () => void;
  handleItemInteract: (e: Event) => void;
  componentWillUnmount(): void;
  render(): import("react/jsx-runtime").JSX.Element;
}
export default ScrollElement;
