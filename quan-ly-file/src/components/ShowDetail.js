import React, {Component} from 'react';

class ShowDetail extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.props.onCloseDetail();
    }
    render() {
        const {itemSelected} = this.props;
        console.log(itemSelected.created_at);
        
        return (
            <div className = "detail-item" >
                <p>
                    <span className="key">
                        Tên :
                    </span>
                    <span className="value">
                        {itemSelected.name}
                    </span>
                </p>
                <p>
                    <span className="key">
                        Loại :
                    </span>
                    <span className="value">
                        {itemSelected.type}
                    </span>
                </p>
                <p>
                    <span className="key">
                        Ngày tạo :
                    </span>
                    <span className="value">
                        {Date.parse(itemSelected.created_at)}
                    </span>
                </p>
                <p>
                    <span className="key">
                        Ngày sửa gần nhất :
                    </span>
                    <span className="value">
                        {Date.parse(itemSelected.updated_at)}
                    </span>
                </p>

                <button onClick = {this.handleClose}> OK </button>
            </div>
        )
    }
}

export default ShowDetail;