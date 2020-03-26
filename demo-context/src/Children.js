import React, {Component} from 'react';
import './App.css';
import ChildChild from './ChildChild';
import PropTypes from 'prop-types'; 

class Children extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    static propTypes = {
		component: PropTypes.func.isRequired
	}
    render(){ 
        return(
            <div>
            Đây là component con
            {/* {this.props.component1} */}
                {/* <ChildChild component = {ChildChild} /> */}
            </div>
        )
    }
}

export default Children;