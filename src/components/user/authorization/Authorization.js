import React from "react";
import AuthorizationForm from "./AuthorizationForm";





class Authorization extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <AuthorizationForm makeAuthorized={this.props.makeAuthorized}/>
            </div>
        )
    }
}

export default Authorization;
