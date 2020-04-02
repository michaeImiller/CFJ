import React, { Component } from 'react';
import { checkboxes2 } from '../data/checkboxes'
import InputCheckbox from './InputCheckbox'
import { Field } from './Form'

class PriceTable extends Component {
    render() {
        return (
            <>
                {checkboxes2.map((item, key) => (
                    <tr>
                        <td className="key">
                            <Field
                                key={key}
                                component={InputCheckbox}
                                name={item.name}
                                label={item.label}
                                value={item.value}
                            />
                        </td>
                        <td className="value">
                            {item.value}
                            <span className="currency-unit"> US$ </span>
                        </td>
                    </tr>

                ))}
            </>
        )
    }
}

export default PriceTable;