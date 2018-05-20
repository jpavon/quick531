import * as React from 'react'
import { IAppState } from 'App'

const { Provider, Consumer } = React.createContext({} as IAppState)

export { Provider, Consumer }
