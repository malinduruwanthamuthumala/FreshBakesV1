import React from "react";
import Card from "../Layouts/Card";
import "./common.css";
import image1 from "../../assets/chickenparmasen.jpg";
import image2 from "../../assets/beef.jpg";
import image3 from "../../assets/veg.jpg";
import image4 from "../../assets/fish.jpg";
import image5 from "../../assets/cab.jpg";
import image6 from "../../assets/pizza.jpg";
import image7 from "../../assets/bbbq.jpg";
import image8 from "../../assets/shrim.jpg";
import image9 from "../../assets/chicken.jpg";

const DUMMY_MEALS = [
    {
      id: 1,
      name: "Chicken Parmesan",
      description: "Breaded chicken topped with marinara sauce and melted cheese.",
      prices: [12.99, 15.99],
      ingredients: ["Chicken breast", "Bread crumbs", "Marinara sauce", "Cheese"],
      src:image1,
    
    },
    {
      id: 2,
      name: "Beef Tacos",
      description: "Soft corn tortillas filled with seasoned ground beef, lettuce, and cheese.",
      prices: [8.99, 10.99],
      ingredients: ["Ground beef", "Corn tortillas", "Lettuce", "Cheese"],
      src:image2,
    },
    {
      id: 3,
      name: "Vegetable Stir-Fry",
      description: "Fresh vegetables sautéed in a flavorful sauce, served over rice.",
      prices: [9.99, 12.99],
      ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce"],
      src:image3
    },
    {
      id: 4,
      name: "Salmon with Lemon Dill Sauce",
      description: "Grilled salmon fillet topped with a tangy lemon dill sauce.",
      prices: [14.99, 17.99],
      ingredients: ["Salmon fillet", "Lemon", "Dill", "Olive oil"],
      src:image4
    },
    {
      id: 5,
      name: "Pasta Carbonara",
      description: "Spaghetti tossed in a creamy sauce with bacon and Parmesan cheese.",
      prices: [11.99, 14.99],
      ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan cheese"],
      src:image5
    },
    {
      id: 6,
      name: "Margherita Pizza",
      description: "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
      prices: [10.99, 13.99],
      ingredients: ["Pizza dough", "Mozzarella cheese", "Tomatoes", "Basil"],
      src:image6
    },
    {
      id: 7,
      name: "BBQ Ribs",
      description: "Slow-cooked ribs glazed with smoky barbecue sauce.",
      prices: [16.99, 19.99],
      ingredients: ["Pork ribs", "Barbecue sauce", "Spices"],
      src:image7
    },
    {
      id: 8,
      name: "Shrimp Scampi",
      description: "Garlic butter shrimp served over linguine pasta.",
      prices: [13.99, 16.99],
      ingredients: ["Shrimp", "Garlic", "Butter", "Linguine"],
      src:image8
    },
    {
      id: 9,
      name: "Chicken Caesar Salad",
      description: "Grilled chicken, romaine lettuce, croutons, and Parmesan cheese tossed in Caesar dressing.",
      prices: [9.99, 12.99],
      ingredients: ["Grilled chicken", "Romaine lettuce", "Croutons", "Caesar"],
    src:image9}]
 

const AvailableMeals = (props) => {
  const onShowCartHandler = (event) => {
    props.onShowCartHandler()
  }

    const mealsList= DUMMY_MEALS.map(meals => {
        return (<div className="col-md-3 card_meal"><Card key={meals.id} src={meals.src} prices={meals.prices} name={meals.name} description={meals.description} incredients={meals.ingredients} onShowCartHandler={onShowCartHandler}></Card></div>);
    })
    return(
        <React.Fragment>
            <div className="row container-fluid">
                {mealsList}
                
            </div>
        </React.Fragment>
    );
}

export default AvailableMeals;