import React, {Component} from 'react'
import axios from "axios";
import RegList from "./RegList";

const REG_URL = process.env.REACT_APP_LOGIN_REGISTRATION_URL;

class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            surname: null,
            name: null,
            patronymic: null,
            email: null,
            password: null,
            secondpassword: null,
            telephone: null,
            faculty: null,
            group: null,
            yearOfRecruitment: null,
            oldPassword: null
        }
        this.setFaculty = this.setFaculty.bind(this);
        this.setYear = this.setYear.bind(this);
    }

    render() {
        return (
            <form>
                <label htmlFor="name"> введите имя </label><br/>
                <input id="name" type="text" placeholder="Имя"
                       defaultValue={this.props.pState.userAuthorized ? this.props.pState.user.get("name") : ""}
                       onChange={(event => this.setState({name: event.target.value}))}/><br/>

                <label htmlFor="surname"> введите фамилию </label><p></p>
                <input id="surname" type="text" placeholder="Фамилия"
                       defaultValue={this.props.pState.userAuthorized ? this.props.pState.user.get("surname") : ""}
                       onChange={(event => this.setState({surname: event.target.value}))}/><br/>

                <label htmlFor="patronymic"> введите отчество </label><br/>
                <input id="patronymic" type="text" placeholder="Отчество"
                       defaultValue={this.props.pState.userAuthorized ? this.props.pState.user.get("patronymic") : ""}
                       onChange={(event => this.setState({patronymic: event.target.value}))}/><br/>

                <label htmlFor="email"> введите Email </label><br/>
                <input id="email" type="text" placeholder="Отчество"
                       defaultValue={this.props.pState.userAuthorized ? this.props.pState.user.get("email") : ""}
                       onChange={(event => this.setState({email: event.target.value}))}/><br/>

                <label htmlFor="oldPassword"
                       className={this.props.pState.userAuthorized ? "label" : "hiddenClass"}> введите старый пароль
                    (если собираетесь менять пароль) </label>
                <br/>
                <input id="oldPassword" type="text" placeholder="Придумайте пароль"
                       className={this.props.pState.userAuthorized ? "label" : "hiddenClass"}
                       onChange={(event => this.setState({oldPassword: event.target.value}))}/><br/>

                <label htmlFor="password"> введите пароль (не менее четырех знаков в английской раскладке) </label>
                <br/>
                <input id="password" type="text" placeholder="Придумайте пароль"
                       onChange={(event => this.setState({password: event.target.value}))}/><br/>

                <label htmlFor="secondpassword"> повторите пароль (не менее четырех знаков в английской
                    раскладке) </label><br/>
                <input id="secondpassword" type="text" placeholder="Повторите пароль"
                       onChange={(event => this.setState({secondpassword: event.target.value}))}/><br/>

                <label htmlFor="telephone"> введите телефон (будет отправлен научному руководителю) </label><br/>
                <input id="telephone" type="text" placeholder="Телефон"
                       defaultValue={this.props.pState.userAuthorized ? this.props.pState.user.get("telephone") : ""}
                       onChange={(event => this.setState({telephone: event.target.value}))}/><br/>

                <label
                    htmlFor="faculty"> {this.props.pState.userAuthorized ? "Ваш факультет: " + this.props.pState.user.get("faculty") + ". Можно выбрать другой" : "Выберите факультет"}
                    </label><br/>
                <RegList id="faculty" IfChanged={this.setFaculty} pElements={this.props.pState.faculties}/><br/>

                <label htmlFor="group">введите номер группы (только цифры)</label><br/>
                <input id="group" type="text" placeholder="Номер группы"
                       defaultValue={this.props.pState.userAuthorized ? this.props.pState.user.get("group") : ""}
                       onChange={(event => this.setState({group: event.target.value}))}/><br/>

                <label htmlFor="year">{this.props.pState.userAuthorized ? "Ваш год набора: " + this.props.pState.user.get("yearOfRecruitment") + ". Можно выбрать другой" : "Выберите год набора"}</label><br/>
                <RegList id="year" IfChanged={this.setYear} pElements={this.props.pState.yearOfRecruitment}/><br/>

                <button type="button" className="regInput"
                        onClick={() => this.sendRegistrationRequest()}>{this.props.pState.userAuthorized ? "Внести изменения" : "Зарегистрироваться"}</button>
                <br/>
                <br/>
                <br/>
            </form>
        )
    }


    async sendRegistrationRequest() {
        if(!this.props.pState.userAuthorized) {
            await axios.put(REG_URL, this.state).then().catch(err => {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                }
                if (err.request) {
                    console.log("SERVER IS NOT AVAILABLE")
                }
            })
        } else {
            await axios.patch(REG_URL, this.state).catch(err => {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                }
                if (err.request) {
                    console.log("SERVER IS NOT AVAILABLE")
                }
            })
        }
    }

    setFaculty(faculty) {
        this.setState({faculty: faculty})
    }

    setYear(yearNumber) {
        this.setState({yearOfRecruitment: this.props.pState.yearOfRecruitment.get(yearNumber)})
    }

    makeAut() {
        // this.props.makeAuthorized(true);
    }

}

export default RegistrationForm