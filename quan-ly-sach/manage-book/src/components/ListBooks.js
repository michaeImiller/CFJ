import React, { Component} from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemBook from "./ItemBook";
// import * as actions from '../actions';

class ListBooks extends Component {
	constructor (props){
		super(props);
		this.state = {
			
		}
    }
	render() {
		return (
			<div className="list-books">
                <table>
                    <thead>
                        <tr>
                            <th> STT </th>
                            <th> Tên sách </th>
                            <th> Tác giả </th>
                            <th> NXB </th>
							<th> Số lượng </th>
							<th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
						{this.props.data.map((item, key) => {
							return (
								<ItemBook item = {item} index = {key} key = {key} />
							);
						})}
                    </tbody>
                </table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return{
        data: state.data
    }
};


export default connect(mapStateToProps, null) (ListBooks);
