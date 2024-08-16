import "./AddExercisePage.scss"

import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
// import Button from "../Button/Button";

function AddExercise({ inventoryList }) {
    const navigate = useNavigate();
    // const baseApiUrl = import.meta.env.VITE_API_URL;
    const baseApiUrl = import.meta.env.VITE_API_URL;

    //   const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //       const requestBody = {
    //         warehouse_id: inventoryList.find(
    //           (item) => item.warehouse_name === values.warehouseName
    //         ).warehouse_id,
    //         item_name: values.itemName,
    //         description: values.description,
    //         category: values.categoryType,
    //         status: values.selectedOption,
    //         quantity: values.selectedOption !== "In Stock" ? 0 : values.quantity,
    //       };
    //       console.log(baseApiUrl, requestBody);
    //       const response = await axios.post(
    //         `${baseApiUrl}/inventories`,
    //         requestBody
    //       );
    //       console.log("Response: ", response);
    //       if (response.status === 201) {
    //         alert(
    //           "Inventory item added successfully.\nNote: You will be redirected to the Inventory page."
    //         );
    //         navigate("/inventories");
    //       } else if (response.status === 400) {
    //         if (response.data.message) {
    //           alert(response.data.message);
    //         } else {
    //           alert("Please provide all information.");
    //         }
    //       } else {
    //         if (response.data.message) {
    //           alert(response.data.message);
    //         } else {
    //           alert("Something went wrong. Please try again.");
    //         }
    //       }
    //     } catch (error) {
    //       if (error.response.status === 400) {
    //         if (error.response.data.message) {
    //           alert(error.response.data.message);
    //         } else {
    //           alert("Please provide all information.");
    //         }
    //       } else {
    //         if (error.response.data.message) {
    //           alert(error.response.data.message);
    //         } else {
    //           alert("Error adding inventory.");
    //         }
    //       }
    //     }
    //   };

    //   const handleCancel = (e) => {
    //     e.preventDefault();
    //     const isCancel = window.confirm(
    //       "Are you sure you want to cancel?\nNote: You will be redirected to the inventory page."
    //     );
    //     if (isCancel) navigate("/inventories");
    //   };
    const categories = ["Pull up", "Rolling", "Chest press", "Shoulder press", "Pull down", , "Pull over", "High row", "Dumbbell fly"];

    const handleSubmit = async (event) => {
        event.preventDefault();
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1; // The month index starts from 0
        const year = date.getFullYear();
        const currentDate = `${day}-${month}-${year}`;
        // console.log(currentDate)
        const requestBody = {
            "date": ` ${currentDate}`,
            "exercise": event.target.exerciseName.value,
            "setNumber": event.target.set.value,
            "weight": event.target.weight.value,
            "reps": event.target.reps.value,
            "rest": event.target.rest.value,
            "note": event.target.note.value,
        }
        console.log(currentDate)
        // navigate("/date")
        navigate(`${currentDate}`);
        try {
            const resp = await axios.post(`${baseApiUrl}/workout`, requestBody);
            console.log(resp);
        } catch (error) {
            console.log('Error :', error);
        }

    };

    return (
        <section className="add-exercise">
            <form className="add-exercise__form" onSubmit={handleSubmit}>
                {/* <form className="add-exercise__form"> */}
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
                <div className="add-inventory__buttons">
                    {/* <Button
                        type="button"
                        className="add-inventory__cancel-button"
                        icon=""
                        onClick={handleCancel}
                        text="Cancel"
                    /> */}
                    <button className="" type='submit' >Save</button>
                    {/* text="+ Add Item" */}
                </div>
            </form>
        </section>
    );
}

export default AddExercise;
