import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeRenderer = ({ codeSrc }: { codeSrc: string }) => {
    const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

    const Content = (
        <Highlight {...defaultProps} code={exampleCode} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
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

    return (
        <div>
            <h1>CodeRenderer</h1>
            <p>{codeSrc}</p>
            {Content}
        </div>
    );
};

export default CodeRenderer;
