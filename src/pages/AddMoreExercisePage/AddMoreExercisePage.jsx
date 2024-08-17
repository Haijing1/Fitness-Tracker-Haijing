// import "./AddExercisePage.scss"

import { useNavigate, useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";

function AddExercise() {
    const navigate = useNavigate();
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const { dateId } = useParams();

    const categories = ["Pull up", "Rolling", "Chest press", "Shoulder press", "Pull down", , "Pull over", "High row", "Dumbbell fly"];

    const handleSubmit = async (event) => {
        event.preventDefault();
        const requestBody = {
            "date": `${dateId}`,
            "exercise": event.target.exerciseName.value,
            "setNumber": event.target.set.value,
            "weight": event.target.weight.value,
            "reps": event.target.reps.value,
            "rest": event.target.rest.value,
            "note": event.target.note.value,
        }

        try {
            const resp = await axios.post(`${baseApiUrl}/api/${dateId}/workout`, requestBody);
            console.log(resp);
            navigate(`/${dateId}`);
        } catch (error) {
            console.log('Error :', error);
        }

    };

    return (
        <section className="add-exercise">
            <form className="add-exercise__form" onSubmit={handleSubmit}>
                <select
                    id="exerciseName"
                    name="exerciseName"
                    className="add-exercise__name">
                    {categories && categories?.map((category) => (
                        <option
                            className="custom-select-option"
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
                <div className="add-exercise__list">
                    <div className="add-exercise__item">
                        <label className="add-exercise__label" htmlFor="Set">Set</label>
                        <input
                            type="text"
                            id="set"
                            name="set"
                            placeholder=""
                            className="add-exercise__input"
                        ></input>
                    </div>
                    <div className="add-exercise__item">
                        <label className="add-exercise__label" htmlFor="Weight">Weight (lb)</label>
                        <input
                            type="text"
                            id="weight"
                            name="weight"
                            placeholder=""
                            className="add-exercise__input"
                        ></input>
                    </div>
                    <div className="add-exercise__item">
                        <label className="add-exercise__label" htmlFor="Reps">Reps</label>
                        <input
                            type="text"
                            id="reps"
                            name="reps"
                            placeholder=""
                            className="add-exercise__input"
                        ></input>
                    </div>
                    <div className="add-exercise__item">
                        <label className="add-exercise__label" htmlFor="Rest">Rest</label>
                        <input
                            type="text"
                            id="rest"
                            name="rest"
                            placeholder=""
                            className="add-exercise__input"
                        ></input>
                    </div>
                    <div className="add-exercise__item">
                        <label className="add-exercise__label" htmlFor="Note">Note</label>
                        <input
                            type="text"
                            id="note"
                            name="note"
                            placeholder=""
                            className="add-exercise__input"
                        ></input>
                    </div>
                </div>
                <div className="">
                    {/* <Button
                        type="button"
                        className="add-inventory__cancel-button"
                        icon=""
                        onClick={handleCancel}
                        text="Cancel"
                    /> */}
                    <button className="add-exercise__button" type='submit' >Save</button>
                </div>
            </form>
            <div className="footer">
                <Link to={`/${dateId}`}>
                    <img src={backIcon} alt="Back Icon" className="backIcon" />
                    {/* <button className="add-button">+</button> */}
                </Link>
            </div>
        </section>
    );
}

export default AddExercise;