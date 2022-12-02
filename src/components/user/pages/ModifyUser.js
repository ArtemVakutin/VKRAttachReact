import React from "react";
import RegistrationForm from "../registration/RegistrationForm";

class ModifyUser extends React.Component{

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

export default ModifyUser;
