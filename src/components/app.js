import React from 'react';
import axios from "axios";
import RouteComponents from "./RouteComponents";

const IS_AUTHORISED_URL = process.env.REACT_APP_IS_AUTHORISED_URL;
const FACULTIES_URL = process.env.REACT_APP_FACULTIES_URL;
const YEARS_URL = process.env.REACT_APP_YEAROFRECRUITMENT_URL;
axios.defaults.withCredentials = true;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            userAuthorized: false,
            faculties: [],
            yearOfRecruitment: []
        }

        this.checkAuthorization = this.checkAuthorization.bind(this);
        this.makeAuthorized = this.makeAuthorized.bind(this);
        this.getFaculties = this.getFaculties.bind(this);
        this.getYearOfRecruitment = this.getYearOfRecruitment.bind(this);
        // this.checkAuthorization()
    }

    componentDidMount() {
        this.getFaculties();
        this.checkAuthorization();
        this.getYearOfRecruitment();
    }


    render() {

        if (this.state.faculties.size > 0 && this.state.yearOfRecruitment.length > 0)
           {return (<div>
                <RouteComponents pFaculties={this.state.faculties} pMakeAuthorized={this.makeAuthorized}
                                 pUserAuthorized={this.state.userAuthorized} pYears={this.state.yearOfRecruitment}/>
            </div>)}


        return (<p></p>)
        // console.log("массив юзверей")


    }

    makeAuthorized(authorized) {
        if (authorized) {
            this.setState({userAuthorized: true});
        } else this.setState({userAuthorized: false})
    }


    checkAuthorization() {

        axios.get(IS_AUTHORISED_URL).then((res) => {
            console.log(res.data)
            if (res.data.userAuthorized) {
                this.setState({userAuthorized: true});
            } else {
                this.setState({userAuthorized: false});
            }
        })
    }

    async getYearOfRecruitment() {
        try {
            const response = await axios.get(YEARS_URL);
            const map = response.data.years;
            console.log(map);
            this.setState({yearOfRecruitment: map})
        } catch (e) {
            console.log(e);
        }
    }


    async getFaculties() {
        try {
            const response = await axios.get(FACULTIES_URL);
            const map = new Map(Object.entries(response.data.faculties));
            this.setState({faculties: map})
        } catch (e) {
            console.log(e);
        }

    }

}


export default App