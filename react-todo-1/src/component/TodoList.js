import React from 'react'

const TodoList = (props) => {
    return(
        <div className="collection">
        {props.todos.map(todo => <p key=
        {todo.id}
        className="collection-item">
        {todo.content}</p>)}
        </div>
    )
}

export default TodoList;