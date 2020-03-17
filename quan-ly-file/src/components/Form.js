import React, {Component} from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: null,
        id_parent: 0,
        name: '',
        type: '',
        created_at: '',
        updated_at: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
      const {id, name, type, id_parent } = this.state;
      let itemAdd = {
        id: id,
        id_parent: id_parent,
        name: name,
        type: type,
        created_at: new Date(),
        updated_at: new Date(),
      }
      this.props.onAdd(itemAdd);
      event.preventDefault();
  }
  
  handleCancel(){
    this.props.onClickCancel();
  }

  render() {
    const {id, name, type, id_parent } = this.state;
    // const {itemEdit} = this.props;
    // console.log(itemEdit);
    
    return (
      <div>
        <form className="" onSubmit = {this.handleSubmit}>
          <label> Id </label>
          <input name="id" value={id} onChange={this.handleChange} />

          <label> Id Parent </label>
          <input name="id_parent" value={id_parent} onChange={this.handleChange} />

          <label> Tên </label>
          <input name="name" value={name} onChange={this.handleChange} />

          <label> Loại </label>
          <input name="type" value={type} onChange={this.handleChange} />

          <button type="submit" > Xác nhận </button>
          <button onClick = {this.handleCancel}> Cancel </button>
        </form>
      </div>
    );
  }
}

export default Form;
