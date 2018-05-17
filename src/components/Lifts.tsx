import * as React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { IAppLiftedState } from 'components/App'
import { lifts, program } from 'data'
import Input from 'components/Input'
import Program from 'components/Program'

interface ILift {
    liftedState: IAppLiftedState
    onInputChange: (e: React.FormEvent<HTMLInputElement>) => void
    onActiveChange: (index: number) => void
    active: number
}

const StyledTabs = styled(Tabs)``
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
    padding: 1rem 0;

    background-color: #efefef;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    cursor: pointer;
    transition: 0.2s background-color;

    &:first-child {
        border-left: none;
    }

    &:hover,
    &.react-tabs__tab--selected {
        background-color: #c9e8ff;
    }

    ${Input} {
    }
`
;(StyledTab as any).tabsRole = 'Tab'

const Title = styled.div`
    margin-bottom: 0.4rem;

    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`

const StyledTabPanel = styled(TabPanel)``
;(StyledTabPanel as any).tabsRole = 'TabPanel'

const LiftTabs: React.SFC<ILift> = (props) => (
    <StyledTabs selectedIndex={props.active} onSelect={props.onActiveChange}>
        <StyledTabList>
            {lifts.map((lift, i) => (
                <StyledTab key={i}>
                    <Title>{lift.name}</Title>
                    <Input
                        name={lift.key}
                        defaultValue={props.liftedState[lift.key]}
                        onChange={props.onInputChange}
                    />
                </StyledTab>
            ))}
        </StyledTabList>
        {Object.keys(program).map((_, i) => (
            <StyledTabPanel key={i}>
                <Program
                    liftedState={props.liftedState}
                    active={props.active}
                />
            </StyledTabPanel>
        ))}
    </StyledTabs>
)

export default LiftTabs
