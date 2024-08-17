import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from "axios"
import "./SingleDatePage.scss";
function SingleDatePage() {
    const [workoutData, setWorkoutData] = useState(null);
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const { dateId } = useParams();

    useEffect(() => {
        async function getSingleDate(id) {
            try {
                const response = await axios.get(`${baseApiUrl}/api/${id}`);
                console.log(response.data)
                setWorkoutData(response.data)
            } catch (error) {
                console.error("Error getting single date data:", error)
            }
        }
        getSingleDate(dateId)
    }, []);

    // const handelDateChange = async (event) => {
    //     const date = new Date(event.target.value);
    //     const day = date.getDate();
    //     const month = date.getMonth() + 1; // The month index starts from 0
    //     const year = date.getFullYear();
    //     const inputDate = `${day}-${month}-${year}`;
    //     console.log(inputDate)
    //     try {
    //         const response = await axios.get(`${baseApiUrl}/workout/${inputDate}`);
    //         setWorkoutData(response.data)
    //     } catch (error) {
    //         console.error("Error getting single date data:", error)
    //     }
    // }


    return (
        <div>
            {/* <input type="datetime-local" className="type" name='inputDate'
                onChange={handelDateChange} /> */}

            {workoutData === null ? null :
                <div>

                    {workoutData.map((data) => {
                        return data.workout.map((workout) => {
                            return (
                                <div key={workout.id}>
                                    <h2 className="exercise-name">
                                        {workout.exercise}
                                    </h2>
                                    <Link to={`/add-set/${workoutData[0].id}/${workout.id}/${workoutData[0].date}/${workout.exercise}`} >
                                        <button className="add-set--button">+ Set</button>
                                    </Link>
                                    <div className="keys">
                                        <p>Set</p>
                                        <p>Weight (lb)</p>
                                        <p>Reps</p>
                                        <p>Rest</p>
                                        <p>Note</p>
                                    </div>
                                    {workout.sets.map((exercise) => {
                                        return (
                                            <div className="single-exercise" key={exercise.id}>
                                                <p className="">{exercise.setNumber}</p>
                                                <p>{exercise.reps}</p>
                                                <p>{exercise.weight}</p>
                                                <p>{exercise.rest}</p>
                                                <p>{exercise.note}</p>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    })}
                    <div className="footer">
                        <Link to={`/add-exercise/${dateId}`}>
                            <button className="add-button">+</button>
                        </Link>
                    </div>
                </div>
            }</div >
    )
}

export default SingleDatePage
