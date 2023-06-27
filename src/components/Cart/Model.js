import React from "react";
import ReactDOM from 'react-dom';
import "./CartModel.css"

const Model = props => {
   const Backdrop = props =>{
     return (<div className="backdrop">
        
     </div>)
   }

   const ModelOverlay = props =>{
     return (<div className="content">
        {props.children}
     </div>)
   }

   const portalElement = document.getElementById('overlay');
    return (
        <React.Fragment>        
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
         {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
         
        </React.Fragment>
    );

}

export default Model;