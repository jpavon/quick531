import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'context'
import Header from 'components/Header'
import Lifts from 'components/Lifts'
import Settings from 'components/Settings'
import globalStyles from 'styles'

globalStyles()
ReactDOM.render(
    <Provider>
        <Header />
        <Lifts />
        <Settings />
    </Provider>,
    document.getElementById('root')
)
