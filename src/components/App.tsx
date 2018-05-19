import * as React from 'react'
import * as store from 'store'

import Header from 'components/Header'
import Lifts from 'components/Lifts'
import { Lift } from 'data'

interface IAppProps {}

interface ILifts {
    deadlift: number
    squat: number
    benchPress: number
    ohp: number
}

export interface IAppState extends ILifts {
    activeLift: number
    activeProgram: number
}

export type InputEvent = React.FormEvent<HTMLInputElement>

export interface IStateChange {
    key: keyof IAppState
    value: number
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)

        const defaultState = {
            activeLift: 0,
            activeProgram: 0,
            [Lift.deadlift]: 0,
            [Lift.squat]: 0,
            [Lift.benchPress]: 0,
            [Lift.ohp]: 0
        }

        const storedState = store.get('state')

        if (storedState) {
            this.state = storedState
        } else {
            this.state = defaultState
        }
    }

    private handleStateChange = (arg: IStateChange) => {
        const { key, value } = arg

        this.setState(
            {
                ...this.state,
                [key]: value
            },
            () => {
                store.set('state', this.state)
            }
        )
    }

    public render() {
        return (
            <>
                <Header />
                <Lifts
                    state={this.state}
                    onStateChange={this.handleStateChange}
                />
            </>
        )
    }
}

export default App
