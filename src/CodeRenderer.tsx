import React from "react";

const CodeRenderer = ({ codeSrc }: { codeSrc: string | undefined }) => {
    return (
        <div>
            <h1>CodeRenderer</h1>
            <p>{codeSrc}</p>
        </div>
    );
};

export default CodeRenderer;
