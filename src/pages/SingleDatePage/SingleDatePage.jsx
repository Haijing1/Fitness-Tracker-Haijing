import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from "axios"
import Header from "../../components/Header/Header";
import EmptyPage from "../../components/EmptyPage/EmptyPage";
import "./SingleDatePage.scss";
function SingleDatePage() {
    const [workoutData, setWorkoutData] = useState(null);
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const { dateId } = useParams();

    useEffect(() => {
        async function getSingleDate(id) {
            try {
                const response = await axios.get(`${baseApiUrl}/api/${id}`);
                setWorkoutData(response.data)
            } catch (error) {
                console.error("Error getting single date data:", error)
            }
        }
        getSingleDate(dateId)
    }, [dateId]);

    const getCurrentDate = () => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        return `${day}-${month}-${year}`;
    };
    // const linkTo = dateId ? `/add-exercise/${dateId}` : `/add-exercise/${getCurrentDate()}`;
    const linkTo = dateId ? `/add-exercise/${dateId}` : `/add-exercise/`;


    return (
        <div>
            <Header dateId={dateId} />
            {Array.isArray(workoutData) && workoutData.length === 0 && <EmptyPage />}

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
                                            <p className="exercise__single-key--longer">Weight (lb)</p>
                                            <p className="exercise__single-key">Reps</p>
                                            <p className="exercise__single-key--longer">Rest (sec)</p>
                                            <p className="exercise__single-key, exercise__single-key--note">Note</p>
                                        </div>
                                        <div className="exercise__sets">
                                            {workout.sets.map((exercise) => {
                                                return (
                                                    <div className="exercise__values" key={exercise.id}>
                                                        <p className="exercise__single-value">{exercise.setNumber}</p>
                                                        <p className="exercise__single-value exercise__single-value--longer">{exercise.weight}</p>
                                                        <p className="exercise__single-value">{exercise.reps}</p>
                                                        <p className="exercise__single-value exercise__single-value--longer">{exercise.rest}</p>
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
                        <Link to={linkTo}>
                            <button className="add-button">+</button>
                        </Link>
                    </div>
                </div>
            }</div >
    )
}

export default SingleDatePage
