import * as React from 'react'
import styled from 'styled-components'
import { IAppLiftedState } from 'components/App'

interface ILiftContentProps {
    active: keyof IAppLiftedState
    lifts: IAppLiftedState
}

const Wrapper = styled.div`
    display: flex;
    padding: 2rem;
`

const LiftContent: React.SFC<ILiftContentProps> = (props) => (
    <Wrapper>
        <div>50% {props.lifts[props.active]}</div>
    </Wrapper>
)

export default LiftContent
