import React, { CSSProperties, HTMLProps, PureComponent, ReactNode } from "react";
import { useTimelineHeadersContext } from "./HeadersContext";
import { LEFT_VARIANT, RIGHT_VARIANT } from "./constants";
import { SidebarColumnDef } from "../types/main";

type GetRootProps = (props?: { style?: React.CSSProperties }) => HTMLProps<HTMLDivElement>;
type SidebarHeaderProps = {
  children: (props: { getRootProps: GetRootProps }) => ReactNode;
  rightSidebarWidth?: number;
  leftSidebarWidth: number;
  variant: typeof LEFT_VARIANT | typeof RIGHT_VARIANT;
  headerData?: unknown;
  sidebarColumns?: SidebarColumnDef[];
};

class SidebarHeader extends PureComponent<SidebarHeaderProps> {
  getRootProps: GetRootProps = (props: { style?: CSSProperties } = {}) => {
    const { style } = props;
    const width = this.props.variant === RIGHT_VARIANT ? this.props.rightSidebarWidth : this.props.leftSidebarWidth;
    return {
      style: {
        color: style?.color ?? "#fff",
        ...style,
        width,
      },
    };
  };

  getStateAndHelpers = () => {
    return {
      getRootProps: this.getRootProps,
      data: this.props.headerData,
    };
  };

  render() {
    const { sidebarColumns } = this.props;

    // When sidebarColumns is provided, render column titles directly — no hooks needed
    if (sidebarColumns?.length) {
      const rootProps = this.getRootProps();
      return (
        <div
          data-testid="sidebarHeader"
          {...rootProps}
          style={{ ...rootProps.style, display: "flex", alignItems: "stretch", padding: 0 }}
        >
          {sidebarColumns.map((col) => (
            <div
              key={col.id}
              style={{
                width: col.width,
                minWidth: col.width,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                borderRight: "1px solid rgba(255,255,255,0.3)",
                boxSizing: "border-box",
                overflow: "hidden",
                padding: "0 4px",
              }}
            >
              {col.title}
            </div>
          ))}
        </div>
      );
    }

    const props = this.getStateAndHelpers();
    const Children = this.props.children;
    if (typeof Children === "function" && Children.prototype?.isReactComponent) {
      return <Children {...props} />;
    }
    return Children(props);
  }
}

export type SidebarWrapperProps = {
  children?: (props: { getRootProps: GetRootProps }) => ReactNode;
  variant?: typeof LEFT_VARIANT | typeof RIGHT_VARIANT;
  headerData?: unknown;
};

const defaultChildren: SidebarWrapperProps["children"] = ({ getRootProps }: { getRootProps: GetRootProps }) => (
  <div data-testid="sidebarHeader" {...getRootProps()} />
);

const SidebarWrapper = (props: SidebarWrapperProps) => {
  const { children, variant = LEFT_VARIANT, headerData } = props;
  const { leftSidebarWidth, rightSidebarWidth, sidebarColumns } = useTimelineHeadersContext();
  return (
    <SidebarHeader
      leftSidebarWidth={leftSidebarWidth}
      rightSidebarWidth={rightSidebarWidth}
      variant={variant}
      headerData={headerData}
      sidebarColumns={sidebarColumns}
    >
      {children || defaultChildren}
    </SidebarHeader>
  );
};

SidebarWrapper.secretKey = "SidebarHeader";

export default SidebarWrapper;
