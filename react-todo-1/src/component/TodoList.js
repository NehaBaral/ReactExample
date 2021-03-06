import React from 'react'

const TodoList = ({todos, deleteTodo}) => {
    return(
        <div className="collection">
        {todos.length > 0 ? (todos.map(todo => <p key=
        {todo.id} onClick={(e)=>deleteTodo(todo.id)} 
        className="collection-item">
        {todo.content}</p>)):(
            <p>All of your task is completed</p>
        )}
        </div>
    )
}

export default TodoList;