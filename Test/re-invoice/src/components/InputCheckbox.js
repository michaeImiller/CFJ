import React, { Component } from 'react';
import PropTypes from 'prop-types'

class InputCheckbox extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        checked: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.number
    }

    _onChange = e => {
        const { input } = this.props;
        const isChecked = e.target.checked;
        const value = isChecked ? Number(e.target.value) : 0;
        input._onChangeCheckbox(e);
        input._onChangeCheckboxPrice(e, value)
    }
    render() {
        const { name, label, value } = this.props;

        return (
            <>
                <input type="checkbox" name={name} value = {value} onChange={this._onChange} />
                <label> {label} </label>
            </>
        )
    }
}

export default InputCheckbox;