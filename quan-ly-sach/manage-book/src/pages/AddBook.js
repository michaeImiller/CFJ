import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';


class AddBook extends Component {
	constructor (props){
		super(props);
		this.state = {
            redirectToHome: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        this.props.onAddBook(this.state);
        this.setState({
            redirectToHome: true
        })
        event.preventDefault();
    }

	render() {
        const redirectToHome = this.state.redirectToHome;
        if (redirectToHome === true) {
            return <Redirect to="/" />;
        }
		return (
            <div className="add-new-book container">
                <h2> Tạo mới sách </h2>
                <Link to="/">
                    <a className = "back-home">
                        Trang chủ
                    </a>
                </Link>
                <form className = "pop-up-update" >
                    <label> Tên sách </label>
                    <input name="name"  onChange = {this.handleChange} />

                    <label> Tác giả </label>
                    <input name="author"  onChange = {this.handleChange} />

                    <label> NXB </label>
                    <input name="publisher" onChange = {this.handleChange} />

                    <label> Số lượng  </label>
                    <input name="amount" type="number" onChange = {this.handleChange} />
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
        state
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
