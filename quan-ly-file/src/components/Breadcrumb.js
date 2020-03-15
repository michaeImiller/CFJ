import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

class Breadcrumb extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const {item_breadcrumb} = this.props;
        return (<Link  >
            {item_breadcrumb}
        </Link>)
    }
}

export default Breadcrumb;
