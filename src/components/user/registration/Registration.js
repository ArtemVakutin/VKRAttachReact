import React from 'react';
import RegistrationForm from "./RegistrationForm";

class Registration extends React.Component{

    constructor(props) {
        super(props);
    }




    render() {
        return (
            <div>
                <RegistrationForm pState={this.props.pState}/>
            </div>
        )
    }
}

export default Registration;
