import React, { Component } from "react";
// import SideBarItem from "./SideBarItem";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_parent: null,
      data_children: this.props.data,
    };
    this.getChildren = this.getChildren.bind(this);
    this.searchIdFather = this.searchIdFather.bind(this);
  }
  getChildren(id) {
    const { data_children } = this.state;
    const father = this.searchIdFather(id, data_children);
    console.log(father.children);
    this.setState({
      data_children: father.children
    })
  }

  searchIdFather (id, array){
    const { data_children } = this.state;
    for (var i = 0; i < data_children.length; i++) {
      if (data_children[i].id === id) {
        return array[i];
      }
    }
}
  
  render() {
    const { data } = this.props;
    const {data_children} = this.state;
    console.log(data_children);
    
    return (
      <div>
        {data_children.map((item, key) => {
          return (
            <div key={key}>
              <a onClick={() => this.getChildren(item.id)} > {item.name} </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SideBar;
