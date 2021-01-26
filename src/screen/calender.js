import React from 'react';
import Menu from '../components/menu';
class Calender extends React.Component {
    render() {
        const createCalender = (ymd) => {
            // get month
            let today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth();
            let daysCount = new Date(year, month, 0).getDate();
            // create array with this month
            return <div>{daysCount}</div>;
        }

        const ymd = new Date();

        return (
            <React.Fragment>
                <div className = "calender">
                    {
                        createCalender(ymd)
                    }
                </div>
                <Menu />
            </React.Fragment>
        );
    }
}

export default Calender;
