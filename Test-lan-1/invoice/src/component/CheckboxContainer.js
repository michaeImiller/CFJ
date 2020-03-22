import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

class CheckboxContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checkedItems: this.props.checkedItems
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const item = e.target.name;
		const isChecked = e.target.checked;
		this.setState(prevState => ({
			checkedItems: prevState.checkedItems.set(item, isChecked)
		}));
		this.props.onChangeCheckbox1(this.state.checkedItems)
	}

	render() {
		const { checkedItems } = this.state;
		const { data } = this.props;
		// const test = checkedItems.get(checkedItems.name);
		// console.log(checkedItems);

		return (


			<React.Fragment>
				{data.map(item => (
					<label key={item.key} className="item-checkbox">
						<Checkbox
							name={item.name}
							checked={this.state.checkedItems.get(item.name)}
							onChange={this.handleChange}
						/>
						<span className="checkmark"> {item.label} </span>
					</label>
				))}
			</React.Fragment>
		);
	}
}

export default CheckboxContainer;
