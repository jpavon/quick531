import * as React from 'react'

import { Provider } from 'context'
import Header from 'components/Header'
import Lifts from 'components/Lifts'
import Settings from 'components/Settings'

const App: React.SFC = () => (
    <Provider>
        <Header />
        <Lifts />
        <Settings />
    </Provider>
)

export default App
