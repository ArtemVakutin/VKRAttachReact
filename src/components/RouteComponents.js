import React from 'react';
import UserNavBar from "./routebars/UserNavBar";
import Orders from "./user/pages/Orders";
import ModifyUser from "./user/pages/ModifyUser";
import Docs from "./user/pages/Docs";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterBar from "./routebars/UserRegisterBar";
import Authorization from "./user/authorization/Authorization";
import Registration from "./user/registration/Registration";
import Logout from "./user/pages/Logout";


class RouteComponents extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        console.log("ALL STATE :" + this.props.pState.user + this.props.pState.userAuthorized + this.props.pState.faculties);
        if (this.props.pUserAuthorized) {
            return (
                <div>
                    <div>Добрый
                        день, {this.props.pState.user.get('name')} {this.props.pState.user.get('patronymic')}</div>
                    <Router>
                        <UserNavBar/>
                        <Routes>
                            {/*<Route exact path='/' exact element={<Docs />} />*/}
                            <Route path='/order' element={<Orders pGetOrders={this.props.pGetOrders} pState={this.props.pState}/>}/>
                            <Route path='/docs' element={<Docs/>}/>
                            <Route path='/modify' element={<ModifyUser pState={this.props.pState}/>}/>
                            <Route path='/userlogout' element={<Logout pLogout={this.props.pLogout}/>}/>
                        </Routes>
                    </Router></div>)
        }
        return (
            <div><Router>
                <RegisterBar/>
                <Routes>
                    {/*<Route exact path='/' element={<Authorization makeAuthorized={this.props.pMakeAuthorized}/>}/>*/}
                    <Route path='/registration'
                           element={<Registration pState={this.props.pState}/>}/>
                    <Route path='/authorization'
                           element={<Authorization makeAuthorized={this.props.pMakeAuthorized}/>}/>} />
                    {/*<Route path='/registration' element={<Registration/>} />*/}
                </Routes>
            </Router></div>)

    }
}

export default RouteComponents;
