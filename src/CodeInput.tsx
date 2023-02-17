import React from "react";
import { useState } from "react";
import { Octokit } from "@octokit/core";
// import prettier from "prettier/standalone";

const CodeInput = ({
    codeSrc,
    setCodeSrc,
    pushToGithub,
}: {
    codeSrc: string;
    setCodeSrc: (codeSrc: string) => void;
    pushToGithub?: boolean;
}) => {
    const [formText, setFormText] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formText) return;
        setCodeSrc(prettifyCode(formText));
        if (pushToGithub) await updateGithubFile(codeSrc);
        setFormText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "row", gap: "8px" }}
        >
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

async function getFileSha(fileUrl: string) {
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_TOKEN,
    });
    const response = await octokit.request(`GET ${fileUrl}`);
    return response.data.sha;
}

async function updateGithubFile(content: string) {
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_TOKEN,
    });

    const fileUrl =
        "/repos/fortune-max/web-tooling-015/contents/DynamicComponent.tsx";
    const fileSha = await getFileSha(fileUrl);

    await octokit.request(`PUT ${fileUrl}`, {
        message: "update files",
        sha: fileSha,
        content: btoa(content),
    });

    return content;
}

function prettifyCode(codeSrc: string) {
    const prettier = require('prettier');
    const babelParser = require("prettier/parser-babel");
    return prettier.format(codeSrc, {
        parser: "babel",
        plugins: [babelParser],
    });
}

export default CodeInput;
