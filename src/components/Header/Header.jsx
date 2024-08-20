import "./Header.scss";
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios"

function Header(props) {
  const [workoutData, setWorkoutData] = useState(null);
  const [dateList, setDateList] = useState(null);
  const [newDate, setNewDate] = useState(null);
  const baseApiUrl = import.meta.env.VITE_API_URL;

  function getNewDate() {
    let today = new Date();
    let newDD = today.getDate();
    let newMM = today.getMonth() + 1;
    let newYY = today.getFullYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return {
      mm: months[newMM - 1],
      dd: newDD,
      date: `${newDD}-${newMM}-${newYY}`
    }
  }

  function getMonthAndDay(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [day, month, year] = date.split('-');
    const monthIndex = parseInt(month) - 1;
    const mm = months[monthIndex];
    const dd = day;
    return {
      month: mm,
      day: dd
    };
  }

  useEffect(() => {
    async function getAllDate() {
      try {
        const response = await axios.get(`${baseApiUrl}/api`);
        setWorkoutData(response.data);
      } catch (error) {
        console.error("Error getting single date data:", error);
      }
    }
    getAllDate();
  }, []);

  const checkCurrentDateInData = () => {
    const currentDateInfo = getNewDate();
    const foundDate = workoutData.find(workout => workout.date === currentDateInfo.mm);

    if (!foundDate) {
      return currentDateInfo;
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (workoutData !== null) {
      const data = checkCurrentDateInData();
      setNewDate(data);

      let dateAndTimeStamps = workoutData.map(item => {
        const result = getMonthAndDay(item.date);
        return {
          id: item.id,
          date: item.date,
          timeStamp: item.timeStamp,
          dd: result.day,
          mm: result.month
        };
      });
      setDateList(dateAndTimeStamps);
    }
  }, [workoutData]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate) {
      const [year, month, day] = selectedDate.split("-");
      const inputDate = `${parseInt(day)}-${parseInt(month)}-${year}`;
      navigate(`/${inputDate}`);
    }
  };

  return (
    <header className="header">
      <h1 className="page__title">Daily Workout Tracker</h1>
      {/* <input type="date" className="type" name="inputDate" onChange={handleChange} /> */}
      <div className="date__list">
        {dateList === null ? null :
          dateList.map((item) => {
            const isActive = item.date === props.dateId ? 'date__item--active' : '';
            return (
              <div className={`date__item ${isActive}`} key={item.id}>
                {/* <div className="date__item" key={item.id}> */}
                <Link to={`/${item.date}`} >
                  <h2 className="date__month" >{item.mm}</h2>
                  <h3 className="date__date">{item.dd}</h3>
                </Link>
              </div>
            );
          })
        }
        {newDate === null ? null :
          <div className={`date__item ${!props.dateId ? 'date__item--active' : ''}`}>
            <Link to={`/${newDate.date}`} >
              {/* <h3 className="date__date">Today</h3> */}
              <h2 className="date__month">{newDate.mm}</h2>
              <h3 className="date__date">{newDate.dd}</h3>
            </Link>
          </div>
        }
      </div>
    </header>
  );
}

export default Header;
