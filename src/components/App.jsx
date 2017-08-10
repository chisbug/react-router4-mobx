import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import AsynComponent from '../AsynComponent'

import css from './app.less'

// 同步组件
import Home from './Home'
// 异步组件 (在webpack配置的output里需要配置chunkFilename项)
import Info from 'bundle-loader?lazy&name=[name]!./Info'

const App = () => (
  <Router>
    <div className="app-wrapper">
      <h2>react-router 4.1.2</h2>

      <div className="app-link-wrapper">
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
      </div>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/info" component={ props => AsynComponent(Info, props) } />
    </div>
  </Router>
)

export default App
