import React, { Component } from "react";
import files from "../data/data-2";
import Form from './Form';
import SelectParent from './SelectParent';
import ShowDetail from './ShowDetail';
import _ from 'lodash';

let data = files;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
      isShowDetail: false,
      id_parent: 0,
      item_add: {},
      itemSelected: {},
      dataCurrent: [],
      id_max: 0,

    };
    this.getChildren = this.getChildren.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
  }

  componentDidMount() {
    const { id_parent } = this.state;
    this.getChildren(id_parent);
    this.findIdMax();
  }

  findIdMax(){
    let idMax = data[0].id;
    for(var i =0; i < data.length; i++ ){
      if(data[i].id > idMax ) idMax = data[i].id;
    }
    this.setState({id_max : idMax });
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

  handleAdd(item){
    const {dataCurrent} = this.state;
    const itemAdd = item;
    dataCurrent.push(itemAdd);
    this.setState({
      dataCurrent : dataCurrent,
      isShowForm : false
  })
  }
  
  toggleForm(){
    this.setState({ isShowForm : !this.state.isShowForm});
  }

  closeForm(){
    this.setState({ isShowForm : false});
  }

  handleShowDetail(item) {
    this.setState({itemSelected: item, isShowDetail: true})
  }

  closeDetail (){
    this.setState({isShowDetail: false})
  }

  handleEdit(item){
    this.setState({item_edit: item, isShowForm: true});
  }

  handleDelete(item){
    const {dataCurrent} = this.state;
      _.remove(dataCurrent, (child) => {
          return  child === item;
      });
      this.setState({
        dataCurrent
      });
  }

  render() {
    const { isShowForm, dataCurrent, id_parent, itemSelected,isShowDetail } = this.state;
    // console.log(dataCurrent);
    
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

        {/* <SelectParent /> */}

        {isShowForm ? <Form onClickCancel = {this.closeForm} onAdd = {this.handleAdd} itemEdit = {this.state.item_edit} /> : null}

        {isShowDetail ? <ShowDetail onCloseDetail = {this.closeDetail} itemSelected = {itemSelected} /> : null}
        {
          (id_parent >0) ? (<a href="/#" onClick={(id) => this.handleBack(id)}> Quay lại </a>) : null
        }
        {dataCurrent.map((item, key) => {
          return (
            <div key={key}>
              <a href="/#" onClick={() => this.getChildren(item.id)}>
                {item.name}
              </a>
              <button onClick = {() =>this.handleShowDetail(item)}>
                Chi tiết
              </button>
              <button onClick = {() => this.handleEdit(item)}>
                Edit
              </button>
              <button onClick = {() => this.handleDelete(item)}>
                Delete
              </button>
            </div>
          );
        }
        )}
      </div>
    );
  }
}

export default SideBar;
