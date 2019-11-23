import React from "react";

import { TabsBlock, TabBlock } from "./blocks";

export function renderBlock(props, editor, next) {
  const { attributes, children, node } = props;

  switch (node.type) {
    case "tabs":
      return <TabsBlock {...attributes}>{children}</TabsBlock>;
    case "tab":
      return (
        <TabBlock {...attributes} label={node.data.get("label")}>
          {children}
        </TabBlock>
      );
    default:
      return next();
  }
}
