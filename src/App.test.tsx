import React from "react";
import DynamicComponent from "./DynamicComponent";
import { render, screen } from "@testing-library/react";

describe("App", () => {
    it("Ensure dynamic comopnent is rendered", () => {
        render(<DynamicComponent />);
        const dynamicComponent = screen.getByTestId("dynamic-component");
        expect(dynamicComponent).toBeInTheDocument();
    });
});
