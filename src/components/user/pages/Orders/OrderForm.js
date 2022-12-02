import React, {Component} from 'react'
import Selector from "./Selector";
import axios from "axios";

const GETTHEMES_URL = process.env.REACT_APP_GETTHEMES_URL;
const ORDER_URL = process.env.REACT_APP_ORDER_URL;

class OrderForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orderRequest: {
                department: "",
                themeId: "",
                comment: ""
            },
            themes: new Map(),
            errors: "тут будут указываться ошибки"
        }
        this.setDepartment = this.setDepartment.bind(this);
        this.setTheme = this.setTheme.bind(this)
        this.addOrder = this.addOrder.bind(this)
    }

    render() {
        return (
                <form>
                    <label htmlFor="departmentSelector">Выберите кафедру, на которой собираетесь писать работу</label>
                    <p/>
                    <Selector id="departmentSelector" pSetValue={this.setDepartment}
                              pDefaultValue={this.state.orderRequest.department}
                              pValues={this.props.pState.departments}/><p></p>

                    <label htmlFor="themesSelector">Выберите тему</label>
                    <p/>
                    <Selector id="themesSelector" pSetValue={this.setTheme}
                              pDefaultValue={this.state.orderRequest.themeId}
                              pValues={this.state.themes}/><br/><br/>

                    <label htmlFor="comment">Добавьте при необходимости комментарий (предпочитаемый преподаватель и т.д.)</label><br/><br/>
                    <textarea name="comment" id="comment" cols="30" rows="10" onChange={event => this.setState({
                        orderRequest: {
                            department: this.state.orderRequest.department,
                            themeId: this.state.orderRequest.themeId,
                            comment: event.target.value
                        }
                    })} defaultValue={this.state.orderRequest.comment}></textarea><br/><br/>
                    <label>{this.state.errors}</label><br/><br/>
                    <button type="button" className="regInput" onClick={() => this.addOrder()}>Отправить заявку
                    </button>


                </form>

        )
    }
//шлем ордер и проверяем наличие ордеров
    async addOrder() {
        console.log(this.state.orderRequest.department + this.state.orderRequest.themeId + this.state.orderRequest.comment)

        if (this.state.orderRequest.department !== "" && this.state.orderRequest.theme !== "") {
            await axios.put(ORDER_URL, this.state.orderRequest)
                .then(res => console.log("отправлено"))
                .catch(err => {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                })
            this.props.pGetOrders();
        } else {
            this.setState({
                errors: "Выберите кафедру и тему работы"
            })
        }
    }

    async setDepartment(department) {

        //Загружаем темы
        let themes = new Map();
        const configGetThemes = {
            params: {
                department: department,
                faculty: this.props.pState.user.get('faculty'),
                year: this.props.pState.user.get('yearOfRecruitment')
            }
        }
        await axios.get(GETTHEMES_URL, configGetThemes).then(res => {
            themes = new Map(Object.entries(res.data));
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
            if (err.request) {
                console.log("SERVER IS NOT AVAILABLE")
            }
        })
        console.log(themes.size)
        console.log(themes.get("1"))
        this.setState({
            orderRequest: {
                department: department,
                themeId: "",
                comment: ""
            },
            themes: themes
        })
    }


    setTheme(theme) {
        this.setState({
                     orderRequest: {
                department: this.state.orderRequest.department,
                themeId: theme,
                comment: this.state.orderRequest.comment
            }
        })
    }
}

export default OrderForm