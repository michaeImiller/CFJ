import React, {Component} from 'react';

class HeaderForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-invoice">
                    <p> Invoice <span> #123456 </span> </p>
                    <span className="fa fa-times close-form" aria-hidden="true" />
                </div>
                <div className="name-invoice">
                    <p> 1994 Nissan 180SX </p>
                    <p> Vin No.: <span className="code"> CFJ3860970 </span></p>
                </div>
            </React.Fragment>
        )
    }
}

export default HeaderForm;