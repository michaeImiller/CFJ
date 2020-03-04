import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';

class AddBook extends Component {
	constructor (props){
		super(props);
		this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        this.props.onAddBook(this.state);
        event.preventDefault();
    }

	render() {
		return (
            <div className="add-new-book">
                <h2> Tạo mới sách </h2>
                <Link to="/">
                    Trang chủ
                </Link>
                <form>
                    <label> Tên sách </label>
                    <input name="name"  onChange = {this.handleChange} />

                    <label> Tác giả </label>
                    <input name="author"  onChange = {this.handleChange} />

                    <label> NXB </label>
                    <input name="publisher" onChange = {this.handleChange} />

                    <label> Số lượng  </label>
                    <input name="amount" onChange = {this.handleChange} />
                    <button onClick = {this.handleSubmit}>
                        Xác nhận
                    </button>
                </form>
            </div>
		);
	}
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddBook : (book) => {
            dispatch(actions.addBook(book));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
