import React, { Component } from 'react';
import HeaderForm from './HeaderForm';
import CustomerInfo from './CustomerInfo'
import _ from 'lodash';

class ModalReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.handleBackForm = this.handleBackForm.bind(this)
    }

    handleBackForm() {
        this.props.onHandleBack();
    }

    render() {
        const {country, port, city_delivery, total} = this.props.customer;
        return (
            <div className="form-invoice-step2">
                <HeaderForm />
                <div className="body-form" >
                    <CustomerInfo />
                    <div className="group-table">
                        <table className="country-info">
                            <tbody>
                                <tr>
                                    <th> Country </th>
                                    <td> {(country) ? country : '' } </td>
                                    <th rowSpan={3}> Buyer Invoice Total Amount </th>
                                    <td rowSpan={3}> US$ {total ? total : ''} </td>
                                </tr>
                                <tr>
                                    <th> Port </th>
                                    <td> {port ? port : ''} </td>
                                </tr>
                                <tr>
                                    <th> City Delivery </th>
                                    <td> {city_delivery ? city_delivery : ''} </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="customer-optionals">
                            <span className="title">
                                Customize your message (Optional)
                            </span>
                            <textarea placeholder="Overwrite default message" />
                        </div>
                    </div>
                    <div className="group-button container">
                        <div className="row">
                            <div className="col-md-6">
                                <button className="back" onClick={this.handleBackForm}>
                                    <i className="fa fa-arrow-left" aria-hidden="true" />
                                    Back
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button className="re-issue">
                                    <i className="fa fa-refresh" aria-hidden="true" />
                                    Re-issue Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalReview;
