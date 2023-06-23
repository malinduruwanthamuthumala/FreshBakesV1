import React from "react";
import Header from "../components/Layouts/Header";
import MealsList from "../components/Meals/MealsList";
import "./landingPage.css"

const LandingPage = () => {
    return(
        <React.Fragment>
            <div className="">
                <div className="row">
                    <div className=" header" > <Header></Header></div>
                    <div className=" mealList"> <MealsList></MealsList></div>
                </div>
            </div>
           
           
        </React.Fragment>
    )
}

export default LandingPage;