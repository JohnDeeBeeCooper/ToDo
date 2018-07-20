import React from 'react'
import cn from 'classnames';

export default class extends React.Component {
    render() {
        const item = this.props;
        const btnAllClass = cn({
            btn: true,
            active: item.display === "All" && true
        });
        const btnActiveClass = cn({
            btn: true,
            active: item.display === "Active" && true
        });
        const btnCompletedClass = cn({
            btn: true,
            active: item.display === "Completed" && true
        });
        return (
            <div className="todo-footer">
                <span className="todo-count">{item.count}  items left</span>
                <ul className="footer-list">
                    <li><button className={btnAllClass} onClick={item.all}>All</button></li>
                    <li><button className={btnActiveClass} onClick={item.active}>Active</button></li>
                    <li><button className={btnCompletedClass} onClick={item.completed}>Completed</button></li>
                    <li><button onClick={this.props.delete} className="btn clear-completed">Clear completed</button></li>
                </ul>

            </div>
        );
    }
}