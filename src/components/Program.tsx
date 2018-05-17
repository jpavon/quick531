import * as React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { lifts, program } from 'data'
import { IAppLiftedState } from 'components/App'
import calculateWeight from 'utils/calculateWeight'
import styleVariables from 'styles/variables'

interface IProgram {
    liftedState: IAppLiftedState
    active: number
}

const StyledTabList = styled(TabList)`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 2px solid #fff;
`
;(StyledTabList as any).tabsRole = 'TabList'

const StyledTab = styled(Tab)`
    flex: 1;
    padding: 1rem;
    background-color: #eee;
    text-align: center;
    cursor: pointer;
    transition: 0.2s background-color;
    border-left: 1px solid #fff;

    &:first-child {
        border-left: none;
    }

    &:hover,
    &.react-tabs__tab--selected {
        background-color: ${styleVariables.highlightColor};
    }
`
;(StyledTab as any).tabsRole = 'Tab'

const StyledTabPanel = styled(TabPanel)``
;(StyledTabPanel as any).tabsRole = 'TabPanel'

const ProgramRow = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;

    background-color: #fff;
    border-bottom: 1px solid #999;
    &:first-child {
    }
`

const ProgramCol = styled.div`
    flex: 1;
    padding: 2rem;

    font-size: 2rem;

    &:last-child {
        text-align: right;
    }
`

const Program: React.SFC<IProgram> = (props) => (
    <Tabs>
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
                            {calculateWeight(
                                props.liftedState[lifts[props.active].key],
                                set[0],
                                90
                            )}{' '}
                            kg
                        </ProgramCol>
                    </ProgramRow>
                ))}
            </StyledTabPanel>
        ))}
    </Tabs>
)

export default Program
