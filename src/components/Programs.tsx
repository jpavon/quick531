import * as React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { lifts, programs } from 'data'
import { Consumer } from 'context'
import calculateWeight from 'utils/calculateWeight'
import styleVariables from 'styles/variables'

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

    &:first-child {
        padding-right: 0;
    }

    &:last-child {
        text-align: right;
        flex: 0 0 30%;
    }

    @media (max-width: 600px) {
        font-size: 1.6rem;
    }
`

const Programs: React.SFC = () => (
    <Consumer>
        {({ data, update }) => (
            <Wrapper
                selectedIndex={data.activeProgram}
                onSelect={(index) =>
                    update({
                        key: 'activeProgram',
                        value: index
                    })
                }
            >
                <ProgramsTabs>
                    {programs.map((program, i) => (
                        <ProgramsTab key={i} data-e2e="programs-tab">
                            {program.name}
                        </ProgramsTab>
                    ))}
                </ProgramsTabs>
                {programs.map((program, i) => (
                    <ProgramPanel key={i}>
                        {program.sets.map((set, index) => (
                            <ProgramRow key={index}>
                                <ProgramCol>
                                    {set.reps} reps @ {set.percentage}%
                                </ProgramCol>
                                <ProgramCol>
                                    {calculateWeight({
                                        weight:
                                            data[lifts[data.activeLift].key],
                                        percentage: set.percentage,
                                        trainingMax: data.trainingMax
                                    })}
                                </ProgramCol>
                            </ProgramRow>
                        ))}
                    </ProgramPanel>
                ))}
            </Wrapper>
        )}
    </Consumer>
)

export default Programs
