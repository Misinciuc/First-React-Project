import React from "react";
import { useState } from "react";
import "../styles/NavBar.scss";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Modal from "./Modal";

const Navbar = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <div className="navbar">
      <Modal active={modal1} setActive={setModal1}>
        <form className="register">
          <h1 className="register_title">Create New Account</h1>
          <div className="register_wrapper">
            <div className="register_block">
              <input
                type="text"
                placeholder="First Name"
                className="register_input"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="register_input"
              />
              <input
                type="password"
                placeholder="Password"
                className="register_input"
              />
            </div>
            <div className="register_block">
              <input
                type="text"
                placeholder="Last Name"
                className="register_input"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="register_input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="register_input"
              />
            </div>
          </div>
          <div className="register_checkbox_wraper">
            <input type="checkbox" id="register_checkbox" />
            <label htmlFor="register_checkbox" className="register_label">
              I agree to the terms and conditions
            </label>
          </div>
          <button className="register_btn">REGISTER</button>
        </form>
      </Modal>
      <Modal active={modal2} setActive={setModal2}>
        <form className="register">
          <h1 className="register_title"> Welcome back</h1>
          <p className="register_p">Please enter your email and password</p>
          <div className="register_block">
            <input
              type="text"
              placeholder="E-mail"
              className="register_input"
            />
            <input
              type="password"
              placeholder="Password"
              className="register_input"
            />
          </div>

          <button className="sing-in_btn">Sing-In</button>
        </form>
      </Modal>
      <div className="navbar_left">
        <div className="navbar_left__wrap">
          <SearchIcon
            className="navbar_left__icon"
            style={{ color: "#2d414f" }}
          ></SearchIcon>
          <input type="text" placeholder="Search..." className="navbar_input" />
        </div>
      </div>
      <p className="navbar_logo">Perfect_Fit</p>
      <div className="navbar_right">
        <button className="navbar_btn" onClick={() => setModal1(true)}>
          REGISTER
        </button>
        <button className="navbar_btn" onClick={() => setModal2(true)}>
          SING-IN
        </button>
        <div>
          <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlinedIcon style={{ color: "#2d414f" }} />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
