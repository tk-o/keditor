import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

/**
 * data source agnostic wrapper using design system components
 */
export function TabsWrapper({ labels, contents }) {
  return (
    <Tabs>
      <TabList>
        {labels.map((label, idx) => (
          <Tab key={label + idx}>{label}</Tab>
        ))}
      </TabList>

      {contents.map((content, idx) => (
        <TabPanel key={idx}>{content}</TabPanel>
      ))}
    </Tabs>
  );
}
