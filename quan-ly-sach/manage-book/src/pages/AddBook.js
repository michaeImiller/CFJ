import React, { Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions/index';

class AddBook extends Component {
	constructor (props){
		super(props);
		this.state = {
            namebook: '',
            author: '',
            publisher: '',
            amount: '',
            data:  []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        const {namebook, author, publisher, amount, data} = this.state;
        const item_book = {
            id: uuidv4(),
            namebook : namebook,
            author: author,
            publisher: publisher,
            amount: amount
        }
        console.log(item_book);
        this.props.onAddBook(item_book);
        // this.handleAdd(item_book);
        event.preventDefault();
    }

    handleAdd (item){
        const {data} = this.props;
        this.setState({
            data: data.concat(item)
        });
        console.log(this.state.data);
        
    }
	render() {
        
		return (
            <div className="add-new-book">
                <h2> Tạo mới sách </h2>
                <form>
                    <label> Tên sách </label>
                    <input name="namebook" value={this.state.name} onChange = {this.handleChange} />

                    <label> Tác giả </label>
                    <input name="author" value={this.state.author} onChange = {this.handleChange} />

                    <label> NXB </label>
                    <input name="publisher" value={this.state.publisher} onChange = {this.handleChange} />

                    <label> Số lượng  </label>
                    <input name="amount" value={this.state.amount} onChange = {this.handleChange} />
                    <button onClick = {this.handleSubmit}>
                        Submit
                    </button>
                    <Link to="/">
                        Trang chủ
                    </Link>
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
