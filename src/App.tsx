import * as React from 'react'

import './App.scss'

interface IAppProps {}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)

        this.state = {
            test: 'asdf'
        }
    }

    public test = () => {
        return 'asdf'
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">d to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        )
    }
}

export default App
