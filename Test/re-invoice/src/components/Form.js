import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BsForm from 'react-bootstrap/Form'

const FormContext = React.createContext()

class FieldRaw extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired
    }

    _onChange = e => {
        const {name} = this.props;
        if(e && e.target) {
            this.props.change(name, e.target.value)
        }
        else{
            this.props.change(name, e)
        }
        if(typeof this.props.onChange === 'function') {
            this.props.onChange(e);
        }
    }
    
    render () {
        const {name, values, component, ...props} = this.props;
        const FieldComponent = component || 'input';
        const input = { name , value: values[name] || ''}
        
        return <FieldComponent input={input} {...props} />
    }
}

export const Field = props => (
    <FormContext.Consumer>{context => <FieldRaw {...props} {...context} />}</FormContext.Consumer>
)


class Form extends Component {
    static propTypes ={
        name: PropTypes.string.isRequired,
        onSubmit: PropTypes.func
    }

    constructor(props){
        super(props);
        this.state = {
            values: props.initialValues || {},
            errors: {},
            change: this.change,
        }
    }

    fields = {}
    
    change = (field, value) => {
        let values = this.state.values || {}
        values = { ...values, [field]: isNaN(Number(value)) ? value : Number(value) }
        // const errors = this.validate(values)
        this.setState({ values })
    }

    _onSubmit = e => {
        const { onSubmit } = this.props
        const { values } = this.state
        // const errors = this.validate(values)
        e && e.preventDefault && e.preventDefault()
        console.log(onSubmit(values));

      }
    submit = this._onSubmit

    render () {
        const { name } = this.props
        return(
            <FormContext.Provider value = {this.state}>
                <BsForm name = {name} onSubmit = {this._onSubmit} >
                    {this.props.children}
                </BsForm>
            </FormContext.Provider>
        )
    }
}

export default Form;