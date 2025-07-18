import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";

// Custom render function that includes Mantine provider
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };
