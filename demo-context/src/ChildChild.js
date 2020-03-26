import React, {useState} from 'react';
import './App.css';
import AppContext from './context/AppContext'


class ChildChild extends React.Component {
    render(){
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div>
                        {/* <h1>
                        đây là Component cháu
                            {context.demo}
                        </h1>
                        <button onClick = {context.handleChange}>
                            Click
                        </button> */}
                        child child
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
	
}

export default ChildChild;
