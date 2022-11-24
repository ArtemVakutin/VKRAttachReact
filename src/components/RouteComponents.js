import React from 'react';
import axios from "axios";
import NavBar from "./navbar";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Blogs from "./pages/blogs";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterBar from "./registerbar";
import Authorization from "./authorization/Authorization";
import Registration from "./authorization/Registration";


class RouteComponents extends React.Component{

    constructor(props) {
        super(props);
    }




    render() {
        // console.log("массив юзверей")
        // console.log("App userAuthorized: " + this.state.userAuthorized);
        //
        //
        // console.log("App faculties: " + this.state.faculties.length + this.state.faculties)
        if (this.props.pUserAuthorized) {
            return (
                <Router>
                    <NavBar/>
                    <Routes>
                        {/*<Route exact path='/' exact element={<Home />} />*/}
                        <Route path='/about' element={<About/>}/>
                        <Route path='/blogs' element={<Blogs/>}/>
                        <Route path='/sign-up' element={<SignUp/>}/>
                    </Routes>
                </Router>)
        }
        return (
            <Router>
                <RegisterBar/>
                <Routes>
                    {/*<Route exact path='/' element={<Authorization makeAuthorized={this.props.pMakeAuthorized}/>}/>*/}
                    <Route path='/registration' element={<Registration pYears={this.props.pYears} pFaculties = {this.props.pFaculties}/>}/>
                    <Route path='/authorization' element={<Authorization makeAuthorized={this.props.pMakeAuthorized}/>}/>} />
                    {/*<Route path='/registration' element={<Registration/>} />*/}
                </Routes>
            </Router>)

    }
}

export default RouteComponents;
