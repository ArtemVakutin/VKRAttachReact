import React, {Component} from 'react'
import axios from "axios";
import qs from "qs"
import Faculty from "./Faculty";
import YearOfRecruitment from "./YearOfRecruitment";

const REG_URL = process.env.REACT_APP_LOGIN_REGISTRATION_URL;

class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            surname: "",
            name: "",
            patronymic: "",
            email: "",
            password: "",
            secondpassword: "",
            telephone: "",
            faculty: "",
            group: "",
            yearOfRecruitment: ""
        }
        this.setFaculty = this.setFaculty.bind(this);
        this.setYear = this.setYear.bind(this);
    }

    render() {
        return (
            <form>
                <label htmlFor="name"> введите имя </label><p></p>
                <input id="name" type="text" placeholder="Имя"
                       onChange={(event => this.setState({name: event.target.value}))}/><p></p>

                <label htmlFor="surname"> введите фамилию </label><p></p>
                <input id="surname" type="text" placeholder="Фамилия"
                       onChange={(event => this.setState({surname: event.target.value}))}/><p></p>

                <label htmlFor="patronymic"> введите отчество </label><p></p>
                <input id="patronymic" type="text" placeholder="Отчество"
                       onChange={(event => this.setState({patronymic: event.target.value}))}/><p></p>

                <label htmlFor="email"> введите Email </label><p></p>
                <input id="email" type="text" placeholder="Отчество"
                       onChange={(event => this.setState({email: event.target.value}))}/><p></p>

                <label htmlFor="password"> введите пароль (не менее четырех знаков в английской раскладке) </label>
                <p></p>
                <input id="password" type="text" placeholder="Пароль"
                       onChange={(event => this.setState({password: event.target.value}))}/><p></p>

                <label htmlFor="secondpassword"> введите пароль (не менее четырех знаков в английской
                    раскладке) </label><p></p>
                <input id="secondpassword" type="text" placeholder="Повторите пароль"
                       onChange={(event => this.setState({password: event.target.value}))}/><p></p>

                <label htmlFor="telephone"> введите телефон (будет отправлен научному руководителю) </label><p></p>
                <input id="telephone" type="text" placeholder="Телефон"
                       onChange={(event => this.setState({telephone: event.target.value}))}/><p></p>

                <label htmlFor="faculty"> выберите факультет </label><p></p>
                <Faculty id="faculty"  IfChanged ={this.setFaculty} pFaculties = {this.props.pFaculties}/><p></p>

                <label htmlFor="group">введите номер группы (только цифры)</label><p></p>
                <input id="group" type="text" placeholder="Номер группы"
                       onChange={(event => this.setState({group: event.target.value}))}/><p></p>

                <label htmlFor="year">выберите год набора</label><p></p>
                <YearOfRecruitment id="year" IfChanged ={this.setYear} pYears={this.props.pYears}/><p></p>

                <button type="button" className="regInput" onClick={() => this.sendRegistrationRequest()}>Вход</button><p></p>
            </form>
        )
    }



    sendRegistrationRequest(){
        const regEntity = new Map();
        regEntity.set("surname", this.props.surname);
        regEntity.set("name", this.props.name);


        let response = axios.post(REG_URL, this.state);
    }

    setFaculty(faculty){
        this.setState({faculty: faculty})
    }
    setYear(year){
        this.setState({yearOfRecruitment: year})
    }

    makeAut() {
        // this.props.makeAuthorized(true);
    }

}

export default RegistrationForm