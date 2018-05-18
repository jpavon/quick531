import * as React from 'react'
import styled from 'styled-components'

import styleVariables from 'styles/variables'

const Wrapper = styled.header`
    display: flex;
    padding: 1rem 2rem;
    border-bottom: 1px solid ${styleVariables.borderColor};
`

const Logo = styled.div`
    font-size: 1.2em;
    font-weight: 700;
    letter-spacing: 0.1rem;
`

const Header = () => (
    <Wrapper>
        <Logo>quick531</Logo>
    </Wrapper>
)

export default Header
