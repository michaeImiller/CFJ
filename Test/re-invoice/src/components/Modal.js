import React, { Component } from 'react';
import BsForm from 'react-bootstrap/Form';
import Form, { Field } from './Form';
import InputField from './InputField';
import Modal from 'react-bootstrap/Modal'

class ModalForm extends Component {
    render() {
        const { onSubmit, formRef } = this.props
        return (
            <Form onSubmit={onSubmit} ref={formRef}>
                <Field
                    component={InputField}
                    name="usser"
                    placeholder="day la input demo usser"
                />
                <Field
                    component={InputField}
                    name="password"
                    placeholder="day la input demo password"
                />
            </Form>
        )
    }
}

export default class ModalMain extends Component {
    form = React.createRef()
    show = () => {
        this.editModal.current.show()
    }
    submit = () => this.form.current.submit()

    render() {
        const { title, ...props } = this.props
        return (
            <>
                <form formRef={this.form} onConfirm = {this.submit}>
                <ModalForm>
                    {this.props.children}

                </ModalForm>
                </form>
            </>
        )
    }
}