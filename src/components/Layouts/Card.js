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
  } from 'mdb-react-ui-kit';
import "./Card.css";

const Card= (props)=>{
    return(
        <MDBCard>
      <MDBCardImage position='top' alt='...' src={props.src} className="image"/>
      <MDBCardBody>
        <MDBCardTitle className="card_title title">{props.name}</MDBCardTitle>
        <MDBCardText className="left description">
          {props.description}
        </MDBCardText>
        <p className="left ingredients" >{props.incredients.map(meal => {
            return ( meal + ",")
        })}</p>
      </MDBCardBody>
      <div className="row">
        <div className="col-md-6 right price_label">
            <p>Medium</p>
        </div>
        <div className="col-md-6 price_value">
            <p>$ {props.prices[0]}</p>
        </div>
        
       </div>
       <div className="row">
        <div className="col-md-6 right price_label">
            <p>Large</p>
        </div>
        <div className="col-md-6 price_value">
            <p> $ {props.prices[1]}</p>
        </div>
        
       </div>
      <MDBCardBody>
      <MDBIcon fas icon="shopping-cart" size="lg" className="left shopping_cart" />
      
       
      </MDBCardBody>
    </MDBCard>
    );
}

export default Card