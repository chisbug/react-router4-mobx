import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import css from './home.less'

@inject('nameList')
@observer

class Home extends Component {
  componentWillMount() {
    document.title = 'Home'
  }
  render() {
    const nameList = this.props.nameList.list
    return(
      <div className="common-wrapper">
        <p className="home-sub-title">name list</p>
        <ul className="home-name-list">
          {
            nameList.map( (item, index) => (
              <li key={item.id}>{item.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Home