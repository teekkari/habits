import React from 'react';

class Habit extends React.Component {

    constructor(props) {
        super(props);

        const _title = this.props.title;
        const _description = this.props.description;

        this.state = {
            title : _title ? _title : "",
            description : _description ? _description : "",
        }
    }

    render() {
        return (
            <div className="habit">
                <h5>{this.state.title}</h5>
                <p>{this.state.description}</p>
            </div>
        );

    }
}

export default Habit;