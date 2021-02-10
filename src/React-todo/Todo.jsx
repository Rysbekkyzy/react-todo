import React from 'react';
import './style.css';
import ToDoItem  from './TodoItem';
import PropTypes from 'prop-types'

function ToDoList  (props) {

    const styles  = {
        ul: {
            listStyle: 'none'
        }
    }
    return (
        <div className='Wrapper'>
            <h1>Simple React To Do</h1>

            <ul style={styles.ul}>
                {props.todos.map((todo, index) => {
                    return <ToDoItem 
                    todo={todo} 
                    key={todo.id} 
                    index={index}
                    onChange={props.onToggle}/>
                })}
            </ul>
        </div>
    )

    
}

ToDoList.propTypes =  {
    // массив из объектов . Проверяет ыходящие тип данных. 
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default ToDoList