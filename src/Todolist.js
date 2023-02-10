import React from "react" 
import Todoform from "./Todoform";
import Todo from "./Todo";
export default class Todolist extends React.Component {
    state={
        todos: []
    }
    addTodo=(todo)=>{
        this.setState({
            todos:[todo, ...this.state.todos]
        });
    };

    toggleComplete =(id)=>{
        this.setState({
            todos:this.state.todos.map(todo => {
                if(todo.id===id){
                    return {
                        ...todo,
                        // id:Todo.id,
                        // text:Todo.text,
                        complete:!todo.complete
                    };
                }
                else{
                    return todo;
                }
            })
        });
    };
    render() {
        return (
            // <Todoform/>
        <div>
            {/* sayan
        hello */}
        <Todoform onSubmit={this.addTodo}/>
        {this.state.todos.map(todo=>(
            // <div key={Todo.id} >{Todo.text}</div>
            <Todo key={todo.id} toggleComplete={()=>this.toggleComplete(todo.id)}  todo={todo} />
        ))}
        </div>
        );
    }
}