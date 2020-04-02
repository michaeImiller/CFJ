import React from 'react';
import ModalMain from './components/Modal';
import ModalReview from './components/ModalReview';
import _ from 'lodash';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
            errors: '',
            customer: {},
            isShowForm: false,
            isShowReview: false
        }
        this.handleShowForm = this.handleShowForm.bind(this);
        this.handleToogle = this.handleToogle.bind(this);
        // this.handleBack = this.handleBack.bind(this)
    }
    
	handleShowForm (){
        this.setState({ isShowForm: !this.state.isShowForm})
    }

    handleToogle(){
        this.setState({
            isShowForm: !this.state.isShowForm,
            isShowReview: !this.state.isShowReview
        })
    }

	handleGetValue = ( values) => {
        this.setState({customer: values});
        const {customer} = this.state;
        console.log(customer);
        if(_.isEmpty(customer)){
            this.setState({errors: 'Vui lòng điền thông tin vào form'})
        }
        else{
            this.handleToogle();
            this.setState({errors: ''})
        }
    }

    
	render() {
        const {isShowForm, isShowReview, customer, errors} = this.state;
        console.log(customer);
        
        return (
            <div className = "wrapper container" >
                {isShowForm ? null : (<button className="show-form" onClick = {() => this.handleShowForm()}> Show Form </button>)}
                { (errors.length > 0 ) ? (<p className="error"> {errors} </p>) : null } 
                {isShowForm ? 
                        <ModalMain
                            customer= {customer}
                            title="Form Step 1"
                            onSubmit={this.handleGetValue}
                        /> 
                    
                : null }

                {isShowReview ? 
                    <ModalReview
                        customer = {customer}
                        onHandleBack = {this.handleToogle}
                    />
                : null}
            </div>
        );
    }




}


export default App;
