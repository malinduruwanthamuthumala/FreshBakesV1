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
import "./MealAmountController.css"
const MealAmountController = (props) => {

   const amount = props.counter;
   const [counter,setCounter] = React.useState(amount);


    const increment = (event) => {
        handleButtonClick(event)
        const newCount =counter + 1
        setCounter(newCount);
        props.updateParent(props.type,newCount);
    }

    const decrement = (event) => {
      debugger;
        handleButtonClick(event);
        const newCounter = counter - 1
        counter > 0 ? setCounter(newCounter):setCounter(counter);
        if (newCounter >= 0){
          props.updateParent(props.type,newCounter);
        }
    }

    const handleButtonClick = (event) => {
        // Add the CSS class dynamically
        const button = event.target;
        button.classList.add('bump-animation');
    
        // Remove the CSS class after the animation completes
        setTimeout(() => {
          button.classList.remove('bump-animation');
        }, 300);
      };


     return(
        <div className="row">
                <div className="col-md-6"> <p>{counter}</p></div>
                <div className="col-md-3">  <MDBIcon fas icon="plus-circle"  onClick={increment} /></div>
                <div className="col-md-3">  <MDBIcon fas icon="minus-circle" onClick={decrement}/></div>
            </div>
     );
}

export default MealAmountController;