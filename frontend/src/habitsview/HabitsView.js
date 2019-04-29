import React from 'react';

class HabitsView extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            habits : [],
        }
    }

    listHabits = () => {
        let elems = [];
        for (let habit of this.state.habits) {
            elems += habit
        }

        return elems
    }


    render() {

        if (this.state.loading) return <div className="container">Loading ...</div>

        return (
            <div className="container" id="">
                <h3>List of habits</h3>
                {this.listHabits()}
            </div>
        );
    }

}

export default HabitsView;