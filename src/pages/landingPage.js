import React from "react";
import Header from "../components/Layouts/Header";
import MealsList from "../components/Meals/MealsList";
import "./landingPage.css"
import CartModel from "../components/Cart/CartModel";

const LandingPage = () => {
    return(
        <React.Fragment>
            <div className="">
                <div className="row">
                     <div className=" header" > <Header></Header></div>
                    <div className=" mealList"> <MealsList></MealsList></div> 
                    <div className=" CartModel"> <CartModel></CartModel></div> 
                    
                </div>
            </div>
           
           
        </React.Fragment>
    )
}

export default LandingPage;