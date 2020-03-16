import React, { Component } from "react";
import files from "../data/data-2";
import Breadcrumb from "./Breadcrumb";
import Form from './Form';
// import SideBarItem from "./SideBarItem";

let data = files;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
      id_parent: 0,
      item_add: {      },
      dataCurrent: [],

    };
    this.getChildren = this.getChildren.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    const { id_parent } = this.state;
    this.getChildren(id_parent);
  }

  getChildren(id_parent) {
    const dataCurrent = data.filter(item => item.id_parent === id_parent);
    if (dataCurrent.length > 0) {
      this.setState({ dataCurrent, id_parent: dataCurrent[0].id_parent });
    }
  }

  handleBack() {
    const { id_parent } = this.state;
    const dataNew = data.find(item => item.id === id_parent);
    if(dataNew){
      this.getChildren(dataNew.id_parent);
    }
  }

  handleAdd(id, name, type, event){
    const itemAdd = {
      id: id,
      id_parent: 1,
      name: name,
      type: type
    }
    this.setState({item_add :itemAdd })
    console.log(this.state.item_add);
    event.preventDefault();
  }

  toggleForm(){
    this.setState({ isShowForm : !this.state.isShowForm});
  }

  render() {
    const { isShowForm, dataCurrent, id_parent } = this.state;

    const item_add = {
      id: null,
      id_parent: this.state.id_parent,
      name: '',
      type: '',
      children: [],
    }

    return (
      <div className="App">
        <div className="actions">
          <button onClick={this.toggleForm}> Thêm mới </button>
        </div>

        {isShowForm ? <Form onAdd = {(event) => this.handleAdd(event)} /> : null}
        {
          (id_parent >0) ? (<a href="/#" onClick={(id) => this.handleBack(id)}> Quay lại </a>) : null
        }
        {dataCurrent.map((item, key) => {
          return (
            <div key={key}>
              <a href="/#" onClick={() => this.getChildren(item.id)}>
                {item.name}
              </a>
            </div>
          );
        }
        )}
      </div>
    );
  }
}

export default SideBar;
