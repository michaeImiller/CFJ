import React, { Component } from 'react';
import PropTypes, { bool } from 'prop-types'

class InputField extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        validate: PropTypes.func
    }
    state = {
        isInputValid: bool,
        errorMessage: '',

    }

    _onChange = e => {
        const { input} = this.props
        if(this.state.isInputValid){
            input.onChange(e)
        }
        
    }

    handleInputValidation = (e) => {
        const {value} = e.target;
        const {validate} = this.props 
        const isInputValid = validate(value).isInputValid;
        const errorMessage = validate(value).errorMessage;
        this.setState({ isInputValid, errorMessage})
    }

    render() {
        const { isInputValid, errorMessage} = this.state;
        const { name, placeholder, label, defaultValue } = this.props;
        
        return (
            <div className="item-input">
                <label> {label} </label>
                <input type="text" name={name} defaultValue = {defaultValue || ''} placeholder={placeholder} onChange = {this._onChange}  onBlur={this.handleInputValidation} />
                {(isInputValid) ? null : (<span className="error-validate"> {errorMessage} </span>)
                }
            </div>
        )
    }
}

export default InputField;