import * as React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { lifts, program } from 'data'
import { IAppLiftedState } from 'components/App'
import calculateWeight from 'utils/calculateWeight'
import styleVariables from 'styles/variables'

interface IProgram {
    liftedState: IAppLiftedState
    onActiveProgramChange: (index: number) => void
    activeLift: number
    activeProgram: number
}

const StyledTabs = styled(Tabs)`
    margin: 0 auto;
    max-width: 800px;
`
;(StyledTabs as any).tabsRole = 'Tabs'

const StyledTabList = styled(TabList)`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
`
;(StyledTabList as any).tabsRole = 'TabList'

const StyledTab = styled(Tab)`
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
;(StyledTab as any).tabsRole = 'Tab'

const StyledTabPanel = styled(TabPanel)``
;(StyledTabPanel as any).tabsRole = 'TabPanel'

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

const Program: React.SFC<IProgram> = (props) => (
    <StyledTabs
        selectedIndex={props.activeProgram}
        onSelect={props.onActiveProgramChange}
    >
        <StyledTabList>
            {Object.values(program).map((p, i) => (
                <StyledTab key={i}>{p.name}</StyledTab>
            ))}
        </StyledTabList>

        {Object.values(program).map((p, i) => (
            <StyledTabPanel key={i}>
                {p.sets.map((set, index) => (
                    <ProgramRow key={index}>
                        <ProgramCol>
                            {set[1]} reps @ {set[0]}%
                        </ProgramCol>
                        <ProgramCol>
                            {calculateWeight({
                                weight:
                                    props.liftedState[
                                        lifts[props.activeLift].key
                                    ],
                                percentage: set[0],
                                rm: 90
                            })}
                        </ProgramCol>
                    </ProgramRow>
                ))}
            </StyledTabPanel>
        ))}
    </StyledTabs>
)

export default Program
