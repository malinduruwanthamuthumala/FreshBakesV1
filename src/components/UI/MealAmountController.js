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

    const [counter,setCounter] = React.useState(0);


    const increment = (event) => {
        handleButtonClick(event)
        setCounter(counter + 1);
        props.updateParent(props.type,counter);
    }

    const decrement = (event) => {
        handleButtonClick(event);
        counter > 0 ? setCounter(counter - 1):setCounter(counter);
        props.updateParent(props.type,counter);
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