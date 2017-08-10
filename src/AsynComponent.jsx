/*
  AsynComponent为高阶组件:
    接收一个普通的同步组件
    经过Bundle组件的包裹变成异步组件并返回
    (这里要注意props必须传入组件, 否则会导致组件不能响应地更新渲染)
  
  <Route>中使用AsynComponent来包装普通组件为异步组件
*/
import React, { Component } from 'react'

class Bundle extends Component {
  state = {
    mod: null
  }
  componentWillMount() {
    this.load(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }
  load(props) {
    this.setState({mod: null})
    props.load( (mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }
  render() {
    if(!this.state.mod) return false
    return this.props.children(this.state.mod)
  }
}

const AsynComponent = (Component, props) => (
  <Bundle load={Component}>
    { (Component) => <Component {...props} /> }
  </Bundle>
)

export default AsynComponent