import React from "react";
import CodeInput from "./CodeInput";
import CodeRenderer from "./CodeRenderer";
import { useState } from "react";

const Edit = () => {
    const [codeSrc, setCodeSrc] = useState<string>("");
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
            <CodeInput
                codeSrc={codeSrc}
                setCodeSrc={setCodeSrc}
                pushToGithub={true}
            />
        </div>
    );
};

export default Edit;
