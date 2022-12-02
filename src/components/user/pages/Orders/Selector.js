import React from 'react';

class Selector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let content = [];
        const map = this.props.pValues;
        for (const mapElement of map.keys()) {
            content.push(<option value={mapElement} key={mapElement}>{map.get(mapElement)}</option>)
        }
        return (
            <select value={this.props.pDefaultValue} onChange={event => this.props.pSetValue(event.target.value)}>
                <option defaultValue="" key="none">Выберите значение</option>
                {content}
            </select>
        )
    }
}

export default Selector;