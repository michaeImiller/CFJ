import React, { Component } from "react";
import "../styles/App.scss";
import data from "./data";
import LazyLoad from "react-lazyload";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Children extends Component {
    render(){
        return(
            <p>Children Component</p>
        );
    }
}

export default Children;