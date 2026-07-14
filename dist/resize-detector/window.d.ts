type ResizableComponent = {
  resize: (props?: any, containerWidth?: number) => void;
};
/**
 * Attach a resize listener to a component. When an element is provided and
 * ResizeObserver is available, observes the element directly (catches both
 * window and container-level resizes). Falls back to window 'resize' event
 * in SSR / jsdom / environments without ResizeObserver.
 */
declare function addListener(component: ResizableComponent, element?: HTMLElement | null): void;
declare function removeListener(component: ResizableComponent): void;
declare const _default: {
  addListener: typeof addListener;
  removeListener: typeof removeListener;
};
export default _default;
