import React, {Component} from 'react';
import PropTypes from 'prop-types'


class InputField extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    }
    
    render () {
        const {name, placeholder} = this.props
        
        return(
            <input type="text" name ={name} placeholder = {placeholder} />
        )
    }
}

export default InputField;