import React from 'react';

type Props = {
    content: string | JSX.Element,
    type?: string,
    handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    disabledFromProps?: boolean
}


export const Button: React.FC<Props> = ({ content, handleClick, disabledFromProps }) => {
    return (
            <>
                <button className="btn"
                        disabled={disabledFromProps}
                        onClick={handleClick}>
                            {content}
                        </button>
            </>
    )
}