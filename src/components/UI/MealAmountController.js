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

const MealAmountController = (props) => {

    const [counter,setCounter] = React.useState(0);


    const increment = () => {
        setCounter(counter + 1);
        props.updateParent(props.type,counter);
    }

    const decrement = () => {
        counter > 0 ? setCounter(counter - 1):setCounter(counter);
        props.updateParent(props.type,counter);
    }
     return(
        <div className="row">
                <div className="col-md-6"> <p>{counter}</p></div>
                <div className="col-md-3">  <MDBIcon fas icon="plus-circle"  onClick={increment}/></div>
                <div className="col-md-3">  <MDBIcon fas icon="minus-circle"  onClick={decrement}/></div>
            </div>
     );
}

export default MealAmountController;