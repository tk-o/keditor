/** @jsx h */
import h from "slate-hyperscript";

export const value = (
  <value>
    <document>
      <block type="paragraph">
        A string of <mark type="bold">bold</mark> in a{" "}
        <inline type="link" data={{ src: "http://slatejs.org" }}>
          Slate
        </inline>{" "}
        editor!
      </block>

      <block type="tabs">
        <block type="tab" data={{ label: "Tab 1" }}>
          Some text in tab
        </block>
        <block type="tab" data={{ label: "Tab 2" }}>
          Here's some more and image
          <block
            type="image"
            data={{
              src: "https://avatars0.githubusercontent.com/u/3687215?v=4",
              alt: "tko profile"
            }}
          />
        </block>
      </block>
    </document>
  </value>
);
