import React from 'react';
import PropTypes from 'prop-types'

const ToDoItem = ({ todo, index, onChange }) => {
    console.log(todo)
    const styles = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem ',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem'
        },
        input: {
            marginRight: '2rem'
        }
    } 
    return (
        <div >
            <li style={styles.li}>
                <span>
                    <input 
                    type='checkbox' 
                    style={styles.input} 
                    onChange={() => onChange(todo.id)}/>
                    <strong>{index + 1}</strong>
                    &nbsp;
                    {todo.title}
                </span>

                <button>&times;</button>
            </li>
        </div>
    )
}

ToDoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem