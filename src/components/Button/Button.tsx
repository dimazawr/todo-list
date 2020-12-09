import React from 'react';

type Props = {
    content: string | JSX.Element,
    type?: string,
    handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    disabledFromProps?: boolean
    testId?: string 
}


export const Button: React.FC<Props> = ({ content, handleClick, disabledFromProps, testId }) => {
    return (
            <>
                <button className="btn"
                        data-testid={testId}
                        disabled={disabledFromProps}
                        onClick={handleClick}>
                            {content}
                        </button>
            </>
    )
}