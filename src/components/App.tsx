import * as React from 'react'
import { createBrowserHistory } from 'history'
import { withUrlState, UrlStateProps } from 'with-url-state'

import Header from 'components/Header'
import Lifts from 'components/Lifts'
import { lifts } from 'data'

const history = createBrowserHistory()

interface IAppProps {}

export interface IAppState {
    activeLift: number
    activeProgram: number
}

export interface IAppLiftedState {
    d: string
    s: string
    bp: string
    ohp: string
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

    private handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        return this.props.setUrlState({
            ...this.props.urlState,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    private handleOnActiveLiftChange = (index: number) => {
        this.setState({ activeLift: index })
    }

    private handleOnActiveProgramChange = (index: number) => {
        this.setState({ activeProgram: index })
    }

    public render() {
        return (
            <>
                <Header />
                <Lifts
                    liftedState={this.props.urlState}
                    onInputChange={this.handleInputChange}
                    onActiveLiftChange={this.handleOnActiveLiftChange}
                    onActiveProgramChange={this.handleOnActiveProgramChange}
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
