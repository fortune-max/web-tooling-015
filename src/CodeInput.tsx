import React from "react";
import { useState } from "react";
import { Octokit } from "@octokit/core";

const CodeInput = ({
    setCodeSrc,
}: {
    setCodeSrc: (codeSrc: string) => void;
}) => {
    const [formText, setFormText] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formText) return;
        setCodeSrc(formText);
        await updateGithubFile(formText);
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

    const fileUrl = "/repos/fortune-max/test-repo/contents/bye.txt";
    const fileSha = await getFileSha(fileUrl);

    await octokit.request(`PUT ${fileUrl}`, {
        message: "update files",
        sha: fileSha,
        content: btoa(content),
    });

    return content;
}

export default CodeInput;
