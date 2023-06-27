import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Card.css";
import MealAmountController from "../UI/MealAmountController";
import CartContext from "../../store/Cart-Context";

const Card = (props) => {

  const cart = React.useContext(CartContext);
 


  const  onShowCartHandler = (event) => {
    props.onShowCartHandler(event);
  }
  const MEDIUM = "medium";
  const LARGE = "large";
  const updateMealAmounts = (type, counter) => {
    switch (type) {
      case MEDIUM:
        setMediumAmount(counter);
        break;
      case LARGE:
        setLargeAmount(counter);
    }
  };

  let [mediumAmount, setMediumAmount] = React.useState(0);
  let [largeAmount, setLargeAmount] = React.useState(0);

  const onItemAddToShoppingCart = (event) => {
    if (mediumAmount > 0) {
      debugger;
      cart.addItem({
        id:Math.random().toString(),
        item: {
          name:props.name,
          prices:props.prices[0],
          src:props.src,
        },
        amount:mediumAmount,
        totalPrice:  mediumAmount*props.prices[0],
      })
    }
    
    if (largeAmount > 0){
      cart.addItem({
        id:Math.random().toString(),
        item: {
          name:props.name,
          prices:props.prices[1],
          src:props.src,
        },
        amount:largeAmount,
        totalPrice:  largeAmount*props.prices[1],
      })
    }
    debugger;
    handleButtonClick(event);
  }

  const handleButtonClick = (event) => {
    debugger;
    if (mediumAmount == 0 && largeAmount == 0){
      return ;
    }
    // Add the CSS class dynamically
    const button = event.target;
    button.classList.add('bump-animation');

    // Remove the CSS class after the animation completes
    setTimeout(() => {
      button.classList.remove('bump-animation');
    }, 300);
  };


  return (
    <MDBCard>
      <MDBCardImage
        position="top"
        alt="..."
        src={props.src}
        className="image"
      />
      <MDBCardBody>
        <MDBCardTitle className="card_title title">{props.name}</MDBCardTitle>
        <MDBCardText className="left description">
          {props.description}
        </MDBCardText>
        <p className="left ingredients">
          {props.incredients.map((meal) => {
            return meal + ",";
          })}
        </p>

        <div className="row" prices_contatiner>
        <div className="col-md-4 right price_label">
          <p>Medium</p>
        </div>
        <div className="col-md-4 price_value">
          <p>$ {props.prices[0]}</p>
        </div>
        <div className="col-md-4 price_value">
          <MealAmountController
            updateParent={updateMealAmounts}
            type={MEDIUM}
            counter={mediumAmount}
          ></MealAmountController>
        </div>
      </div>
      <div className="row prices_contatiner">
        <div className="col-md-4 right price_label">
          <p>Large</p>
        </div>
        <div className="col-md-4 price_value">
          <p> $ {props.prices[1]}</p>
        </div>
        <div className="col-md-4 price_value">
          <MealAmountController
            updateParent={updateMealAmounts}
            type={LARGE}
            counter={largeAmount}
          ></MealAmountController>
        </div>
      </div>

      <div className="row">
          <div className="col-md-10 right">
          <button type="button" class="btn btn-warning" onClick={onShowCartHandler}>Checkout</button>
          </div>
          <div className="col-md-2 ">
          <button disabled={mediumAmount == 0 && largeAmount == 0} onClick={onItemAddToShoppingCart.bind(cart)} className="button-shopping_cart">
            <MDBIcon 
            
              fas
              icon="shopping-cart"
              size="lg"
              className="left shopping_cart"
              
            />
            </button>
          </div>
        </div>
        
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
