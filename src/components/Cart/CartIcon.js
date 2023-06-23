import React from "react";
import "./CartIcon.css";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

const CartIcon = () =>{
    <div className="cart"><MDBIcon fas icon="shopping-cart" size="lg"/></div>
}

export default CartIcon;