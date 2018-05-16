import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
    display: flex;
    padding: 1rem 2rem;
    background-color: #dfdfdf;
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
