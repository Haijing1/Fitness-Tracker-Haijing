import "../AddExercisePage/AddExercisePage.scss"

import { useNavigate, useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import backIcon from "../../assets/icons/arrow_back-24px.png";
import axios from "axios";


function AddSet() {
    const navigate = useNavigate();
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const { dateId, exerciseId, date, exerciseName } = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const requestBody = {
            "dateId": dateId,
            "exerciseId": exerciseId,
            "setNumber": event.target.set.value,
            "weight": event.target.weight.value,
            "reps": event.target.reps.value,
            "rest": event.target.rest.value,
            "note": event.target.note.value,
        }

        try {
            const resp = await axios.post(`${baseApiUrl}/api/addset`, requestBody);
            navigate(`/${date}`);
        } catch (error) {
            console.log('Error :', error);
        }

    };

    return (
        <section className="add-exercise">
            <Header dateId={date} />
            <form className="add-exercise__form" onSubmit={handleSubmit}>
                <div className="add-exercise__inputs">
                    <h2 className="exercise__name">{exerciseName}</h2>
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
                            <label className="add-exercise__label" htmlFor="Rest">Rest (sec)</label>
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
                    <div className="add-exercise__btn-area">
                        <button className="add-exercise__button" type='submit' >Save</button>
                    </div>
                </div>
            </form>
            <div className="footer">
                <Link to={`/${date}`}>
                    <img src={backIcon} alt="Back Icon" className="backIcon" />
                </Link>
            </div>
        </section>
    );
}

export default AddSet;
