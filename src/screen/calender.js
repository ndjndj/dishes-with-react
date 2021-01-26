import React from 'react';
import Menu from '../components/menu';
class Calender extends React.Component {
    render() {
        const createCalender = (ymd) => {
            // 月の日数を取得
            let daysCount = new Date(ymd.getFullYear(), ymd.getMonth(), 0).getDate();
            // 1日から月末日の配列を生成
            let arrDays = [...Array(daysCount).keys()].map((_, i) => ++i);
            console.log(arrDays);


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
