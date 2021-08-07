import React, { Component } from "react";

class Contact extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      username: '',
      roll_no: 9,
      errormessage: ''
    };
  }

	myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "roll_no") {
    if (val !="" && !Number(val)) {
    err = <strong>Your roll_no must be a number</strong>;
    }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
    }

  render() {
    return (
      < div className="container">
        <form>
           {/* displays the Header with the entered name */}
          <h1>Hello {this.state.username} </h1>
          <p>Register your name:</p>
          <input
            type="text" //form type
            name="username"
            onChange={this.myChangeHandler}
          />
          {/* Accepts the roll_no as an input and displays it */}
          <p>Enter your roll_no:</p>
          <input
            type="text" //form type
            name="roll_no"
            onChange={this.myChangeHandler}
          />
          {/* Displays error message if input is not a number */}
          {this.state.errormessage}
        </form>
      </div>
    );
  }
}

export default Contact;
