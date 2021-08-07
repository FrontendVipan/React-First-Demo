import React, { Component } from "react";
import LifeCycle from '../Components/Count'

class ToDo extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      userInput: "",
      list: [],
    };
  }

  // Set a user input value
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  // Add item if user input in not empty
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        value: this.state.userInput,
      };

      // Update list
       const list = [...this.state.list];
       list.push(userInput);

      // reset state
      this.setState({
      list,
      userInput: "",
     });
    }
  }

  // Function to delete item from list use id to delete
  deleteItem(key){
    const list = [...this.state.list];
  
    // Filter values and leave value which we need to delete
    const updateList = list.filter(item => item.id !== key);
  
    // Update list in state
    this.setState({
      list:updateList,
    });
  }

  render() {
      console.log(this.state.userInput)
    return (
      <>
        <div className="container mt-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={this.state.userInput}
              onChange={(item) => this.updateInput(item.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => this.addItem()}
              >
                Button
              </button>
            </div>
          </div>
          <br /> <br />
          <h3>To DO List</h3>
          <ul className="list-group">
            {this.state.list.map((item) => {
              return (
                <li
                  class="list-group-item d-flex justify-content-between"
                  variant="dark"
                  action
                  
                >
                  <p>{item.value}</p>
                  <span className="btn btn-danger " 
                  onClick={() => this.deleteItem(item.id)}>Delete</span>
                </li>
              );
            })}
          </ul>
          <br /><br />

          <LifeCycle></LifeCycle>
        </div>
      </>
    );
  }
}

export default ToDo;
