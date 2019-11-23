import React from "react";

import { TabsWrapper } from "../ui";

export function TabsBlock({ children }) {
  const tabLabels = children.map(child => child.props.node.data.get("label"));
  const tabContents = children;

  return <TabsWrapper labels={tabLabels} contents={tabContents} />;
}

export function TabBlock({ children }) {
  return children;
}
