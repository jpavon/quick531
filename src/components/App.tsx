import * as React from 'react'
import { createBrowserHistory } from 'history'
import { withUrlState, UrlStateProps } from 'with-url-state'

import Header from 'components/Header'
import Lifts from 'components/Lifts'
import { lifts } from 'data'

const history = createBrowserHistory()

interface IAppProps {}

interface IAppState {
    activeLift: number
    activeProgram: number
}

export interface IAppLiftedState {
    d: string
    s: string
    bp: string
    ohp: string
}

export type InputEvent = React.FormEvent<HTMLInputElement>

export interface IStateChange {
    key: keyof IAppState
    index: number
}

class App extends React.Component<
    IAppProps & UrlStateProps<IAppLiftedState>,
    IAppState
> {
    constructor(props: IAppProps & UrlStateProps<IAppLiftedState>) {
        super(props)

        this.state = {
            activeLift: 0,
            activeProgram: 0
        }
    }

    private handleInputChange = (event: InputEvent) => {
        this.props.setUrlState({
            ...this.props.urlState,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    private handleStateChange = (arg: IStateChange) => {
        const { key, index } = arg

        this.setState({
            ...this.state,
            [key]: index
        })
    }

    public render() {
        return (
            <>
                <Header />
                <Lifts
                    liftedState={this.props.urlState}
                    onInputChange={this.handleInputChange}
                    onStateChange={this.handleStateChange}
                    activeLift={this.state.activeLift}
                    activeProgram={this.state.activeProgram}
                />
            </>
        )
    }
}

const urlProps = lifts.reduce((prev, curr) => ({ ...prev, [curr.key]: 0 }), {})

export default withUrlState<IAppProps, IAppLiftedState>(
    history,
    () => urlProps as IAppLiftedState
)(App)
