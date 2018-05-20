import * as React from 'react'
import styled from 'styled-components'

import { Consumer } from 'context'
import Input from 'components/Input'

const StyledInput = styled(Input)``

const Wrapper = styled.div`
    margin: 0 auto;
    margin-top: 3rem;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 300px;

    ${StyledInput} {
        text-align: left;
        font-size: 1.6rem;
    }
`

const Subtitle = styled.h2`
    margin: 0;
    margin-bottom: 0.3rem;
    font-size: 1rem;
`

const Settings: React.SFC = () => (
    <Consumer>
        {({ state, stateChange }) => (
            <Wrapper>
                <Subtitle>Training Max (%):</Subtitle>
                <StyledInput
                    defaultValue={String(state.trainingMax)}
                    name="trainingMax"
                    onChange={(e) =>
                        stateChange({
                            key: 'trainingMax',
                            value: Number(e.currentTarget.value)
                        })
                    }
                />
            </Wrapper>
        )}
    </Consumer>
)

export default Settings
