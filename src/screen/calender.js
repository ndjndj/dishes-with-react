import React from 'react';
import Menu from '../components/menu';
class Calender extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className = "calender">
                    this component is Calender.
                </div>
                <Menu />
            </React.Fragment>
        );
    }
}

export default Calender;
