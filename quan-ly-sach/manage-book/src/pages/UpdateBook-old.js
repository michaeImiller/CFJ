// import React, { Component} from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from '../actions';

// class UpdateBook extends Component {
// 	constructor (props){
// 		super(props);
// 		this.state = {
//             itemUpdate: {},
//         };
//         this.handleChange = this.handleChange.bind(this);
//         // this.handleUpdate = this.handleUpdate.bind(this);
//     }
//     handleChange(event){
//         this.setState({ [event.target.name]: event.target.value });
//     }

//     // handleUpdate(event){
//     //     this.props.onUpdateBook(this.state.book.id);
//     //     event.preventDefault();
//     // }

//     componentDidMount(){
//         //truyền vào id lấy từ url
//         this.props.onFindBook(this.props.match.params.id);
//         this.setState({
//             itemUpdate: this.props.itembook.find.result
//         })
//     }

// 	render() {
//         let {itemUpdate} = this.state;
//         // console.log(this.props.itembook.find.result);
        
//         return (
//             <div className="add-new-book">
//                 <h2> Cập nhật sách </h2>
//                 <Link to="/">
//                     Trang chủ
//                 </Link>
                
//             </div>
// 		);
// 	}
// }

// const mapStateToProps = state => {
//     return {
//         itembook: state
//     };
// };

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onFindBook : (id) => {
//             dispatch(actions.findBook(id));
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UpdateBook);
