import React, { Component} from "react";
import Search from '../components/Search';
import ListBooks from '../components/ListBooks';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Home extends Component {
	constructor (props){
		super(props);
		this.state = {
            data: [],
            item_book: '',
            namebook: '',
            author: '',
            publisher: '',
            amount: ''
        }
    }
    
	render() {
        // const {data} = this.props;
		return (
            <div className="wrapper">
                <div className="container">
                    <h2> Quản lí sách </h2>
                    <Link to="/add-book">
                        <button >
                            Thêm mới
                        </button>
                    </Link>
                    <Search  />
                    <ListBooks />
                </div>
            </div>
		);
	}
}


export default Home;
