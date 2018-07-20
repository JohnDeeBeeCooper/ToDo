import React from 'react'
import cn from 'classnames';

const Footer = (props) => {
    const btnAllClass = cn({
        btn: true,
        active: props.display === "All"
    });
    const btnActiveClass = cn({
        btn: true,
        active: props.display === "Active"
    });
    const btnCompletedClass = cn({
        btn: true,
        active: props.display === "Completed"
    });
    return (
        <div className="todo-footer">
            <span className="todo-count">{props.count}  items left</span>
            <ul className="footer-list">
                <li><button className={btnAllClass} onClick={props.all}>All</button></li>
                <li><button className={btnActiveClass} onClick={props.active}>Active</button></li>
                <li><button className={btnCompletedClass} onClick={props.completed}>Completed</button></li>
                <li><button onClick={props.delete} className="btn clear-completed">Clear completed</button></li>
            </ul>

        </div>
    );
}
export default Footer;