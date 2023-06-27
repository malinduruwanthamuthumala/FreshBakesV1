import React from "react";
import AvailableMeals from "./AvailableMeals";

const MealsList = (props) => {

    const onShowCartHandler = () => {
     props.onShowCartHandler()
    }

    return(
        <React.Fragment>
            <AvailableMeals onShowCartHandler={onShowCartHandler}></AvailableMeals>
        </React.Fragment>
    );
}

export default MealsList;