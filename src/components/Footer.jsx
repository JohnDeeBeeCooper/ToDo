import React from 'react'

export default class extends React.Component {
    render() {
        return (
            <div className="todo-footer">
                <span className="todo-count">{this.props.count}  items left</span>
                <ul className="footer-list">
                    <li><button className="btn" onClick={this.props.all}>All</button></li>
                    <li><button className="btn" onClick={this.props.active}>Active</button></li>
                    <li><button className="btn" onClick={this.props.completed}>Completed</button></li>
                </ul>
                <button onClick={this.props.delete} className=" btn clear-completed">Clear completed</button>
            </div>
        );
    }
}