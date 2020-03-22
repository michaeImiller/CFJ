import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderForm from './HeaderForm';
import CustomerInfo from './CustomerInfo'


class FormStepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleBackForm() {
        this.props.onBackForm();
    }

    render() {
        const {total, receiver_info} = this.props;
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
                                    <td> {receiver_info.country} </td>
                                    <th rowSpan={3}> Buyer Invoice Total Amount </th>
                                    <td rowSpan={3}> US$ {total} </td>
                                </tr>
                                <tr>
                                    <th> Port </th>
                                    <td> {receiver_info.port} </td>
                                </tr>
                                <tr>
                                    <th> City Delivery </th>
                                    <td> {receiver_info.city_delivery} </td>
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
                                <button className="back" onClick={() => (this.handleBackForm())}>
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

export default FormStepTwo;
