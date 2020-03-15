import React, {Component} from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: null,
        name: '',
        type: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

//   handleSubmit(){
//       this.props.onAdd();
//   } 

  render() {
      const {id, name, type } = this.state;
    return (
      <div>
        <form className="">
          <label> Id </label>
          <input name="id" value={id} onChange={this.handleChange} />

          <label> Tên </label>
          <input name="name" value={name} onChange={this.handleChange} />

          <label> Loại </label>
          <input name="type" value={type} onChange={this.handleChange} />

          <button onClick={this.handleSubmit}>Xác nhận</button>
        </form>
      </div>
    );
  }
}

export default Form;
