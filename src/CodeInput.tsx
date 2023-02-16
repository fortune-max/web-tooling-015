import React from "react";
import { useState } from "react";

const CodeInput = ({
    setCodeSrc,
}: {
    setCodeSrc: (codeSrc: string | undefined) => void;
}) => {
    const [formText, setFormText] = useState<string>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formText) return;
        setCodeSrc(formText);
        setFormText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={formText}
                onChange={(e) => setFormText(e.target.value)}
            />
            <button type="submit">Update Site!</button>
        </form>
    );
};

export default CodeInput;
