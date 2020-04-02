import React, { Component } from 'react';
import Form, { Field } from './Form';
import InputField from './InputField';
import InputCheckbox from './InputCheckbox';
import TextareaField from './TextareaField';
import HeaderForm from './HeaderForm';
import CustomerInfo from './CustomerInfo';
import { checkboxes1 } from "../data/checkboxes";
import PriceTable from './PriceTable';
import {FormContext} from './Form';
import {combine, required, number, maxLength, phoneNumber, none} from '../validate';

class ModalForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            initialValues: this.props.customer || {}
        }
    }
    render() {
        const {initialValues} = this.state
        const { onSubmit, formRef, _onClickSubmit } = this.props;        
        return (
            <div className="big-form">
                <Form onSubmit={onSubmit} initialValues={initialValues} ref={formRef}>
                    <div className="send-document container">
                        <div className="title row">
                            SEND DOCUMENT TO BELOW ADDRESS
                        </div>
                        <div className="group-input row">
                            <Field
                                component={InputField}
                                name="name"
                                placeholder=""
                                label="Name"
                                validate = {required}
                                defaultValue = {initialValues.name || ''}
                            />
                            <Field
                                component={InputField}
                                name="address"
                                placeholder=""
                                label="Address"
                                validate = {required}
                                defaultValue = {initialValues.address || ''}
                            />
                            <Field
                                component={InputField}
                                name="phone"
                                placeholder=""
                                label="Phone"
                                validate = { phoneNumber}
                                defaultValue = {initialValues.phone || ''}
                            />
                        </div>
                    </div>
                    <div className="country-address container">
                        <div className="group-input row">
                            <Field
                                component={InputField}
                                name="country"
                                placeholder="Enter country"
                                label="Country"
                                validate = {required}
                                defaultValue = {initialValues.country || ''}
                            />
                            <Field
                                component={InputField}
                                name="port"
                                placeholder="Enter port & CFS (if any)"
                                label="Port"
                                validate = {required}
                                defaultValue = {initialValues.port || ''}
                            />
                            <Field
                                component={InputField}
                                name="city_delivery"
                                placeholder="Enter City"
                                label="City Delivery"
                                validate = {required}
                                defaultValue = {initialValues.city_delivery || ''}
                            />
                        </div>
                        <div className="gr-checkboxes">
                            {checkboxes1.map( (item, key) => (
                                <Field
                                    key = {key}
                                    component={InputCheckbox}
                                    name={item.name}
                                    label={item.label}
                                    // defaultValue = {initialValues.listPrice}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="payment-option row">
                        <div className="table-checkbox col-md-6">
                            <table>
                                <PriceTable />
                                <FormContext.Consumer>{context => 
                                (   <>
                                        <tr>
                                            <td className="key">
                                                Buyer Invoice Total Amount
                                            </td>
                                            <td className="value">
                                                {(context.values.total > 0) ?  (context.values.total) : 0}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="key">
                                                Reserved to Seller
                                                (exclude buyer protection)
                                            </td>
                                            <td className="value">
                                                {(context.values.total > 0) ?  (context.values.total - 95) : 0}
                                            </td>
                                        </tr>
                                    </>
                                )}
                                </FormContext.Consumer>
                            </table>
                        </div>
                        <div className="additional-option col-md-6">
                            <Field
                                component={TextareaField}
                                name="additional_cost"
                                placeholder="Description | Cost"
                                label="Additional Cost"
                            />
                            <Field
                                component={TextareaField}
                                name="additional_description"
                                placeholder="Description"
                                label="Additional Description"
                            />
                        </div>
                    </div>
                    <div className="group-actions-button">
                        <button className="preview">
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            Preview
                        </button>
                        <button className="next-to-step" onClick={_onClickSubmit} >
                            <i className="fa fa-arrow-right" aria-hidden="true" />
                            Next
                        </button>
                    </div>
                    <div className="footer-invoice row">
                        <div className="discount col-md-4">
                            <div className="title">
                                Discount
                                <i className="fa fa-question-circle" aria-hidden="true" />
                            </div>
                            <div className="input-select">
                                <Field
                                    component = {InputField}
                                    validate = {none}
                                    name = "discount"
                                />
                                <select>
                                    <option value="USD"> USD </option>
                                    <option value="EURO"> EURO </option>
                                </select>
                            </div>

                            <div className="checkbox">
                                <Field
                                    component = {InputCheckbox}
                                    label = "Do not Show Vin Number"
                                    name = "show_vin_number"
                                />
                            </div>
                            
                        </div>
                        <div className="issue col-md-4">
                            <div className="title">
                                Issue In Other Currencies
                                <i className="fa fa-question-circle" aria-hidden="true" />
                            </div>
                            <div className="input-select">
                                <Field
                                    component = {InputField}
                                    validate = {none}
                                    name = "issue_other_currencies"
                                />
                                <select>
                                    <option value="USD"> USD </option>
                                    <option value="EURO"> EURO </option>
                                </select>
                            </div>
                            
                            <div className="checkbox">
                                <Field
                                    component = {InputCheckbox}
                                    label = "Apply same currency for break down cost"
                                    name = "apply_same_currency"
                                />
                            </div>
                        </div>
                        <div className="kenya col-md-4">
                            <div className="title">
                                KENYA Invoice
                                <i className="fa fa-question-circle" aria-hidden="true" />
                            </div>
                            <div className="input-select">
                                <Field
                                    component = {InputField}
                                    label = ""
                                    name = "kennya_invoice"
                                />
                                <select>
                                    <option value="USD"> KES </option>
                                </select>
                            </div>
                            
                            <div className="checkbox">
                                <Field
                                    component = {InputCheckbox}
                                    label = "Show CFJ Kenya Bank account (USD) "
                                    name="cfj_kennya_bank"
                                />
                                <Field
                                    component = {InputCheckbox}
                                    name = "show_kes_acc"
                                    label = "Issue invoice in KES and show KES Account"
                                />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export default class ModalMain extends Component {
    form = React.createRef()

    submit = () => {
        this.form.current.submit();
        // this.props.onShowReview();
    }

    render() {
        const { customer, title, ...props } = this.props

        return (
            <>
                <HeaderForm />
                <CustomerInfo />
                <ModalForm {...props} formRef={this.form} _onClickSubmit = {this.submit} customer = {customer}  />
            </>
        )
    }
}