import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeRenderer = ({ codeSrc }: { codeSrc: string }) => {
    const exampleCode = `
import React from "react";

const DynamicComponent = () => {
    return (
        <div data-testid="dynamic-component">This is a Dynamic Component</div>
    );
};

export default DynamicComponent;
`;

    const styles = {
        color: "rgb(154, 134, 253)",
        width: "750px",
        height: "400px",
        overflow: "scroll",
        padding: "20px",
        backgroundColor: "midnightblue",
        border: "5px solid black",
        borderRadius: "10px",
    };

    const Content = (
        <Highlight
            {...defaultProps}
            code={codeSrc.length > 1 ? codeSrc : exampleCode}
            language="jsx"
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={styles}>
                    {tokens.map((line, i) => (
                        // eslint-disable-next-line react/jsx-key
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                // eslint-disable-next-line react/jsx-key
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );

    return Content;
};

export default CodeRenderer;
