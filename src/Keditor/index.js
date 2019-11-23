import React, { useState, useCallback } from "react";
import { Editor } from "slate-react";

import dualViewStyles from "./dual-view.module.css";
import * as tabsPlugin from "./tabs/editor/plugin";
import htmlHandler from "./html-handler";

export default function Tedtior({ value: initialValue }) {
  const [editorValue, setEditorValue] = useState(initialValue);
  const onEditorChange = useCallback(({ value }) => {
    setEditorValue(value);
  }, []);

  const plugins = [tabsPlugin];

  return (
    <section className={dualViewStyles.wrapper}>
      <Editor value={editorValue} onChange={onEditorChange} plugins={plugins} />
      <main
        dangerouslySetInnerHTML={{ __html: htmlHandler.serialize(editorValue) }}
      />
    </section>
  );
}
