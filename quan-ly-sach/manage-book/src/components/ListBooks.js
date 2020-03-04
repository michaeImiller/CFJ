import React, { Component} from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import * as actions from '../actions';

class ListBooks extends Component {
	constructor (props){
		super(props);
		this.state = {
			
		}
    }
	render() {
		// console.log(this.props.data);
		
		const elmData = this.props.data.map((item, key) => {
			return (
				<tr key={key} id = {item.id}>
					<td> {key + 1} </td>
					<td> {item.name} </td>
					<td> {item.author} </td>
					<td> {item.publisher} </td>
					<td> {item.amount} </td>
					<td>
						<Link to={"/update-book/" + item.id }> Update Book </Link>
					</td>
				</tr>
			);
    	});
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
                        {elmData}
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
