import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from "axios"
import "./SingleDatePage.scss";
function SingleDatePage() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // The month index starts from 0
    const year = date.getFullYear();
    const formetDate = `${day}-${month}-${year}`;
    const [currentDate, setCurrentDate] = useState(formetDate);
    const [workoutData, setWorkoutData] = useState(null);
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const { dateId } = useParams();
    console.log(dateId)
    const handelDateChange = async (event) => {
        const date = new Date(event.target.value);
        const day = date.getDate();
        const month = date.getMonth() + 1; // The month index starts from 0
        const year = date.getFullYear();
        const inputDate = `${day}-${month}-${year}`;
        console.log(inputDate)
        try {
            const response = await axios.get(`${baseApiUrl}/workout/${inputDate}`);
            setWorkoutData(response.data)
        } catch (error) {
            console.error("Error getting single date data:", error)
        }
    }
    // const workoutData = [{
    //     "id": "7eb112d7-37e0-4ef6-b96c-9612559e039a",
    //     "timeStamp": "2024-08-15T23:29:27.482Z",
    //     "date": "15-8-2024",
    //     "workout": [
    //         {
    //             "id": "504a2f50-8ec5-41a8-9b2c-ced228791c21",
    //             "exercise": "1",
    //             "sets": [
    //                 {
    //                     "id": "71db1fea-59d3-4eb2-99e2-aeac01380d8a",
    //                     "setNumber": "1",
    //                     "reps": "d",
    //                     "weight": "s",
    //                     "rest": "f",
    //                     "note": "f"
    //                 }
    //             ]
    //         }
    //     ]
    // }]
    // useEffect(() => {
    //     async function getSingleDate(id) {
    //         try {
    //             const response = await axios.get(`${baseApiUrl}/workout/${id}`);
    //             console.log(response.data)
    //             setWorkoutData(response.data)
    //         } catch (error) {
    //             console.error("Error getting single date data:", error)
    //         }
    //     }
    //     getSingleDate(formetDate)
    // }, []);

    console.log(dateId)
    console.log(workoutData)

    return (
        <div>
            <input type="datetime-local" className="type" name='inputDate'
                onChange={handelDateChange} />
            <div>
                <h2 className="exercise-name">{workoutData[0].workout[0].exercise}</h2>
                <div className="keys">
                    <p>Set</p>
                    <p>Weight (lb)</p>
                    <p>Reps</p>
                    <p>Rest</p>
                    <p>Note</p>
                </div>
                {workoutData[0].workout[0].sets.map((exercise) => {
                    return (
                        <div className="single-exercise">
                            <p className="">{exercise.setNumber}</p>
                            <p>{exercise.reps}</p>
                            <p>{exercise.weight}</p>
                            <p>{exercise.rest}</p>
                            <p>{exercise.note}</p>
                        </div>
                    )
                })}
            </div>
            <div className="footer">
                <Link to={`/add-exercise`}>
                    <button className="add-button">+</button>
                </Link>
            </div>
        </div>
    )
}

export default SingleDatePage
