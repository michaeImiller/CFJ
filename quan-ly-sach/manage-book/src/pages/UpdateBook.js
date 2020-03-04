import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';

class UpdateBook extends Component {
	constructor (props){
		super(props);
		this.state = {
            itemUpdate: {},
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    // handleUpdate(event){
    //     this.props.onUpdateBook(this.state.book.id);
    //     event.preventDefault();
    // }

    componentDidMount(){
        //truyền vào id lấy từ url
        this.props.onFindBook(this.props.match.params.id);
        this.setState({
            itemUpdate: this.props.itembook.find.result
        })
    }

	render() {
        let {itemUpdate} = this.state;
        // console.log(this.props.itembook.find.result);
        
        return (
            <div className="add-new-book">
                <h2> Cập nhật sách </h2>
                <Link to="/">
                    Trang chủ
                </Link>
                <form>
                    
                    <label> Tên sách </label>
                    <input name="name" value = {itemUpdate.name}   onChange = {this.handleChange} />

                    <label> Tác giả </label>
                    <input name="author" value = {itemUpdate.author}  onChange = {this.handleChange} />

                    <label> NXB </label>
                    <input name="publisher" value = {itemUpdate.publisher} onChange = {this.handleChange} />

                    <label> Số lượng  </label>
                    <input name="amount" value = {itemUpdate.amount} onChange = {this.handleChange} />
                    <button >
                        Xác nhận
                    </button>
                </form>
            </div>
		);
	}
}

const mapStateToProps = state => {
    return {
        itembook: state
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFindBook : (id) => {
            dispatch(actions.findBook(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBook);
