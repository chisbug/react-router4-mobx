import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import nameList from './store'

import css from './common.less'

import App from './components/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider nameList={nameList}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
