import React, { Component } from "react";
import files from "../data/data";
import Breadcrumb from "./Breadcrumb";
import Form from './Form';
// import SideBarItem from "./SideBarItem";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
      id_parent: null,
      data_children: files,
      item_breadcrumb: "",
      item_add: {}
    };
    this.getChildren = this.getChildren.bind(this);
    this.searchIdFather = this.searchIdFather.bind(this);
  }
  getChildren(id, name) {
    const { data_children } = this.state;
    const father = this.searchIdFather(id, data_children);
    // console.log(name);
    this.setState({
      data_children: father.children,
      id_parent: id,
      item_breadcrumb: this.state.item_breadcrumb.concat('/', name)
    });
    console.log(id);
  }

  searchIdFather (id, array){
    const { data_children } = this.state;
    for (var i = 0; i < data_children.length; i++) {
      if (data_children[i].id === id) {
        return array[i];
      }
    }
  }

  handleAdd(item){
    this.setState({ isShowForm : !this.state.isShowForm});
  }
  
  render() {
    const { data_children, item_breadcrumb, isShowForm } = this.state;
    // console.log(item_breadcrumb);
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
          <button onClick={() => this.handleAdd()}> Thêm mới </button>
        </div>
        {isShowForm ? <Form /> : null}
        {/* <Breadcrumb item_breadcrumb={item_breadcrumb} /> */}
        {data_children.map((item, key) => {
          return (
            <div key={key}>
              <a href="/#" onClick={() => this.getChildren(item.id, item.name)}>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SideBar;
