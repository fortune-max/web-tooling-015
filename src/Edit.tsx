import React from "react";
import CodeInput from "./CodeInput";
import CodeRenderer from "./CodeRenderer";
import { useState } from "react";

const Edit = () => {
    const [codeSrc, setCodeSrc] = useState<string>();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
            }}
        >
            <CodeRenderer codeSrc={codeSrc} />
            <CodeInput setCodeSrc={setCodeSrc} />
        </div>
    );
};

export default Edit;
