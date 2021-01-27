import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import '../styles/calender.css';
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
            //週番号に変換
            let weekNumber = Math.floor((ymd.getDate() - ymd.getDay() + 12) / 7);
            return weekNumber;
        }

        const createCalender = (ymd) => {
            //日付の配列を取得
            const arrDays = createArrDays(ymd);
            //JSXを作成
            const jsx = arrDays.map(
                (v) =>{return<div className={"day " + `week${calcWeekNumber(v)}`} key={v}>{v.getDate()}</div>}
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
