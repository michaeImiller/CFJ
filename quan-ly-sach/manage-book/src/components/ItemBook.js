import React, { Component} from "react";
import UpdateBook from '../pages/UpdateBook';

class ItemBook extends Component {
	constructor (props){
		super(props);
		this.state = {
			isShowUpdate: false
        }
        this.handleShowUpdate = this.handleShowUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }

    handleShowUpdate(){
        this.setState({
            isShowUpdate: !(this.state.isShowUpdate)
        });
    }

    handleCancel(){
        this.setState({
            isShowUpdate: false
        })
    }
    
	render() {
        const {item, index} = this.props; 
        const elmFormUpdate = this.state.isShowUpdate ? <UpdateBook itemUpdate = {item} onCancel = {this.handleCancel} /> : null;
        
		return (
			<tr>
                <td> {index + 1} </td>
                <td> {item.name} </td>
                <td> {item.author} </td>
                <td> {item.publisher} </td>
                <td> {item.amount} </td>
                <td>
                    <button onClick = {this.handleShowUpdate}  >
                        Update
                    </button>
                </td>
                {elmFormUpdate}
            </tr>
		);
	}
}

export default ItemBook;
