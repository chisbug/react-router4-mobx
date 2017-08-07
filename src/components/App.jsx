import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import css from './app.less'

import Home from './Home'
import Info from './Info'

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
      <Route path="/info" component={Info} />
    </div>
  </Router>
)

export default App
