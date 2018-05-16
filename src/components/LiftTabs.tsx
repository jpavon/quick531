import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
`

const Lift = styled.div`
    flex: 1;
    text-align: center;
    padding: 1rem;
    background-color: #ddd;
    text-transform: uppercase;
`

const LiftTabs = () => (
    <Wrapper>
        <Lift>Squat</Lift>
        <Lift>Bench Press</Lift>
        <Lift>Deadlift</Lift>
        <Lift>OHP</Lift>
    </Wrapper>
)

export default LiftTabs
