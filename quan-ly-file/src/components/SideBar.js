import React, { Component } from "react";
import files from "../data/data-2";
import Form from './Form';
import ShowDetail from './ShowDetail';
import _ from 'lodash';

// let data = files;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
      isShowDetail: false,
      id_parent: 0,
      item_add: {},
      data: files,
      itemSelected: {},
      dataCurrent: [],
      id_max: 0,
      idSeft: null,

    };
    this.getChildren = this.getChildren.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const {data} = this.state;
    let idMax = data[0].id;
    for(var i =0; i < data.length; i++ ){
      if(data[i].id > idMax ) idMax = data[i].id;
    }
    this.setState({id_max : idMax });
  }

  getChildren(id_parent) {
    const {data} = this.state;
    const dataCurrent = data.filter(item => item.id_parent === id_parent);
    if (dataCurrent.length) {
      this.setState({ dataCurrent, id_parent: dataCurrent[0].id_parent });
    }
  }

  handleBack() {
    const {data} = this.state;
    const { id_parent } = this.state;
    const dataNew = data.find(item => item.id === id_parent);
    if(dataNew){
      this.getChildren(dataNew.id_parent);
    }
  }

  handleSubmit(item){
    const {data, dataCurrent, itemSelected, id_max} = this.state;
    if(_.isEmpty(itemSelected)){
      const itemAdd = item;
      // neu itemSelected rong thi them moi
      data.push(itemAdd);
    }
    else{
      //neu itemSelected ko rong thi update
      var index = _.findIndex(data, { id: itemSelected.id });
      dataCurrent.splice(index, 1, item);
      data.splice(index, 1, item);
    }
    this.setState({
      dataCurrent : dataCurrent,
      data: data,
      isShowForm : false,
      itemSelected: {},
      id_max : this.state.id_max + 1
  })
  }
  
  toggleForm(id){
    this.setState({ isShowForm : !this.state.isShowForm, idSeft: id});
    // console.log(id);
  }

  closeForm(){
    this.setState({ isShowForm : false, itemSelected: {}});
  }

  handleShowDetail(item) {
    this.setState({itemSelected: item, isShowDetail: true})
  }

  closeDetail (){
    this.setState({isShowDetail: false, itemSelected: {}})
  }

  handleEdit(item){
    this.setState({itemSelected: item, isShowForm: true});
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
    const { isShowForm, dataCurrent, id_parent, itemSelected,isShowDetail, id_max, idSeft } = this.state;
    return (
      <div className="App">
        {/* Form Add/Edit  */}
        {isShowForm ? <Form idSeft = {idSeft} id_max = {id_max} id_parent = {id_parent} onClickCancel = {this.closeForm} onAdd = {this.handleSubmit} itemEdit = {this.state.itemSelected} /> : null}

        {/* Hiển thị thông tin */}
        {isShowDetail ? <ShowDetail onCloseDetail = {this.closeDetail} itemSelected = {itemSelected} /> : null}
      
        {/* Quay lại */}
        <div className = "btn-back">
        { (id_parent >0) ? (<a href="/#" onClick={(id) => this.handleBack(id)}> Quay lại </a>) : null }
        </div>

        {/* Hiển thị danh sách */}
        {dataCurrent.map((item, key) => {
          return (
            <div key={key} className = "item-folder" >
              <i class="fa fa-folder-open-o" aria-hidden="true"></i>
              <a className="name-folder" href="/#" onClick={() => this.getChildren(item.id)}>
                {item.name}
              </a>
             <div className="group-actions">
                <button className="success" onClick={() => this.toggleForm(item.id)}> 
                  Tạo thư mục con 
                </button>
                <button className="info" onClick = {() =>this.handleShowDetail(item)}>
                  Chi tiết
                </button>
                <button className="success" onClick = {() => this.handleEdit(item)}>
                  Edit
                </button>
                <button className="danger" onClick = {() => this.handleDelete(item)}>
                  Delete
                </button>
             </div>
            </div>
          );
        }
        )}
      </div>
    );
  }
}

export default SideBar;