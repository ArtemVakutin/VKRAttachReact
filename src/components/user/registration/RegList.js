import React from 'react';

class RegList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.pElements,
            element: ""
        }
        this.ifSelect.bind(this);
    }

    async ifSelect(event) {
        await this.setState({element: event.target.value});
        this.props.IfChanged(this.state.element);
    }


    render() {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(this.props.pElements)
        let content = [];
        const map = this.state.elements;
        for (const mapElement of map.keys()) {
            content.push(<option value={mapElement} key={mapElement}>{map.get(mapElement)}</option>)
        }
        return (
            <select value={this.state.element} onChange={event => this.ifSelect(event)}>
                <option defaultValue="" key="none">Сделайте выбор</option>
                {content}
            </select>
        )
    }
}

export default RegList;
