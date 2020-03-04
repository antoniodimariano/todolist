import React, { Component } from 'react'
const completedStyle = {
    fontStyle: "italic",
    color: "#c5e2d2",
    textDecoration: "line-through"
   };
   
export class TodoItem extends Component {
    render() {
        const {completed, id, title} = this.props.todo
        return (
            <div>
              <li className="todo-item">
                  <input type="checkbox" checked={completed} onChange={() => this.props.handleChange(id)}/>
                  <span style={completed ? completedStyle : null}>
                  {title}
                    </span>
                  <button className='btn-style' onClick={() => this.props.deleteTodo(id)}>X</button>
              </li>
            </div>
        )
    }
}

export default TodoItem
