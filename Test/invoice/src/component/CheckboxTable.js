import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import { checkboxes2 } from "../data/checkboxes";
import _ from 'underscore';

const data = checkboxes2;

class CheckboxTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
            checkedValue: new Map(),
            total: 0
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleCalculateTotal = this.handleCalculateTotal.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        const value = isChecked ? Number(e.target.value) : 0;
        // this.setState(
        //     prevState => ({
        //         checkedItems: prevState.checkedItems.set(item, isChecked),
        //         checkedValue: prevState.checkedValue.set(item, value)
        //     }),
        // );
        this.setState({
            checkedItems: this.state.checkedItems.set(item, isChecked),
            checkedValue: this.state.checkedValue.set(item, value)
        });
        const { checkedValue } = this.state;
        let total = Array.from(checkedValue.values());
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        if(Array.isArray(total) && total.length){
            this.props.onChangeToTal(total.reduce(reducer));
        }
        
    }

    // handleCalculateTotal() {
    //     const { checkedValue } = this.state;
    //     let total = Array.from(checkedValue.values());
    //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //     // if(total.length>0){
    //     //     this.setState({total: total.reduce(reducer) })
    //     // }
        
    //     if(total.length>0){
    //         this.props.onChangeToTal(total.reduce(reducer));
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                {data.map(item => (
                    <tr>
                        <td className="key">
                            <label key={item.key} className = "item-checkbox">
                                <Checkbox
                                    name={item.name}
                                    checked={this.state.checkedItems.get(item.name)}
                                    onChange={this.handleChange}
                                    value={item.value}
                                />
                                <span className="checkmark"> {item.label} </span>
                            </label>
                        </td>
                        <td className="value">
                            {item.value}
                            <span className = "currency-unit"> US$ </span>
                        </td>
                    </tr>

                ))}
                {/* <button onClick={() => this.handleTest()}>
                    Test
                </button> */}
            </React.Fragment>
        );
    }
}

export default CheckboxTable;
