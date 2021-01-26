import React from 'react';
import Menu from '../components/menu';
class Calender extends React.Component {
    render() {
        const createCalender = (ymd) => {
            // get month
            let daysCount = new Date(ymd.getFullYear(), ymd.getMonth(), 0).getDate();
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
