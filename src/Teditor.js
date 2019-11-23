import React, { useState, useCallback } from "react";
import { Editor } from "slate-react";
import * as tabsPlugin from "./tabs/editor/plugin";

export default function Tedtior({ value: initialValue }) {
  const [editorValue, setEditorValue] = useState(initialValue);
  const onEditorChange = useCallback(({ value }) => {
    setEditorValue(value);
  }, []);

  const plugins = [tabsPlugin];

  return (
    <Editor value={editorValue} onChange={onEditorChange} plugins={plugins} />
  );
}
