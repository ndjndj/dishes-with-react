import React from 'react';
import Menu from '../components/menu';
import Header from '../compoents/header';
class Calender extends React.Component {
    render() {
        const createArrDays = (ymd) => {
            // 月の日数を取得
            let daysCount = new Date(ymd.getFullYear(), ymd.getMonth(), 0).getDate();
            // 月の初日をDate 型で取得
            let thisMonth = new Date(ymd.getFullYear(), ymd.getMonth() + 1, 1);
            // 1日から月末日の配列を生成
            let arrDays = [...Array(daysCount).keys()].map(
                (_, i) => new Date(new Date().setDate(thisMonth.getDate() + i))
            );
            return arrDays;
        }

        const calcWeekNumber = (ymd) => {
            let weekNumber = Math.floor((ymd.getDate() - ymd.getDay() + 12) / 7);
            return weekNumber;
        }

        const createCalender = (ymd) => {
            const arrDays = createArrDays(ymd);
            const jsx = arrDays.map(
                (v) =>{return<div className={"day " + `week${calcWeekNumber(v)}`}>{v.getDate()}</div>}
            );
            return jsx;
        }

        const ymd = new Date();

        return (
            <React.Fragment>
                <Header />
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
