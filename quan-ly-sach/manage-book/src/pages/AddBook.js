import React, { Component} from "react";
import { v4 as uuidv4 } from 'uuid';

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
    componentWillMount(){
        let data = JSON.parse(localStorage.getItem("data"));
        this.setState({
            data: data
        })
        console.log(this.state.data);
        
	}
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        const {namebook, author, publisher, amount} = this.state;
        const item_book = {
            id: uuidv4(),
            namebook : namebook,
            author: author,
            publisher: publisher,
            amount: amount
        }
        console.log(item_book);
        this.setState({
            data: [...item_book]
        });

        console.log(this.state.data);
        // localStorage.setItem.("data", item_book);
        event.preventDefault();
    }
	render() {
        console.log(this.state.namebook);
        
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
                </form>
            </div>
		);
	}
}


export default AddBook;
