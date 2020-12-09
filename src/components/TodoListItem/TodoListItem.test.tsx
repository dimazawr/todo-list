import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoListItem } from "./TodoListItem";
import moment from "moment";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../redux/rootReducer";

const store = createStore(rootReducer);

const wrapper: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe("TodoListItem", () => {
  test("renders TodoListItem component with props ", () => {
    const { getByText } = render(
      <TodoListItem
        id={"id123"}
        title={"My Todo"}
        desc={"todo something"}
        date={moment().format("MMMM Do YYYY")}
      />,
      { wrapper }
    );
    expect(getByText(/my todo/i)).toBeInTheDocument();
    expect(getByText(/todo something/i)).toBeInTheDocument();
    expect(getByText(moment().format("MMMM Do YYYY"))).toBeInTheDocument();
  });

  test("When clicks on button with Pencil icon inside, updateTodoForm renders", () => {
    const { getByTestId, getByDisplayValue } = render(
      <TodoListItem
        id={"id123"}
        title={"My Todo"}
        desc={"todo something"}
        date={moment().format("MMMM Do YYYY")}
      />,
      { wrapper }
    );
    fireEvent.click(getByTestId(/btn-edit/i));
    expect(getByDisplayValue(/my todo/i)).toBeInTheDocument();
    expect(getByDisplayValue(/todo something/i)).toBeInTheDocument();
  });
});
