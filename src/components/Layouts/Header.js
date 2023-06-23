import React, { useState } from "react";
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
} from "mdb-react-ui-kit";

import icon from "../../assets/freshb.jpg";
import cover from "../../assets/cover.jpg";
import "./header.css";
import MealsList from "../Meals/MealsList";

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div className="row">
      <div className="cover col-md-12">
        <img src={cover} className="cover"></img>
      </div>
      <div className=" col-md-12">
      <MDBNavbar expand="md" className="navbar_custom">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={icon} className="icon-header"></img>
            <h3 className="web_name">FRESHBAKES</h3>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink href="#" tabIndex={-1} className="paint-white">
                  <p className="paint-white">Beverages</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" tabIndex={-1} className="paint-white">
                  <p className="paint-white">contact us</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className="cart">
              <MDBIcon fas icon="shopping-cart" size="lg" />
            </div>
            <div className="sign_in_text"> Sign In</div>
            <div className="sign_in">
              <MDBIcon far icon="user-circle" size="lg" />
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      </div>
    </div>
  );
}
