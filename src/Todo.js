import React from "react";
import "./Todo.css";
export default props =>(
<div id="listss"
    style={{
        textDecoration: props.todo.complete?"line-through":""
    }}
    onClick={props.toggleComplete}>
        {props.todo.text}</div>);