import * as React from 'react'
import styled from 'styled-components'
import { IAppLiftedState } from 'components/App'

interface ILiftTabsProps {
    lifts: IAppLiftedState
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
    display: flex;
`

const Lift = styled.div`
    flex: 1;
    padding: 1rem 0;

    background-color: #efefef;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;

    &:first-child {
        border-left: none;
    }
`

const Title = styled.div`
    margin-bottom: 0.4rem;

    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`

const Input = styled.input`
    width: 100%;
    padding: 0.4rem 0;

    font-size: 1.3em;
    font-weight: 400;
    color: #444;
    background-color: transparent;
    border: none;
    text-align: center;
`

const LiftTabs: React.SFC<ILiftTabsProps> = (props) => (
    <Wrapper>
        <Lift>
            <Title>Squat</Title>
            <Input
                name="s"
                defaultValue={props.lifts.s}
                onChange={props.onChange}
            />
        </Lift>
        <Lift>
            <Title>Bench Press</Title>
            <Input
                name="bp"
                defaultValue={props.lifts.bp}
                onChange={props.onChange}
            />
        </Lift>
        <Lift>
            <Title>Deadlift</Title>
            <Input
                name="d"
                defaultValue={props.lifts.d}
                onChange={props.onChange}
            />
        </Lift>
        <Lift>
            <Title>OHP</Title>
            <Input
                name="ohp"
                defaultValue={props.lifts.ohp}
                onChange={props.onChange}
            />
        </Lift>
    </Wrapper>
)

export default LiftTabs
