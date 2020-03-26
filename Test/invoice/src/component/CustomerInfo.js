import React, {Component} from 'react';
import { buyer } from '../data/data';

class CustomerInfo extends Component {
    render(){
        return(
            <div className="customer-info">
                <table>
                    <tbody>
                        <tr>
                            <th> Consignee Name </th>
                            <td> {buyer.consignee_name} </td>
                            <th> Notify Party Name </th>
                            <td> {buyer.consignee_name} </td>
                        </tr>
                        <tr>
                            <th> Consignee Address </th>
                            <td> {buyer.consignee_address} </td>
                            <th> Notify Party Address </th>
                            <td> {buyer.consignee_address} </td>
                        </tr>
                        <tr>
                            <th> Consignee Phone </th>
                            <td> {buyer.consignee_phone} </td>
                            <th> Notify Party Phone </th>
                            <td> {buyer.consignee_phone} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CustomerInfo;