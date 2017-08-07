import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import css from './info.less'

import InfoDetail from './InfoDetail'

const links = [
  { id: 1, name: 'item-1' },
  { id: 2, name: 'item-2' },
  { id: 3, name: 'item-3' }
]

@inject('nameList')
@observer

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }
    this.inputChange = this.inputChange.bind(this)
    this.addName = this.addName.bind(this)
  }
  render() {
    document.title = 'Info'
    return(
      <div className="common-wrapper">
        <div style={{overflow: 'hidden'}}>
          <ul className="info-link-wrapper">
            {
              links.map( (item, index) => (
                <li key={item.id}>
                  <Link to={`/info/infoDetail/${item.id}`}>
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>

          <div className="info-detail-wrapper">
            <Route 
              path="/info/infoDetail/:id" 
              component={InfoDetail} />
          </div>
        </div>

        <div className="info-add-name-wrapper">
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.inputChange} />
          <div 
            className="info-add-btn"
            onClick={this.addName}>Add</div>
        </div>
      </div>
    )
  } 
  inputChange(e) {
    const inputVal = e.target.value.trim()
    this.setState({ inputVal })
  }
  addName() {
    const inputVal = this.state.inputVal
    if(inputVal == '') return

    this.props.nameList.addName(inputVal)
    this.setState({inputVal: ''})
    this.props.history.push('/')
  }
}

export default Info