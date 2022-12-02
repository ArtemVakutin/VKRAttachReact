import React from "react";
import OrderForm from "./Orders/OrderForm";
import OrderTable from "./Orders/Table";


class Orders extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <OrderForm pGetOrders={this.props.pGetOrders} pState={this.props.pState}/>
                <OrderTable pGetOrders={this.props.pGetOrders} pState ={this.props.pState}/>
            </div>
        )
    }
}

export default Orders;
