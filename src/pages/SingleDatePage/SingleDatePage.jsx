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
                <div className="main">
                    <div >
                        {workoutData.map((data) => {
                            return data.workout.map((workout) => {
                                return (
                                    <div className="exercise__single" key={workout.id}>
                                        <div className="exercise__head-line">
                                            <h2 className="exercise__name">
                                                {workout.exercise}
                                            </h2>
                                            <Link to={`/add-set/${workoutData[0].id}/${workout.id}/${workoutData[0].date}/${workout.exercise}`} >
                                                <button className="add-set--button">+ Set</button>
                                            </Link>
                                        </div>

                                        <div className="exercise__keys">
                                            <p className="exercise__single-key">Set</p>
                                            <p className="exercise__single-key--weight">Weight (lb)</p>
                                            <p className="exercise__single-key">Reps</p>
                                            <p className="exercise__single-key">Rest</p>
                                            <p className="exercise__single-key, exercise__single-key--note">Note</p>
                                        </div>
                                        <div className="exercise__sets">
                                            {workout.sets.map((exercise) => {
                                                return (
                                                    <div className="exercise__values" key={exercise.id}>
                                                        <p className="exercise__single-value">{exercise.setNumber}</p>
                                                        <p className="exercise__single-value exercise__single-value--weight">{exercise.weight}</p>
                                                        <p className="exercise__single-value">{exercise.reps}</p>
                                                        <p className="exercise__single-value">{exercise.rest}</p>
                                                        <p className="exercise__single-value exercise__single-value--note">{exercise.note}</p>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>

                                    </div>
                                )
                            })
                        })}
                    </div>
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
