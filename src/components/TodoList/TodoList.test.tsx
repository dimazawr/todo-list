import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoList } from "./TodoList";
import moment from "moment";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("TodoList", () => {
  test("renders TodoList component", () => {
    const initialState = {
        todos: []
      };
    const store = mockStore(initialState)
    const wrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { getByText } = render(<TodoList />, { wrapper });
    expect(getByText(/There are no todos yet.../i)).toBeInTheDocument();
  });

  test("renders Todos from store", () => {
    const initialState = {
      todos: [
        {
          id: "tqqd5ael",
          title: "some stuff",
          desc: "something",
          date: moment().format("MMMM Do YYYY"),
        },
      ],
    };
    const store = mockStore(initialState);
    const wrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { getByText } = render(<TodoList />, { wrapper });
    expect(getByText(/some stuff/i)).toBeInTheDocument();
  });
});
