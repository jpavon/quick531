import * as React from 'react'
import { createBrowserHistory } from 'history'
import { withUrlState, UrlStateProps } from 'with-url-state'

import Header from 'components/Header'
import LiftTabs from 'components/LiftTabs'

const history = createBrowserHistory()

interface IAppProps {}

interface IAppLiftedState {
    d: string
    s: string
    bp: string
    ohp: string
}

class App extends React.Component<IAppProps & UrlStateProps<IAppLiftedState>> {
    public render() {
        return (
            <>
                <Header />
                <LiftTabs />
            </>
        )
    }
}

const props = {
    d: '0',
    s: '0',
    bp: '0',
    ohp: '0'
}

export default withUrlState<IAppProps, IAppLiftedState>(
    history,
    (prop: IAppProps) => props
)(App)
