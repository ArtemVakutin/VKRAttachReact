import React from 'react';
import RegistrationForm from "./RegistrationForm";

class Registration extends React.Component{

    constructor(props) {
        super(props);
    }




    render() {
        return (
            <div>
                <RegistrationForm pYears={this.props.pYears} pFaculties = {this.props.pFaculties}/>
            </div>
        )
    }
}

export default Registration;
