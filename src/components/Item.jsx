import React from 'react';
import cn from 'classnames';
import './style.css';

const Item = (props) => {
  const classItem = cn({
    item: true,
    active: !props.item.isCompleted,
    completed: props.item.isCompleted
  })
  return (
    <li>
      <div>
        <input type="checkbox" id={props.item.id} checked={props.item.isCompleted} onChange={props.complete(props.item)} />
        <label htmlFor={props.item.id} className={classItem}>{props.item.task}</label>
      </div>
    </li>

  );
}
export default Item;