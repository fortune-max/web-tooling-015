import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CodeRenderer from "../CodeRenderer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Actual/CodeRenderer",
    component: CodeRenderer,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // codeSrc: { control: "text" },
    },
} as ComponentMeta<typeof CodeRenderer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CodeRenderer> = (args) => (
    <CodeRenderer codeSrc={args.codeSrc} />
);

const exampleCode = `
import React from "react";

const DynamicComponent = () => {
    return (
        <div data-testid="dynamic-component">This is a Dynamic Component</div>
    );
};

export default DynamicComponent;
`;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    codeSrc: exampleCode,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//     size: "large",
//     label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//     size: "small",
//     label: "Button",
// };
