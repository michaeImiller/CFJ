import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BsForm from 'react-bootstrap/Form'

export const FormContext = React.createContext()

class FieldRaw extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
        validate: PropTypes.func,
    }

    _onChange = e => {
        const { name } = this.props
        // console.log(e.target.checked)
        if (e && e.target && e.target.value) {
            this.props.change(name, e.target.value)
        } else {
            this.props.change(name, e)
        }
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(e)
        }
    }

    _onChangeCheckbox = e => {
        const { name } = this.props;
        if (e && e.target && e.target.checked) {
            this.props.change(name, e.target.checked)
        }
        else {
            this.props.change(name, e)
        }
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(e)
        }
    }

    _onChangeCheckboxPrice = (e, value) => {
        const { name } = this.props;
        this.props.changeTotalPrice(name, value)
    }

    _onBlur = e => {
        const { name } = this.props
        if (!this.state.touched && typeof this.props.blur === 'function') {
            this.props.blur(name)
        }
        if (typeof this.props.onBlur === 'function') {
            this.props.onFocus(e)
        }
    }

    render() {
        const { name, component, values, touches, errors, ...props } = this.props
        const FieldComponent = component || 'input';
        const input = {
            name,
            onBlur: this._onBlur,
            _onChangeCheckbox: this._onChangeCheckbox,
            onChange: this._onChange,
            _onChangeCheckboxPrice: this._onChangeCheckboxPrice,
            value: values[name] || ''
        }

        return <FieldComponent input={input} touched={touches[name]} error={errors[name]} {...props} name={name} />
    }
}

export const Field = props => (
    <FormContext.Consumer>{context => <FieldRaw {...props} {...context} />}</FormContext.Consumer>
)


class Form extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onSubmit: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            values: props.initialValues || {},
            errors: {},
            touches: {},
            change: this.change,
            blur: this.blur,
            changeTotalPrice: this.changeTotalPrice,
            listPrice: new Map(),
        }
        this.changeTotalPrice = this.changeTotalPrice.bind(this)
    }

    fieldsValidate = {}
    fields = {}

    validate = values => {
        let errors = typeof this.props.validate === 'function' ? this.props.validate() : {}
        Object.keys(this.fieldsValidate).map(field => {
            const fieldValidate = this.fieldsValidate[field]
            errors[field] = fieldValidate(values[field])
        })
        return errors
    }

    blur = (field, value) => {
        let touches = this.state.touches || {}
        if (touches[field]) return
        touches = { ...touches, [field]: true }
        const errors = this.validate(this.state.values)
        this.setState({ touches, errors })
    }

    change = (field, value) => {
        let values = this.state.values || {}
        values = { ...values, [field]: value, total: this.state.total, listPrice: this.state.listPrice }
        const errors = this.validate(values)
        // this.setState({ values, errors })
        this.setState(
            prevState => ({
                values, errors
            }),
        );
    }

    changeTotalPrice = (name, value) => {
        this.setState({
            listPrice: this.state.listPrice.set(name, value)
        })
        let { listPrice, values } = this.state;
        let temp = Array.from(listPrice.values());
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        if (Array.isArray(temp) && temp.length) {
            values = { ...values, total: temp.reduce(reducer) }
        }
        this.setState(
            prevState => ({
                values
            }),
        );
    }
    _onSubmit = e => {
        const { onSubmit } = this.props
        const { values } = this.state;
        const errors = this.validate(values);
        const check = Object.keys(errors).filter(o => errors[o])
        if (typeof onSubmit === 'function' && check.length === 0) {
            e && e.preventDefault && e.preventDefault()
            return onSubmit(values)
        } else {
            this.setState({ errors, touches: this.fields })
            return Promise.reject(errors)
        }
    }

    submit = this._onSubmit

    render() {
        const { name } = this.props
        return (
            <FormContext.Provider value={this.state}>
                <BsForm name={name} onSubmit={this._onSubmit} autoComplete="off">
                    {this.props.children}
                </BsForm>
            </FormContext.Provider>
        )
    }
}

export default Form;