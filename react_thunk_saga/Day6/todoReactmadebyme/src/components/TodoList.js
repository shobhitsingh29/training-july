import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Tododel from './Tododel'
import TodoChk from './TodoCheck'


const TodoList = ({todos, onTodoClick,onTodoClickChk, onTodoClickDel}) => (

    <ul>
        {todos.map(todo => (
            <div>
                <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
                <TodoChk key={todo.text} {...todo} onClick={() => onTodoClickChk(todo.id)}/>
            </div>
        ))}
        <Tododel  onClick={() =>  onTodoClickDel(todos)}/>
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList