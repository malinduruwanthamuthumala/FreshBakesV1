import React from "react";
import Header from "../components/Layouts/Header";
import MealsList from "../components/Meals/MealsList";
import "./landingPage.css"
import CartModel from "../components/Cart/CartModel";
import CardProvider from "../store/CartProvider";
const LandingPage = () => {

    const [isCartHidden,setIsCardHidden] = React.useState(true);

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      

    const showCartHandler = (event) =>{
        scrollToTop();
        setIsCardHidden(false);
    }

    const hideCartHandler = () => {
        setIsCardHidden(true);
    }
    return(
        <CardProvider>
            <div className="">
                <div className="row">
                     <div className=" header" > <Header></Header></div>
                     {!isCartHidden && <div className=" CartModel"> <CartModel isHidden={isCartHidden} hideCartHandler={hideCartHandler}></CartModel></div> }
                    <div className=" mealList" > <MealsList onShowCartHandler={showCartHandler}></MealsList></div>                   
                </div>
            </div>
           
           
        </CardProvider>
    )
}

export default LandingPage;