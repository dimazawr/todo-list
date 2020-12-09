import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';



describe('Button', () => {
    test('renders Button component', () => {
        render(<Button content="some" />);
    });

    describe('Renders Button with props', () => {
        test('Renders content prop', () => {
            const { getByText } = render(<Button content="CLICK ME" />)
            getByText(/click me/i)
        })

        test('Getting testId prop', () => {
            const { getByTestId } = render(<Button content="CLICK ME" testId={'test'}/>)
            getByTestId(/test/i)

        })

        test('Button is getting disabled state from the props', () => {
            const { getByText } = render(<Button disabledFromProps={true} content="CLICK ME" />)
            expect(getByText(/click me/i).closest('button')).toBeDisabled()
        })

        test('Button is getting click function from the props and click works', () => {
            const handleClick = jest.fn();
            const { getByText } = render(<Button handleClick={handleClick} content="CLICK ME" disabledFromProps={false}/>)
            fireEvent.click(getByText(/click me/i))
            expect(handleClick).toHaveBeenCalled()
        })
    })
});