import React, {Component} from 'react';
import PropTypes from 'prop-types'


class TextareaField extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    }
    
    render () {
        const {name, placeholder, label} = this.props
        return(
            <>
                <label> {label} </label>
                <textarea name ={name} placeholder = {placeholder} />
            </>
        )
    }
}

export default TextareaField;