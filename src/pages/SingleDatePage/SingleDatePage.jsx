import React, { useState } from 'react'
import axios from "axios"

const SingleDatePage = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // The month index starts from 0
    const year = date.getFullYear();
    const formetDate = `${day}-${month}-${year}`;
    // const [currentDate, setCurrentDate] = useState(formetDate);
    const [workoutData, setWorkoutData] = useState(null);
    const baseApiUrl = import.meta.env.VITE_API_URL;

    const handelDateChange = async (event) => {
        const date = new Date(event.target.value);
        const day = date.getDate();
        const month = date.getMonth() + 1; // The month index starts from 0
        const year = date.getFullYear();
        const formetDate = `${day}-${month}-${year}`;
        console.log(formetDate)
        try {
            const response = await axios.get(`${baseApiUrl}/workout/${formetDate}`);
            setWorkoutData(response.data)
        } catch (error) {
            console.error("Error getting single date data:", error)
        }
    }
    console.log(workoutData)
    return (
        <div>
            <input type="datetime-local" className="type" name='inputDate'
                onChange={handelDateChange} />
            <div>
                <h2>{workoutData[0].workout[0].exercise}</h2>
                {/* <p>{workoutData.exercise}</p> */}
            </div>
        </div>
    )
}

export default SingleDatePage
