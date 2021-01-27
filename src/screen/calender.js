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

        const createCalenderArray = (arrDays) => {
            let arrCalender = [];
            let arrWeek = [];
            let weekNumber;
            let nextWeekNumber = 1;

            arrDays.forEach((day, i) => {
                // 現在の週番号と次のインデックスの週番号を取得
                weekNumber = calcWeekNumber(day);
                nextWeekNumber = arrDays.length === i+1 ? -1 : calcWeekNumber(arrDays[i+1]);
                // 同じ週番号の配列を作成
                arrWeek.push(day);
                // カレンダー配列に週番号の配列を追加
                if(weekNumber !== nextWeekNumber || arrDays.length === i+1) {
                    arrCalender.push(arrWeek);
                    arrWeek = [];
                }
            });

            return arrCalender;
        }

        const createCalender = (ymd) => {
            //日付の配列を取得
            const arrDays = createArrDays(ymd);

            // カレンダー形式の二次元配列に変換
            let arrCalender =[];
            let arrWeek = [];
            let day;
            let weekNumber;
            let preWeekNumber = 1;
            for (var i = 0; i < arrDays.length; i++ ) {
                day = arrDays[i];
                weekNumber = calcWeekNumber(day);

                arrWeek = weekNumber === preWeekNumber ? arrWeek : [];

                arrWeek.push(day);

                if (weekNumber !== preWeekNumber) {
                    arrCalender.push(arrWeek);
                }

                preWeekNumber = Number(weekNumber);
            }

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
