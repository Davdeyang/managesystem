import React, {Component,Fragment} from 'react'

class Hi extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',// 用来存储 input框中的 value值。
      list:[] // 用来存储 每一个li的 value值。
    }
  }
  handleInputChange = (e) => {
    const value = this.input.value;
    this.setState(() => ({inputValue: value}))//新版的react中的setState()函数可以接收一个函数，箭头函数的函数体使用（）包裹可以省略return
  }
  addList = () => {
    this.setState((prevState) => { // 同时setState函数还提供一个prevState参数，这个参数代表未改变之前的this.state
      const list = [...prevState.list, prevState.inputValue];
      return {
        list,
        inputValue: '' // 添加完毕以后清空input框
      }
    })
  }
  deletListItem = (index) => { // 因为在绑定该方法的时候使用了bind函数，所以这里可以不实用箭头函数去保证this的指向
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    },() => {
      console.log('item',this.item) // setState函数的回调
    })
  }
  getItem = () => {
    return (
      this.state.list.map((item, index) => {
        return(
          <div 
          key = {index}
          value = {item} 
          index = {index}
          deletItem = {this.deletListItem}
          ref = {(item) => {this.item = item} }
          ></div>
        )
      })
    )
  }
  render(){
    return (
      <Fragment>
      <div>
        <input
        onChange = { this.handleInputChange }
        value = {this.state.inputValue} 
        ref = {(input) => {this.input = input}}
        />
        <button onClick = { this.addList }>提交</button>
      </div>
      <ul>
        {this.getItem()}
      </ul>
      </Fragment>
    );
  }
}
export default Hi;