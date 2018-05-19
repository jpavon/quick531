import * as React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { IAppState, IStateChange } from 'components/App'
import { lifts, program } from 'data'
import Input from 'components/Input'
import Program from 'components/Programs'
import styleVariables from 'styles/variables'

interface ILifts {
    state: IAppState
    onStateChange: (arg: IStateChange) => void
}

const Wrapper = styled(Tabs)``
;(Wrapper as any).tabsRole = 'Tabs'

const LiftsTabs = styled(TabList)`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    border-bottom: 1px solid ${styleVariables.borderColor};
`
;(LiftsTabs as any).tabsRole = 'TabList'

const LiftsTab = styled(Tab)`
    flex: 1;
    padding: 1rem 0;

    cursor: pointer;
    transition: 0.2s color, 0.2s border-color;
    border-top: 3px solid transparent;

    &:hover,
    &.react-tabs__tab--selected {
        color: ${styleVariables.highlightColor};
        border-top-color: ${styleVariables.highlightColor};
    }
`
;(LiftsTab as any).tabsRole = 'Tab'

const Title = styled.div`
    margin-bottom: 0.4rem;

    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`

const LiftPanel = styled(TabPanel)``
;(LiftPanel as any).tabsRole = 'TabPanel'

const LiftTabs: React.SFC<ILifts> = (props) => (
    <Wrapper
        selectedIndex={props.state.activeLift}
        onSelect={(index) =>
            props.onStateChange({
                key: 'activeLift',
                value: index
            })
        }
    >
        <LiftsTabs>
            {lifts.map((lift, i) => (
                <LiftsTab key={i}>
                    <Title>{lift.name}</Title>
                    <Input
                        name={lift.key}
                        defaultValue={props.state[lift.key]}
                        onChange={(e) =>
                            props.onStateChange({
                                key: e.currentTarget.name,
                                value: Number(e.currentTarget.value)
                            })
                        }
                    />
                </LiftsTab>
            ))}
        </LiftsTabs>
        {Object.keys(program).map((_, i) => (
            <LiftPanel key={i}>
                <Program
                    state={props.state}
                    onStateChange={props.onStateChange}
                />
            </LiftPanel>
        ))}
    </Wrapper>
)

export default LiftTabs
