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

const Card = (props) => {

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
          ></MealAmountController>
        </div>
      </div>

      <div className="row">
          <div className="col-md-10 right">
          <button type="button" class="btn btn-warning" onClick={onShowCartHandler}>Checkout</button>
          </div>
          <div className="col-md-2 ">
            <MDBIcon
              fas
              icon="shopping-cart"
              size="lg"
              className="left shopping_cart"
            />
          </div>
        </div>
        
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
