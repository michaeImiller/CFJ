import React, { Component} from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import * as actions from '../actions';

class UpdateBook extends Component {
	constructor (props){
		super(props);
		this.state = {
			itemUpdate: {
                name: '',
                author: '',
                publisher: '',
                amount: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCancelForm = this.handleCancelForm.bind(this);
    }

    handleChange(event) {
        const { itemUpdate } = this.state;
        itemUpdate[event.target.name] = event.target.value;
        this.setState({ itemUpdate });
  }

    componentDidMount(){
        this.setState({
            itemUpdate: this.props.itemUpdate
        })
    }
    
    handleCancelForm(){
        this.props.onCancel();
    }

    handleUpdate(itemUpdate){
        // console.log(itemUpdate);
        this.props.onUpdateBook(itemUpdate);
    }
	render() {	
        const {itemUpdate} = this.state;
        
        return (
            <div className="form-update">
                <form className = "pop-up-update" >
                <h3> Sửa thông tin sách </h3>       
                    <label> Tên sách </label>
                    <input name="name" value = {itemUpdate.name}   onChange = {this.handleChange} />

                    <label> Tác giả </label>
                    <input name="author" value = {itemUpdate.author}  onChange = {this.handleChange} />

                    <label> NXB </label>
                    <input name="publisher" value = {itemUpdate.publisher} onChange = {this.handleChange} />

                    <label> Số lượng  </label>
                    <input name="amount" value = {itemUpdate.amount} onChange = {this.handleChange} />
                    <button className="submit" onClick = {() => this.handleUpdate(itemUpdate)} >
                        Xác nhận
                    </button>
                    <button className="cancel" onClick = {this.handleCancelForm}>
                        Cancel
                    </button>
                </form>
            </div>
            
        )
	}
}

const mapStateToProps = (state) => {
    return{
        data: state.data
    }
};


export default connect(mapStateToProps, null) (UpdateBook);
