import * as React from 'react'
import { createBrowserHistory } from 'history'
import { withUrlState, UrlStateProps } from 'with-url-state'

import Header from 'components/Header'
import LiftTabs from 'components/LiftTabs'
import LiftContent from 'components/LiftContent'

const history = createBrowserHistory()

interface IAppProps {}

export interface IAppState {
    active: keyof IAppLiftedState
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
    // tslint:disable-next-line:no-shadowed-variable
    constructor(props: IAppProps & UrlStateProps<IAppLiftedState>) {
        super(props)

        this.state = {
            active: 'bp'
        }
    }

    private onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        return this.props.setUrlState({
            ...this.props.urlState,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    public render() {
        return (
            <>
                <Header />
                <LiftTabs
                    lifts={this.props.urlState}
                    onChange={this.onInputChange}
                />
                <LiftContent
                    lifts={this.props.urlState}
                    active={this.state.active}
                />
            </>
        )
    }
}

const urlProps = {
    d: '0',
    s: '0',
    bp: '0',
    ohp: '0'
}

export default withUrlState<IAppProps, IAppLiftedState>(
    history,
    (prop: IAppProps) => urlProps
)(App)
