import React from 'react';

class Faculty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            faculties: this.props.pFaculties,
            faculty: ""
        }
        this.ifSelect.bind(this);
    }

    async ifSelect(event) {
        await this.setState({faculty: event.target.value});
        // console.log(this.state.faculty);
        this.props.IfChanged(this.state.faculty);
    }


    render() {
        // console.log("PROPS :" + this.props.pFaculties);
        // console.log("state :" + this.state.faculties);
        let content = [];
        const map = this.state.faculties;
        for (const mapElement of map.keys()) {
            content.push(<option value={mapElement} key={mapElement}>{map.get(mapElement)}</option>)
        }
        return (
            <select ref={el => this.mySelect = el} onChange={event => this.ifSelect(event)}>
                <option defaultValue="" key="none">Выберите факультет</option>
                {content}
            </select>
        )
    }
}

export default Faculty;
