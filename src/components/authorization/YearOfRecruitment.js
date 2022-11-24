import React from 'react';

class YearOfRecruitment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            years: this.props.pYears,
            year: ""
        }
        this.ifSelect.bind(this);
    }

    async ifSelect(event) {
        await this.setState({year: event.target.value});
        // console.log(this.state.faculty);
        this.props.IfChanged(this.state.year);
    }


    render() {
        // console.log("PROPS :" + this.props.pFaculties);
        // console.log("state :" + this.state.faculties);
        let content = [];
        const map = this.state.years;
        for (const mapElement of map) {
            content.push(<option value={mapElement} key={mapElement}>{mapElement}</option>)
        }
        return (
            <select ref={el => this.mySelect = el} onChange={event => this.ifSelect(event)}>
                <option defaultValue="" key="none">Выберите год набора</option>
                {content}
            </select>
        )
    }
}

export default YearOfRecruitment;