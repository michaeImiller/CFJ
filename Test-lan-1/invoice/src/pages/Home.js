import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FormStepOne from '../component/FormStepOne';
import FormStepTwo from '../component/FormStepTwo';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowForm: false,
            isShowReview: false,
            receiver_info: {
                name: '',
                address: '',
                phone: '',
                country: '',
                port: '',
                city_delivery: '',
                additional_cost: '',
                additional_description: '',
            },
            checkedItems1: new Map(),
            checkedItems2: new Map(),
            total: 0,
        }
        this.onChangeToTal = this.onChangeToTal.bind(this);
        this.handleToogle = this.handleToogle.bind(this);
        this.handleShowForm = this.handleShowForm.bind(this);
        this.onChangeReceiverInfo = this.onChangeReceiverInfo.bind(this);
        this.onChangeCheckbox1 = this.onChangeCheckbox1.bind(this);
    }

    handleShowForm (){
        this.setState({ isShowForm: !this.state.isShowForm})
    }

    handleToogle (){
        this.setState({ 
            isShowForm: !this.state.isShowForm,
            isShowReview: !this.state.isShowReview
        })
    }
    onChangeToTal (newTotal) {
        this.setState({total: newTotal});
    }

    onChangeReceiverInfo(receiver_info){
        this.setState({receiver_info: receiver_info});
    }

    onChangeCheckbox1(checkItem){
        this.setState({checkedItems1: checkItem});
    }

    render() {
        const {isShowForm, isShowReview, total, receiver_info, checkedItems1} = this.state;
        console.log(checkedItems1);
        
        return (
            <div className = "wrapper" >
                <button onClick = {() => this.handleShowForm()}> Show Form </button>
                {isShowForm ? 
                    <FormStepOne
                        total = {total}
                        receiver_info = {receiver_info}
                        onShowReview = {() => this.handleToogle()} 
                        onChangeToTal = { this.onChangeToTal} 
                        onChangeReceiverInfo = {this.onChangeReceiverInfo}
                        onChangeCheckbox1 = {this.onChangeCheckbox1}
                    /> 
                : null }
                
                {isShowReview ? 
                    <FormStepTwo 
                        onBackForm = {() => this.handleToogle()} 
                        total = {total}
                        receiver_info = {receiver_info}
                    /> 
                : null}
            </div>
        );
    }
}

export default Home;