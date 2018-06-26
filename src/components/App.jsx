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
      id: 0,
      display: 'all'
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
    });
  }
  handleAdd = (e) => {
    e.preventDefault();
    if (this.state.value) {
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
  }
  selActive = () => {
    this.setState({ display: 'active' });
    console.log(this.state.display);
  }
  selCompleted = () => {
    this.setState({ display: 'completed' });
    console.log(this.state.display);
  }
  selAll = () => {
    this.setState({ display: 'all' });
    console.log(this.state.display);
  }
  deleteCompleted = () => {
    this.setState({
      tasks:this.state.tasks.filter(item => !item.isCompleted)
    })
  }
  render() {
    let items;
    switch (this.state.display) {
      case 'all': items = this.state.tasks;
        break;
      case 'active': items = this.state.tasks.filter(item => !item.isCompleted);
        break;
      case 'completed': items = this.state.tasks.filter(item => item.isCompleted);
        break;
    }
    const count = this.state.tasks.filter(item => !item.isCompleted).length;
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
          {items.map(item => <Item key={item.id} complete={this.handleRemove} item={item} />)}
        </ul>
        <Footer delete = {this.deleteCompleted} count={count} all={this.selAll} completed={this.selCompleted} active={this.selActive} />
      </div>

    )
  }
}
export default App;