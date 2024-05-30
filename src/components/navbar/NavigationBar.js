import React from "react";

import {NavLink} from 'react-router-dom'
import './NavigationBar.css'
import { useSelector,useDispatch } from "react-redux";
import { resetState } from "../../redux/slices/userAuthorSlice";
// import { current } from "@reduxjs/toolkit";
import { FaHome } from "react-icons/fa";
function NavigationBar() {

  let {loginUserStatus,currentUser}=useSelector(state=>state.userAuthoruserAuthorLoginReducer)
let dispatch=useDispatch()

function singOut(){
  localStorage.removeItem('token')
  dispatch(resetState())
}

  return (
    <ul className="nav justify-content-end bg-dark text-white p-4 fs-6">
      {loginUserStatus===false?
      <>
      <FaHome  className="justify-content-start fs-3 "/>
      {/* link to Home  */}
      <li className="nav-item">
        
        <NavLink className="nav-link" to="">
          Home
        
        </NavLink>
      </li>
       {/* link to Register  */}
       <li className="nav-item">
        <NavLink className="nav-link" to="signin">
          SignIn
        
        </NavLink>
      </li>
       {/* link to Login  */}
       <li className="nav-item">
        
        <NavLink className="nav-link" to="signup">
          SignUp
        
        </NavLink>
      </li>
      </>:(      <li className="nav-item">
        
        <NavLink className="nav-link" to="signin"
        onClick={singOut}
        >
          <p className="fs-3">welcome {currentUser.username}</p>
          SignOut
        
        </NavLink>
      </li>
       
      )}
     
       

    </ul>
  );
}
export default NavigationBar;