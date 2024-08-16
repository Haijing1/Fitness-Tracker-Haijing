import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
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
    const { dateId } = useParams();

    // const handelDateChange = async (event) => {
    //     const date = new Date(event.target.value);
    //     const day = date.getDate();
    //     const month = date.getMonth() + 1; // The month index starts from 0
    //     const year = date.getFullYear();
    //     const formetDate = `${day}-${month}-${year}`;
    //     console.log(formetDate)
    //     try {
    //         const response = await axios.get(`${baseApiUrl}/workout/${formetDate}`);
    //         setWorkoutData(response.data)
    //     } catch (error) {
    //         console.error("Error getting single date data:", error)
    //     }
    // }

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
    useEffect(() => {
        async function getSingleDate(id) {
            try {
                const response = await axios.get(`${baseApiUrl}/workout/${dateId}`);
                setWorkoutData(response.data)
            } catch (error) {
                console.error("Error getting single date data:", error)
            }
        }
        if (dateId) {
            getSingleDate(dateId)
        } else {
            //   getSingleVideoData(defaultId)
        }
    }, [dateId]);

    // console.log(workoutData)

    return (
        <div>
            <input type="datetime-local" className="type" name='inputDate' />
            {/* onChange={handelDateChange} /> */}
            <div>
                <h2>{workoutData[0].workout[0].exercise}</h2>
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


        </div>
    )
}

export default SingleDatePage
