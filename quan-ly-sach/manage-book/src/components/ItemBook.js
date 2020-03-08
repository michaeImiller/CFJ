import React, { Component} from "react";
import UpdateBook from '../pages/UpdateBook';
import { connect } from "react-redux";
import * as actions from '../actions';

class ItemBook extends Component {
	constructor (props){
		super(props);
		this.state = {
			isShowUpdate: false
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleShowFormUpdate = this.handleShowFormUpdate.bind(this);
    }

    // handleUpdate(item){
    //     this.handleShowFormUpdate();
    //     // this.props.onUpdateBook(item);
    // }

    handleShowFormUpdate(){
        this.setState({
            isShowUpdate: !(this.state.isShowUpdate)
        });
    }    

    
    handleDelete(id){
        let isDelete = window.confirm("Bạn có chắc muốn xóa?");
        isDelete ? this.props.onDeleteBook(id) : alert("OK");
    }


    handleCancel(){
        this.setState({
            isShowUpdate: false
        })
    }
    
	render() {
        const { item, index } = this.props;
        // console.log(this.props.onUpdateBook);
         
        const elmFormUpdate = this.state.isShowUpdate ? (
            <UpdateBook
                onUpdateBook ={this.props.onUpdateBook}
                itemUpdate={item}
                onCancel={this.handleCancel}
            />
            ) : null;
        
		return (
			<tr class="spacer">
                <td> {index + 1} </td>
                <td> {item.name} </td>
                <td> {item.author} </td>
                <td> {item.publisher} </td>
                <td> {item.amount} </td>
                <td>
                    <button onClick = { () => this.handleShowFormUpdate()}  >
                        Update
                    </button>
                     <button onClick = {() => this.handleDelete(item.id)}  >
                        Delete
                    </button>
                </td>
                {elmFormUpdate}
            </tr>
		);
	}
}


const mapStateToProps = (state) => {
    return{
        // // data: state.data,
        // updateBook: state.updateBook
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        onDeleteBook: (id) => {
            dispatch(actions.deleteBook(id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemBook);

