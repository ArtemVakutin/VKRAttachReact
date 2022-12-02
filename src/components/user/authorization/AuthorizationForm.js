import React, {Component} from 'react'
import axios from "axios";
import qs from "qs"

const LOGIN_URL = process.env.REACT_APP_LOGIN_PROCESSING_URL;

class AuthorizationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            error: ""
        }
        this.sendLogin = this.sendLogin.bind(this);
    }

    render() {
        return (
            <form>
                <input className="regInput" type="text" placeholder="Логин (e-mail)"
                       onChange={(event => this.setState({username: event.target.value}))}/><p></p>
                <input className="regInput" type="text" placeholder="Парроль"
                       onChange={(event => this.setState({password: event.target.value}))}/><p></p>
                <button type="button" className="regInput" onClick={() => this.sendLogin()}>Вход</button>
            </form>
        )
    }

    async sendLogin() {
        let i = false;
        const data = {
            'username': this.state.username,
            'password': this.state.password
        };

        const config = {
            withCredentials: true,
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          }
        }
        await axios.post(LOGIN_URL, qs.stringify(data), config)
            .then(function (response) {
                if(!response.request.responseURL.includes("error")){
                    console.log("авторизация завершена");
                    // this.makeAut();
                    i = true;
                }
                console.log("наличие ошибки" + response.request.responseURL.includes("error"));
            })
            .catch(function (error) {
                console.log(error);
            });
        if(i) {this.props.makeAuthorized(true);}

    }
    makeAut(){
        // this.props.makeAuthorized(true);
    }

}

export default AuthorizationForm