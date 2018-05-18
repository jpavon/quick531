import * as React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;

    font-size: 2em;
    font-weight: 400;
    color: #444;
    background-color: transparent;
    border: none;
    text-align: center;
    cursor: pointer;

    &[type='number'] {
        -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

class Input extends React.Component<
    React.InputHTMLAttributes<HTMLInputElement>
> {
    private handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.select()
    }

    public render() {
        return (
            <StyledInput
                type="number"
                onFocus={this.handleFocus}
                {...this.props}
            />
        )
    }
}

export default Input
