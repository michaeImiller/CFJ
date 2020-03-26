import React, {Component} from 'react';

import AppContext from './context/AppContext';

class AppProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 10,
            demo: 9
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (){
        this.setState({ demo: this.state.demo +1})
    }
    render(){
        return(
            <AppContext.Provider value = {{
                demo: this.state.demo,
                handleChange : this.handleChange
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;