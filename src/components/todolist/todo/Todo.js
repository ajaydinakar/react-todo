
import './Todo.css'


import React, { Component } from 'react'

export class Todo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
 /* 
static getDerivedStateFromProps(props, state) {
  console.log(" get derived from prpo child todo ",props)
  return state;
}

componentDidMount = () => {
  console.log("todo coomponent did mount childtodo")
}

componentWillMount = () => {
  console.log("component will mount in child todo ")
}

componentDidUpdate = (prevProps, prevState) => {
  console.log("component did update  child todo")
}
componentWillUnmount = () => {
  console.log("component will unmount --------------------- child todo")
}
componentWillUpdate = (nextProps, nextState) => {
  console.log("component will updatd  child todo")
}
shouldComponentUpdate(nextProps,nextState)
{
  console.log("todolist  should component update  child todo")
  return false
}*/
  render() {
    return (
      <div>
        <div className="container">
      <ul className="list-group">
  { this.props.items.map((item,index)=> <li className="list-group-item d-flex justify-content-between align-items-center" style={this.props.style} key={index} >
  {item}
  <button onClick= {()=>this.props.delete(index)}>Delete </button>
  
    </li>) }
    </ul>
    </div>
      </div>
    )
  }
}

export default Todo
