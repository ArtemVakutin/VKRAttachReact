import React from 'react';
import axios from "axios";
import RouteComponents from "./RouteComponents";

const GETUSER_URL = process.env.REACT_APP_GETUSER_URL;
const FACULTIES_URL = process.env.REACT_APP_FACULTIES_URL;
const YEARS_URL = process.env.REACT_APP_YEAROFRECRUITMENT_URL;
const DEPARTMENTS_URL = process.env.REACT_APP_DEPARTMENTS_URL
const GETORDERS_URL = process.env.REACT_APP_GETORDERS_URL
axios.defaults.withCredentials = true;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userAuthorized: false,
            faculties: [],
            yearOfRecruitment: [],
            departments: [],
            orders: []
        }

        this.getUser = this.getUser.bind(this);
        this.makeAuthorized = this.makeAuthorized.bind(this);
        this.getFaculties = this.getFaculties.bind(this);
        this.getYearOfRecruitment = this.getYearOfRecruitment.bind(this);
        this.getDepartments = this.getDepartments.bind(this);
        this.getOrders = this.getOrders.bind(this);
        this.makeLogout = this.makeLogout.bind(this);
    }

    componentDidMount() {
        this.getFaculties();
        this.getUser();
        this.getYearOfRecruitment();
        this.getDepartments();
            }


    render() {

        if (this.state.faculties.size > 0 && this.state.yearOfRecruitment.size > 0)
           {return (<div>
                <RouteComponents pFaculties={this.state.faculties} pMakeAuthorized={this.makeAuthorized}
                                 pUserAuthorized={this.state.userAuthorized} pYears={this.state.yearOfRecruitment}
                                    pState={this.state} pGetOrders={this.getOrders} pLogout={this.makeLogout}/>
            </div>)}


        return (<p></p>)
        // console.log("массив юзверей")


    }

    makeAuthorized(authorized) {
        this.getUser();
    }

    makeLogout(){
        this.setState({
            user: [],
            userAuthorized: false,
           })
    }


    async getUser() {

        await axios.get(GETUSER_URL).then((res) => {
            console.log(res.data)
            const map = new Map(Object.entries(res.data));
            this.setState({userAuthorized: true});
            this.setState({user: map});
            this.getOrders();
                    }).catch(err=>{
            if(err.response){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                this.setState({userAuthorized: false});
                this.setState({user: null});
            }
            if(err.request){
                console.log("SERVER IS NOT AVAILABLE")
            }
        })
        console.log("user authorized is : " + this.state.userAuthorized + "user is : " + this.state.user);
    }

    async getYearOfRecruitment() {
        try {
            const response = await axios.get(YEARS_URL);
            const map = new Map(Object.entries(response.data));
            console.log(map);
            this.setState({yearOfRecruitment: map})
        } catch (e) {
            console.log(e);
        }
    }

    async getFaculties() {
        try {
            const response = await axios.get(FACULTIES_URL);
            const map = new Map(Object.entries(response.data));
            this.setState({faculties: map})
        } catch (e) {
            console.log(e);
        }
    }

    async getDepartments(){
        try {
            const response = await axios.get(DEPARTMENTS_URL);
            const map = new Map(Object.entries(response.data));
            this.setState({departments: map})
        } catch (e) {
            console.log(e);
        }
    }

    async getOrders(){
        try {
            const response = await axios.get(GETORDERS_URL);
            const map = new Map(Object.entries(response.data));
            await this.setState({orders: map});
        } catch (e) {
            console.log(e);
        }
        console.log("-----------------");
        console.log(this.state.orders);
    }
}


export default App