import * as React from 'react'
import styled from 'styled-components'

import { IAppState, IStateChange } from 'App'
import Input from 'components/Input'

const StyledInput = styled(Input)``

const Wrapper = styled.div`
    margin: 0 auto;
    margin-top: 3rem;
    width: 100%;
    max-width: 500px;

    ${StyledInput} {
        text-align: left;
    }
`

const Title = styled.h2`
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    /* text-align: center; */
`

const Subtitle = styled.h2`
    margin: 0;
    margin-bottom: 0.3rem;
    font-size: 1rem;
    /* text-align: center; */
`

interface ISettings {
    state: IAppState
    stateChange: (arg: IStateChange) => void
}

const Settings: React.SFC<ISettings> = (props) => (
    <Wrapper>
        <Title>Settings</Title>
        <Subtitle>Training Max (%):</Subtitle>
        <StyledInput
            defaultValue={String(props.state.trainingMax)}
            name="trainingMax"
            onChange={(e) =>
                props.stateChange({
                    key: 'trainingMax',
                    value: Number(e.currentTarget.value)
                })
            }
        />
    </Wrapper>
)

export default Settings
