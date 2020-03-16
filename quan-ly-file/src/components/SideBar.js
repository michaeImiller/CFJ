import React, { Component } from "react";
import files from "../data/data-2";
import Breadcrumb from "./Breadcrumb";
import Form from './Form';
// import SideBarItem from "./SideBarItem";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
      id_parent: 0,
      path: '',
      item_add: {},
      data: files,
      dataShow: [],
    };
    this.getChildren = this.getChildren.bind(this);
  }
  
  getChildren(id_parent, path){
    const {data, dataShow} = this.state;
    this.setState({
      id_parent: id_parent,
      path: path
    });
    data.map((item, key) => {
      if(item.id_parent === id_parent ){
        this.setState({
          dataShow: item
        })
      }
    });
    
  }

  // handleAdd(item){
  //   this.setState({ isShowForm : !this.state.isShowForm});
  // }

  handleBack() {
    const {data, path} = this.state;
    for (var i = 0; i < data.length; i++) {
      if (data[i].path === path) {
        // this.setState({dataShow: (data[i])})
        console.log(data[i]);
        
      }
    }
    console.log(this.state.dataShow);
    
  }
  
  render() {
    const { isShowForm, data, id_parent, dataShow } = this.state;
    // const item_add = {
    //   id: null,
    //   id_parent: this.state.id_parent,
    //   name: '',
    //   type: '',
    //   children: [],
    // }
    return (
      <div className="App">
        <div className="actions">
          <button onClick= {this.handleBack}> Thêm mới </button>
        </div>

        {isShowForm ? <Form /> : null}

        <a href="/#" onClick = {(id) => this.handleBack(id)}> Quay lại </a>
        
        {dataShow.map((item, key) => {
          if(item.id_parent === id_parent ){
            return (
            <div key={key}>
              <a href="/#" onClick={() => this.getChildren(item.id, item.path)}>
                {item.name}
              </a>
            </div>
          );
          }
        })}
      </div>
    );
  }
}

export default SideBar;
