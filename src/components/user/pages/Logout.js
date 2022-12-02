import React from "react";
import axios from "axios";

class Logout extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div><button onClick={() =>
                this.logout()
            }>
                Выйти нахер
            </button></div>
        )
    }

    async logout(){
       await axios.post(process.env.REACT_APP_LOGOUT_URL).then(() => this.props.pLogout()).catch()
    }
}



export default Logout;
