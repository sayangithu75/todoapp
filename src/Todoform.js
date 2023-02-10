import React from "react";
import shortid from "shortid";
import "./Todoform.css";
export default class Todoform extends React.Component {
    state={
        text:""
    };
    handleChange= (event) =>{
        this.setState ({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit({
         id:shortid.generate(),
            text:this.state.text,
            complete:false
        });
        this.setState({
            text:""
        });
    };
    render(){
    //     return <button onClick={this.handleSubmit}>
    //     add todo
    // </button>
        return (
            <form onSubmit={this.handleSubmit}>
        <input name="text" 
        value={this.state.text}
         onChange={this.handleChange}
         placeholder="todo..."/>
          <button onClick={this.handleSubmit}>
              add todo
          </button>
         </form>
         );
        // return(
        
        // <input value={this.state.text}
        // onChange={this.handleChange}
        // placeholder="todo..."
        // />
        // {/*  */}
        // {this.state.todos.map(todo=>(
        //     <div key={todo.id}>{todo.text}</div>
        // ))}
        
        // );
    }
}