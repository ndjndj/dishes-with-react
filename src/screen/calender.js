import React from 'react';
import Menu from '../components/menu';
class Calender extends React.Component {
    render() {
        const createArrDays = (ymd) => {
            // 月の日数を取得
            let daysCount = new Date(ymd.getFullYear(), ymd.getMonth(), 0).getDate();
            // 1日から月末日の配列を生成
            let arrDays = [...Array(daysCount).keys()].map((_, i) => ++i);
            return arrDays;
        }

        const calcWeekNumber = (day) => {
            let weekNumber = day % 7 == 0 ? day / 7 : day % 7;
            return weekNumber;
        }

        const createCalender = (ymd) => {
            const arrDays = createArrDays(ymd);
            const jsx = arrDays.map((v) =>{return<div className="day">{v}</div>});
            return jsx;
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
