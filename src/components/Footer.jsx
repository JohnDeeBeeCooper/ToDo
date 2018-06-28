import React from 'react'
import cn from 'classnames';

export default class extends React.Component {
    render() {
        const item = this.props;
        const btnClass = cn({
            btn:true,
            active:false
        })
        return (
            <div className="todo-footer">
                <span className="todo-count">{item.count}  items left</span>
                <ul className="footer-list">
                    <li><button className={btnClass} onClick={item.all}>All</button></li>
                    <li><button className={btnClass} onClick={item.active}>Active</button></li>
                    <li><button className={btnClass} onClick={item.completed}>Completed</button></li>
                    <li><button onClick={this.props.delete} className="btn clear-completed">Clear completed</button></li>
                </ul>
                
            </div>
        );
    }
}