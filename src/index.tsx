import React from 'react'
import ReactDOM from 'react-dom'
import AppProvider from './AppProvider'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(<AppProvider />, document.getElementById('root'))

serviceWorkerRegistration.register()
