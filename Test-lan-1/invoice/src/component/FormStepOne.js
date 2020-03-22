import React, { Component } from 'react';
import HeaderForm from './HeaderForm';
import CheckboxContainer from './CheckboxContainer';
import CustomerInfo from './CustomerInfo';
import { checkboxes1 } from "../data/checkboxes";

import CheckboxTable from './CheckboxTable';

class FormStepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.handleChangeFor = this.handleChangeFor.bind(this);
        // this.onChangeToTal = this.onChangeToTal.bind(this);
    }

    handleNextPreview() {
        const {checkedItems1 } = this.state;
        this.props.onShowReview();
        this.props.onChangeCheckbox1(checkedItems1)
    }

    handleChangeFor = (propertyName) => (event) => {
        const { receiver_info } = this.state;
        const newdata = {
            ...receiver_info,
            [propertyName]: event.target.value
        };
        this.setState({ receiver_info: newdata });
        this.props.onChangeReceiverInfo(this.state.receiver_info)
    }


    render() {
        const { name, address, phone, country, port, city_delivery, additional_cost, additional_description } = this.state.receiver_info;
        const receiver_info2 = this.props.receiver_info;
        const { checkedItems1, checkedItems2 } = this.state;
        const {total} = this.props;
        
        return (
            <div className="form-invoice-step1">
                <HeaderForm />
                <div className="body-form" >
                    <CustomerInfo />
                    <div className="big-form">
                        <div className="send-document container">
                            <div className="title row">
                                SEND DOCUMENT TO BELOW ADDRESS
                        </div>
                            <div className="group-input row">
                                <div className="item-input">
                                    <label> Name </label>
                                    <input type="text" defaultValue={receiver_info2}  value={name} name="name" onChange={this.handleChangeFor('name')} />
                                </div>
                                <div className="item-input">
                                    <label > Address </label>
                                    <input type="text"  value={address} name="address" onChange={this.handleChangeFor('address')} />
                                </div>
                                <div className="item-input">
                                    <label > Phone </label>
                                    <input type="text"  value={phone} name="phone" onChange={this.handleChangeFor('phone')} />
                                </div>
                            </div>
                        </div>
                        <div className="country-address container">
                            <div className="group-input row">
                                <div className="item-input">
                                    <label > Country </label>
                                    <input type="text" name="country"  value={country} placeholder="Enter country" onChange={this.handleChangeFor('country')} />
                                </div>
                                <div className="item-input">
                                    <label > Port </label>
                                    <input type="text" name="port"  value={port} placeholder="Enter port & CFS (if any)" onChange={this.handleChangeFor('port')} />
                                </div>
                                <div className="item-input">
                                    <label > City Delivery (If any)</label>
                                    <input type="text" name="city_delivery" value={city_delivery} placeholder="Enter City" onChange={this.handleChangeFor('city_delivery')} />
                                </div>
                            </div>
                            <CheckboxContainer data={checkboxes1} checkedItems={checkedItems1} onChangeCheckbox1 = {this.props.onChangeCheckbox1} />
                        </div>
                        <div className="payment-option row">
                            <div className="table-checkbox col-md-6">
                                <table>
                                    <CheckboxTable checkedItems={checkedItems2} onChangeToTal = {this.props.onChangeToTal} />
                                    <tr>
                                        <td className="key">
                                            Buyer Invoice Total Amount
                                    </td>
                                        <td className="value">
                                            {total}
                                    </td>
                                    </tr>
                                    <tr>
                                        <td className="key">
                                            Reserved to Seller
                                            (exclude buyer protection)
                                    </td>
                                        <td className="value">
                                            Tính tổng HÀNG TRÊN trừ đi 95
                                    </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="additional-option col-md-6">
                                <label>
                                    Additional Cost
                            </label>
                                <textarea value={additional_cost} name="additional_cost" onChange={this.handleChangeFor('additional_cost')} />
                                <label>
                                    Additional Description
                            </label>
                                <textarea value={additional_description} name="additional_description" onChange={this.handleChangeFor('additional_description')} />
                            </div>
                        </div>

                    </div>
                    <div className="group-actions-button">
                        <button className="preview">
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            Preview
                        </button>
                        <button className="next-to-step" onClick={() => this.handleNextPreview()} >
                            <i className="fa fa-arrow-right" aria-hidden="true" />
                            Next
                        </button>
                    </div>
                    <div className="footer-invoice container">
                        <div className="row">
                            <div className="discount col-md-4">
                                <div className="title">
                                    Discount
                                    <i className="fa fa-question-circle" aria-hidden="true" />
                                </div>
                                <div className="input-select">
                                    <input type="text" />
                                    <select>
                                        <option value="USD"> USD </option>
                                        <option value="EURO"> EURO </option>
                                    </select>
                                </div>

                                <div className="checkbox">
                                    <input type="checkbox" />
                                    <label> Do not Show Vin Number </label>
                                </div>
                                
                            </div>
                            <div className="issue col-md-4">
                                <div className="title">
                                    Issue In Other Currencies
                                    <i className="fa fa-question-circle" aria-hidden="true" />
                                </div>
                                <div className="input-select">
                                    <input type="text" />
                                    <select>
                                        <option value="USD"> USD </option>
                                        <option value="EURO"> EURO </option>
                                    </select>
                                </div>
                                
                                <div className="checkbox">
                                    <input type="checkbox" />
                                    <label> Apply same currency for break down cost </label>
                                </div>
                                
                            </div>
                            <div className="kenya col-md-4">
                                <div className="title">
                                    KENYA Invoice
                                    <i className="fa fa-question-circle" aria-hidden="true" />
                                </div>
                                <div className="input-select">
                                    <input type="text" />
                                    <select>
                                        <option value="USD"> KES </option>
                                    </select>
                                </div>
                                
                                <div className="checkbox">
                                    <input type="checkbox" />
                                    <label> Show CFJ Kenya Bank account (USD) </label>
                                    <input type="checkbox" />
                                    <label> Issue invoice in KES and show KES Account </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormStepOne;
