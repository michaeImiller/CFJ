import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange, value }) => (
  <input id={name } className="regular-checkbox" value = {value} type={type} name={name} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};

export default Checkbox;
