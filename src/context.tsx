import * as React from 'react'
import * as store from 'store'

import { Lift } from 'data'

const STORE_KEY = 'data'

interface IData {
    activeLift: number
    activeProgram: number
    trainingMax: number
    deadlift: number
    squat: number
    benchPress: number
    ohp: number
}

interface IUpdateArg {
    key: keyof IData
    value: number
}

interface IProviderState {
    data: IData
    update: (arg: IUpdateArg) => void
}

const Context = React.createContext({} as IProviderState)

class Provider extends React.Component<{}, IProviderState> {
    constructor(props: {}) {
        super(props)

        const storedData = store.get(STORE_KEY)

        const defaultData = {
            activeLift: 0,
            activeProgram: 0,
            trainingMax: 90,
            [Lift.Deadlift]: 0,
            [Lift.Squat]: 0,
            [Lift.BenchPress]: 0,
            [Lift.OHP]: 0
        }

        let data

        if (storedData) {
            data = storedData
        } else {
            data = defaultData
        }

        this.state = {
            data,
            update: this.handleUpdate
        }
    }

    private handleUpdate = (arg: IUpdateArg) => {
        const { key, value } = arg

        this.setState(
            {
                ...this.state,
                data: {
                    ...this.state.data,
                    [key]: value
                }
            },
            () => {
                const data: IData = this.state.data
                store.set(STORE_KEY, data)
            }
        )
    }

    public render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer

export { Provider, Consumer }
