declare var module: { hot: any }

import * as React from 'react'
import * as ReactDom from 'react-dom'
import { App } from  './App'
import { AppContainer } from 'react-hot-loader';

/* Step one involves actually creating an element we can store
 * the react element in.
 */
const container = document.getElementById('app-container')

/* Now, lets render the actual element using react */
const render = (Component: () => JSX.Element) => ReactDom.render(
  <AppContainer><Component /></AppContainer>,
  container
)
render(App)

/* Handle all webpack dev server react hot hoader stuff. */
if (module.hot) {
  module.hot.accept('./App.tsx', () => {
    render(App)
  })
}
