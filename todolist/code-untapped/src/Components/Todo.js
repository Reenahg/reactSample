import react from "react"

const Todo = (props) =>
{
    <div>
        <div> {props.todo.text}</div>
        <button onClick = {props.onDelete}>X</button>
        </div>
}