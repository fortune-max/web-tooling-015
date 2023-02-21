import React from "react";
import { default as Todo } from "./Todo";
import DynamicComponent from "./DynamicComponent";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

describe("App", () => {
    it("Ensure dynamic comopnent is rendered", () => {
        render(<DynamicComponent />);
        const dynamicComponent = screen.getByTestId("dynamic-component");
        expect(dynamicComponent).toBeInTheDocument();
    });

    it("should render the todo form", () => {
        render(<Todo />);
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });

    it("should add a todo item on Enter pressed", async () => {
        render(<Todo />);
        const item_old = screen.queryByTestId("todo-item");
        expect(item_old).not.toBeInTheDocument();
        const input = screen.getByRole("textbox");
        userEvent.type(input, "test task");
        expect(input).toHaveFocus();
        userEvent.keyboard("{enter}");
        const item = await screen.findByTestId("todo-item");
        expect(item).toBeInTheDocument();
    });

    it("should add a todo item on Save button pressed", async () => {
        render(<Todo />);
        const item_old = screen.queryByTestId("todo-item");
        expect(item_old).not.toBeInTheDocument();
        const input = screen.getByRole("textbox");
        userEvent.type(input, "test task");
        const button = screen.getByRole("button", { name: /save todo/i });
        userEvent.click(button);
        const item = await screen.findByTestId("todo-item");
        expect(item).toBeInTheDocument();
    });
});
