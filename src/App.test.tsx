import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello world! heading", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", { name: /hello world!/i });
  expect(headingElement).toBeInTheDocument();
});