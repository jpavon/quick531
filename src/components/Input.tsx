import * as React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    padding: 0.4rem 0;

    font-size: 1.3em;
    font-weight: 400;
    color: #444;
    background-color: transparent;
    border: none;
    text-align: center;
`

const Input: React.SFC<React.InputHTMLAttributes<HTMLInputElement>> = (
    props
) => <StyledInput {...props} />

export default Input
