import React from 'react';
import { ImBlocked } from "react-icons/im";
import axios from "axios";

const ORDER_URL = process.env.REACT_APP_ORDER_URL;

class OrderTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    render() {

        let content = [];
        const map = this.props.pState.orders;
        let i = 1;
        for (const mapElement of map.keys()) {
            let element = map.get(mapElement)
            content.push(<tr key={element.id}>
                <th>{i}</th>
                <th>{element.department}</th>
                <th>{element.themeName}</th>
                <th>{element.lecturerName}</th>
                <th>{element.requestStatus}</th>
                <th>{element.comment}</th>
                <th><ImBlocked onClick={()=>this.deleteOrder(element.id)}/></th>
                </tr>
            )

            i++;
        }
        return (
            <div><table border="5" width="500px">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Кафедра</th>
                    <th>Наименование темы</th>
                    <th>Научный руководитель</th>
                    <th>Статус заявления</th>
                    <th>Комментарий</th>
                    <th>Удалить заявку</th>
                </tr>
                </thead>
                <tbody align="center">
                {content}
                </tbody>
                <tfoot>

                </tfoot>

            </table><br/>
            <div>{this.state.error}</div>
            </div>
        )
    }
    deleteOrder(orderId){
        const CONFIG = {
            params: {
                id: orderId,
            }
        }
        let b = window.confirm("подтвердите действие");
        if(b){
            axios.delete(ORDER_URL, CONFIG)
                .then(()=>this.props.pGetOrders())
                .catch(err=>{
                    if(err.response.status === "404"){
                        this.setState({
                            error: "Такая заявка для такого пользователя отсутствует"
                        })
                    } else {
                        console.log(err.response.data);
                        console.log(err.response.status);
                        console.log(err.response.headers);
                    }
                })
        }
    }
}

export default OrderTable;