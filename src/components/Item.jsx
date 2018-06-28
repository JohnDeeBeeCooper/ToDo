import React from 'react'
import cn from 'classnames'
import './style.css'

export default class extends React.Component {
  render() {
    const todo = this.props;
    const classItem = cn({
      item: true,
      active: !todo.item.isCompleted,
      completed: todo.item.isCompleted
    })
    return (
      <li>
        <div>
          <input type="checkbox" className="toggle" checked={todo.item.isCompleted} onChange={todo.complete(todo.item)} /><label className={classItem}>{todo.item.task}</label>
        </div>
      </li>

    );
  }
}