import React from "react";
import { fireEvent, render, screen , waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";


const store = createStore(rootReducer);

const wrapper: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);


describe('App', () => {
    test('Renders App with all children', () => {
        const { getByText, getByTestId } = render(<App/>, {wrapper})
        expect(getByText(/There are no todos yet.../i)).toBeInTheDocument()
        expect(getByText(/add todo/i)).toBeInTheDocument()
        expect(getByTestId(/btn-rec/i)).toBeInTheDocument()
        expect(getByTestId(/btn-stop/i)).toBeInTheDocument()
        expect(getByTestId(/btn-play/i)).toBeInTheDocument()
        expect(getByTestId(/btn-delete-recHistory/i)).toBeInTheDocument()
    })

    describe('Buttons work as expected', () => {
        test('Add Todo button opens AddTodoForm and closes it with text value=Close', () => {
            const { getByText, getByPlaceholderText } = render(<App/>, {wrapper})
            fireEvent.click(getByText(/add todo/i))
            expect(getByPlaceholderText(/Todo Title/i)).toBeInTheDocument()
            expect(getByPlaceholderText(/Write a description of your todo.../i)).toBeInTheDocument()
            expect(getByText(/add/i)).toBeInTheDocument()
            fireEvent.click(getByText(/close/i))
        })

        test('Add button inside AddTodoForm adds Todo to the list', () => {
            const { getByText, getByPlaceholderText } = render(<App/>, {wrapper})
            fireEvent.click(getByText(/add todo/i))
            fireEvent.change(getByPlaceholderText(/Todo Title/i), { target: { value: 'My Todo' } })
            fireEvent.change(getByPlaceholderText(/Write a description of your todo.../i), { target: { value: 'Test Todo desc' } })
            fireEvent.click(getByText(/add/i))
            expect(getByText(/my todo/i)).toBeInTheDocument()
            expect(getByText(/Test Todo desc/i)).toBeInTheDocument()
        })

        test('Delete todo button removes todo from the list', () => {
            const { getByText, getByTestId, queryByText } = render(<App/>, {wrapper})
            expect(getByText(/my todo/i)).toBeInTheDocument()
            expect(getByText(/Test Todo desc/i)).toBeInTheDocument()
            fireEvent.click(getByTestId(/btn-delete-todo/i));
            expect(queryByText(/my todo/i)).not.toBeInTheDocument()
            expect(queryByText(/Test Todo desc/i)).not.toBeInTheDocument()
            expect(getByText(/there are no todos yet.../i)).toBeInTheDocument()
        })

        test('Stop button should be disabled, while rec button is enabled', () => {
            const { getByTestId } = render(<App/>, {wrapper})
            expect(getByTestId(/btn-stop/i)).toBeDisabled()
            expect(getByTestId(/btn-rec/i)).not.toBeDisabled()
        })


        test('When rec is pressed, rec and play buttons become disabled', () => {
            const { getByTestId } = render(<App/>, {wrapper})
            fireEvent.click(getByTestId(/btn-rec/i))
            expect(getByTestId(/btn-play/i)).toBeDisabled()
            expect(getByTestId(/btn-rec/i)).toBeDisabled()
            // resets app
            fireEvent.click(getByTestId(/btn-delete-recHistory/i))
        })

        test('When rec is on, after click on stop, all buttons become enabled', () => {
            const { getByTestId, getAllByRole } = render(<App/>, {wrapper})
            fireEvent.click(getByTestId(/btn-rec/i))
            expect(getByTestId(/btn-play/i)).toBeDisabled()
            expect(getByTestId(/btn-rec/i)).toBeDisabled()
            fireEvent.click(getByTestId(/btn-stop/i))
            const buttons = getAllByRole('button')
            for (let btn of buttons) {
                expect(btn).not.toBeDisabled()
            }

        })

        test('When trash bin button is pressed, stop and play buttons become disabled', () => {
            const { getByTestId } = render(<App/>, {wrapper})
            fireEvent.click(getByTestId(/btn-delete-recHistory/i))
            expect(getByTestId(/btn-play/i)).toBeDisabled()
            expect(getByTestId(/btn-stop/i)).toBeDisabled()            
        })
    })
})