import * as React from 'react'
import * as store from 'store'

import { Provider } from 'context'
import Header from 'components/Header'
import Lifts from 'components/Lifts'
import Settings from 'components/Settings'
import { Lift } from 'data'

interface IAppProps {}

interface ILifts {
    deadlift: number
    squat: number
    benchPress: number
    ohp: number
}

interface IState extends ILifts {
    activeLift: number
    activeProgram: number
    trainingMax: number
}

export interface IAppState {
    state: IState
    stateChange: (arg: IStateChange) => void
}

export type InputEvent = React.FormEvent<HTMLInputElement>

export interface IStateChange {
    key: keyof IState
    value: number
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)

        const storedState = store.get('state')

        const defaultState = {
            activeLift: 0,
            activeProgram: 0,
            trainingMax: 90,
            [Lift.Deadlift]: 0,
            [Lift.Squat]: 0,
            [Lift.BenchPress]: 0,
            [Lift.OHP]: 0
        }

        let state

        if (storedState) {
            state = storedState
        } else {
            state = defaultState
        }

        this.state = {
            state,
            stateChange: this.handleStateChange
        }
    }

    private handleStateChange = (arg: IStateChange) => {
        const { key, value } = arg

        this.setState(
            {
                ...this.state,
                state: {
                    ...this.state.state,
                    [key]: value
                }
            },
            () => {
                store.set('state', this.state.state)
            }
        )
    }

    public render() {
        return (
            <Provider value={this.state}>
                <Header />
                <Lifts />
                <Settings />
            </Provider>
        )
    }
}

export default App
