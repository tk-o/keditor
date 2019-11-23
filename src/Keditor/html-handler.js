import React from "react";
import Html from "slate-html-serializer";
import { TabsWrapper } from "./tabs/ui";

export default new Html({
  rules: [
    {
      serialize(obj, children) {
        if (obj.object === "mark") {
          switch (obj.type) {
            case "bold":
              return <strong>{children}</strong>;
            default:
              return children;
          }
        }
      }
    },
    {
      serialize(obj, children) {
        if (obj.object === "inline") {
          switch (obj.type) {
            case "link":
              return <a href={obj.get("data").get("src")}>{children}</a>;
            default:
              return children;
          }
        }
      }
    },
    {
      serialize(obj, children) {
        if (obj.object === "block") {
          console.log(obj.toJS());
          switch (obj.type) {
            case "paragraph":
              return <p>{children}</p>;
            case "tabs":
              return (
                <TabsWrapper
                  contents={children}
                  labels={obj.nodes.map(node => node.data.get("label"))}
                />
              );
            default:
              return <div>{children}</div>;
          }
        }
      }
    }
  ]
});
