import React, {Component} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const {data} = this.props;
        return(
            <div>
                <ul>
                {data.map((item, key) => {
                    return(
                        <li key = {key} > {item.name} </li>
                    )
                })}
                </ul>
                <SideBarItem data = {data}>

                </SideBarItem>
            </div>
        );
    }
}

class SideBarItem extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const {data} = this.props;
        return(
            <div className="sidebar">
                <List>
                    {data.map((sidebarItem, index) => {
                        return(
                            <React.Fragment key={`${sidebarItem.name}${index}`}>

                            </React.Fragment>
                        )
                    })}
                </List>
            </div>
        );
    }
}

export default SideBar;