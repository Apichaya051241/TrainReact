import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { store } from "./store/stores";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText("App: 0")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /add/i }));
  expect(screen.getByText("App: 1")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /add/i }));
  expect(screen.getByText("App: 2")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /reset/i }));
  expect(screen.getByText("App: 0")).toBeInTheDocument();
});
