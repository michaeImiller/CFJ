import React, { Component} from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { browserHistory } from "react-router";
import ItemBook from "./ItemBook";
import _ from "lodash";

class ListBooks extends Component {
	constructor (props){
		super(props);
		this.state = {
			data: this.props.data,
		}
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate(itemUpdate){
		const {data} = this.state;
		var index = _.findIndex(data, { id: itemUpdate.id });
		data.splice(index, 1, {
			id: itemUpdate.id,
			name: itemUpdate.name,
			author: itemUpdate.author,
			publisher: itemUpdate.publisher,
			amount: itemUpdate.amount
		});
		this.setState({
			data: data,
		});
		localStorage.setItem("data", JSON.stringify(data));
	}
	render() {
		return (
			<div className="list-books">
                <table>
                    <thead>
                        <tr spclass="spacer">
                            <th> STT </th>
                            <th> Tên sách </th>
                            <th> Tác giả </th>
                            <th> NXB </th>
							<th> Số lượng </th>
							<th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
						{this.state.data.map((item, key) => {
							return (
								<ItemBook item = {item} index = {key} key = {key} onUpdateBook = {this.handleUpdate} />
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
