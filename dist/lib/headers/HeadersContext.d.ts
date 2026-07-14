import React, { ReactNode } from "react";
import type { SidebarColumnDef, TimelineGroupBase, TimelineTimeSteps } from "../types/main";
export type TimelineHeadersProviderProps = {
  children: ReactNode;
  rightSidebarWidth?: number;
  leftSidebarWidth: number;
  timeSteps: TimelineTimeSteps;
  registerScroll: (e: HTMLDivElement) => void;
  scrollOffset: number;
  sidebarColumns?: SidebarColumnDef<TimelineGroupBase>[];
};
export declare class TimelineHeadersProvider extends React.Component<TimelineHeadersProviderProps> {
  render(): import("react/jsx-runtime").JSX.Element;
}
export declare const TimelineHeadersContext: React.Context<{
  registerScroll: () => () => void;
  rightSidebarWidth: number;
  leftSidebarWidth: number;
  timeSteps: TimelineTimeSteps;
  scrollOffset: number;
  sidebarColumns: SidebarColumnDef[] | undefined;
}>;
export declare const useTimelineHeadersContext: () => {
  registerScroll: () => () => void;
  rightSidebarWidth: number;
  leftSidebarWidth: number;
  timeSteps: TimelineTimeSteps;
  scrollOffset: number;
  sidebarColumns: SidebarColumnDef[] | undefined;
};
