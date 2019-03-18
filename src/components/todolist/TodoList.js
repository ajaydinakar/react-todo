import React, { Component } from 'react'
import Radium from 'radium';
import './TodoList.css'
import Form from '../Form/Form';
import Todo from './todo/Todo';
export class TodoList extends Component {
constructor(props) {
  super(props)
  this.state = {
     items:["ajay","maia"],
     item:'',
     isShown:false
  }
  this.deleteHandler.bind(this);
  this.clearItems.bind(this);
}
onchangeHandler=(e)=>{
this.setState({ 
item:e.target.value})
}
onSubmitHandler=(e)=>{
  e.preventDefault();
this.setState({
  items:[...this.state.items, this.state.item],
  item:'',
  
})
}
deleteHandler=(index)=>{  const items=this.state.items;
items.splice(index,1)
this.setState({items:items})
}
//for clearing items
clearItems=()=>{this.setState({items:[],
item:''})}
//for showing and hiding the list 
onToggleHandler=()=>{this.setState({isShown:!this.state.isShown})}

static getDerivedStateFromProps(props, state) {
  console.log("todo list get derived from prpo ",props)
  return state;
}

componentDidMount = () => {
  console.log("todo coomponent did mount todolist")
}

componentWillMount = () => {
  console.log("component will mount in todolisat")
}

componentDidUpdate = (prevProps, prevState) => {
  console.log("component did update")
}
componentWillUnmount = () => {
  console.log("component will unmount")
}
componentWillUpdate = (nextProps, nextState) => {
  console.log("component will updatd")
}
shouldComponentUpdate(nextProps,nextState)
{
  console.log("todolist  should component update")
  return true
}




  render() {
  console.log("this is rendrt")
const style={};
 /*
backgroundColor:'yellow',
font:'inherit',
border:'1px solid pink',
padding:'10px',
cursor:'pointer',
':hover':{  
  backgroundColor:'',
  color:'black'
}
};*/
let classes=['red','bold'].join(' ');
let todo=null;
if(this.state.isShown)
{todo=( 
<div className="background"> 
   <Todo  items={this.state.items}   clear={this.clearItems}  delete={(index)=>this.deleteHandler(index)} style={style} />
    </div>
    )};
    return (
      <div className="container">
        <Form onsubmit={this.onSubmitHandler} value={this.state.item}  onchange={this.onchangeHandler}></Form>
        <button onClick={this.onToggleHandler.bind(this)}>{this.state.isShown===false?"Show Todos":"Hide"}</button>
        {todo}
        <button onClick= {this.clearItems}>Clear All Todos </button>
      </div>
    )
  }
}
export default Radium(TodoList)
 