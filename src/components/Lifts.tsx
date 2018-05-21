import * as React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { lifts, programs } from 'data'
import { Consumer } from 'context'
import Input from 'components/Input'
import Programs from 'components/Programs'
import styleVariables from 'styles/variables'

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

const LiftTabs: React.SFC = () => (
    <Consumer>
        {({ data, update }) => (
            <Wrapper
                selectedIndex={data.activeLift}
                onSelect={(index) =>
                    update({
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
                                defaultValue={String(data[lift.key])}
                                onChange={(e) =>
                                    update({
                                        key: lift.key,
                                        value: Number(e.currentTarget.value)
                                    })
                                }
                            />
                        </LiftsTab>
                    ))}
                </LiftsTabs>
                {Object.keys(programs).map((_, i) => (
                    <LiftPanel key={i}>
                        <Programs />
                    </LiftPanel>
                ))}
            </Wrapper>
        )}
    </Consumer>
)

export default LiftTabs
