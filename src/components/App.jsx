import React from 'react';
import Item from './Item';
import Footer from './Footer';
import update from 'immutability-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tasks: [],
      id: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handleRemove = (value) => (e) => {
    const index = this.state.tasks.indexOf(value);
    const item = this.state.tasks[index];
    const newItem = { ...item, isCompleted: !item.isCompleted };
    const newCollection = update(this.state.tasks, { [index]: { $set: newItem } })
    this.setState({
      tasks: newCollection
    })
    console.log(item);
    console.log(newItem);
  }
  handleAdd = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks,
      {
        id: this.state.id,
        task: this.state.value,
        isCompleted: false
      }
      ],
      value: '',
      id: this.state.id + 1
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleAdd} className="todo-form">
            <div className="form-group">
              <input value={this.state.value} onChange={this.handleChange} type="text" required="" className="form-control" placeholder="What needs to be done" />
            </div>
            <button onClick={this.handleAdd} type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        <ul>
          {this.state.tasks.map(item => <Item key={item.id} complete={this.handleRemove} item={item} />)}
        </ul>
      </div>

    )
  }
}
export default App;