import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Bundle from '../bundle'

import css from './app.less'

// 同步组件
import Home from './Home'
// 异步组件(在webpack配置的output里需要配置chunkFilename项)
import Info from 'bundle-loader?lazy&name=[name]!./Info'

/*
  在asynComponent方法中使用Bundle组件把需要异步加载的组件包装起来
  这里要注意props必须传入组件, 否则会导致组件不能响应地更新渲染
  
  <Route>中使用asynComponent函数挂载异步组件
*/
const asynComponent = (Component, props) => (
  <Bundle load={Component}>
    { (Component) => <Component {...props} /> }
  </Bundle>
)

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
      <Route path="/info" component={ props => asynComponent(Info, props) } />
    </div>
  </Router>
)

export default App
