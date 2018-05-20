import * as React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { lifts, program } from 'data'
import { IAppState, IStateChange } from 'App'
import calculateWeight from 'utils/calculateWeight'
import styleVariables from 'styles/variables'

interface IPrograms {
    state: IAppState
    stateChange: (arg: IStateChange) => void
}

const Wrapper = styled(Tabs)`
    margin: 0 auto;
    max-width: 800px;
`
;(Wrapper as any).tabsRole = 'Tabs'

const ProgramsTabs = styled(TabList)`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
`
;(ProgramsTabs as any).tabsRole = 'TabList'

const ProgramsTab = styled(Tab)`
    flex: 1;
    padding: 1rem;

    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 700;
    transition: 0.2s color;

    &:hover,
    &.react-tabs__tab--selected {
        color: ${styleVariables.highlightColor};
    }
`
;(ProgramsTab as any).tabsRole = 'Tab'

const ProgramPanel = styled(TabPanel)``
;(ProgramPanel as any).tabsRole = 'TabPanel'

const ProgramRow = styled.div`
    display: flex;
    margin: 0 auto;

    background-color: #fff;
    border-bottom: 1px solid ${styleVariables.borderColor};

    &:first-child {
        border-top: 1px solid ${styleVariables.borderColor};
    }
`

const ProgramCol = styled.div`
    flex: 1;
    padding: 2rem;

    font-size: 2rem;
    text-transform: uppercase;

    &:last-child {
        text-align: right;
    }
`

const Programs: React.SFC<IPrograms> = (props) => (
    <Wrapper
        selectedIndex={props.state.activeProgram}
        onSelect={(index) =>
            props.stateChange({
                key: 'activeProgram',
                value: index
            })
        }
    >
        <ProgramsTabs>
            {Object.values(program).map((p, i) => (
                <ProgramsTab key={i}>{p.name}</ProgramsTab>
            ))}
        </ProgramsTabs>
        {Object.values(program).map((p, i) => (
            <ProgramPanel key={i}>
                {p.sets.map((set, index) => (
                    <ProgramRow key={index}>
                        <ProgramCol>
                            {set[1]} reps @ {set[0]}%
                        </ProgramCol>
                        <ProgramCol>
                            {calculateWeight({
                                weight:
                                    props.state[
                                        lifts[props.state.activeLift].key
                                    ],
                                percentage: set[0] as number,
                                trainingMax: props.state.trainingMax
                            })}
                        </ProgramCol>
                    </ProgramRow>
                ))}
            </ProgramPanel>
        ))}
    </Wrapper>
)

export default Programs