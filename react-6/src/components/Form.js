import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../css/style.scss';
import logo2x from "../images/logo2x.png";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.hanleSubmit = this.hanleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }
  hanleSubmit(){
    alert(this.state.value);
  }

  render() {
    return (
      <form>
      <img src = {logo2x} />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick = {this.hanleSubmit} > Submit </button>
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;