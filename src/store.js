import { observable, action } from 'mobx'

class NameList {
  @observable list
  @action addName = (name) => {
    const size = this.list.length
    const newName = {id: size+1, name: name}
    this.list.push(newName)
  }

  constructor() {
    this.list = [
      { id: 1, name: 'Tom' },
      { id: 2, name: 'Jerry' }
    ]
  }
}

const nameList = new NameList()
export default nameList