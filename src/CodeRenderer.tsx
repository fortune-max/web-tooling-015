import React from "react";

const CodeRenderer = ({ codeSrc }: { codeSrc: string }) => {
    return (
        <div>
            <h1>CodeRenderer</h1>
            <p>{codeSrc}</p>
        </div>
    );
};

export default CodeRenderer;
