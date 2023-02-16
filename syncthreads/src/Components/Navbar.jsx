import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../Redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  // console.log("token:", token);

  return (
    <NavBar>
      <div>Map View</div>
      <div>
        <Link to={"/dashboard"}>Dashboard</Link>
        {!token ? (
          <>
            <Link to={"/"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
          </>
        ) : (
          <div onClick={() => dispatch(logOut())}>Logout</div>
        )}
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  padding: 10px;
  color: white;
  justify-content: space-between;
  background-color: #0f6292;
  & > div:first-child {
    font-size: 18px;
    font-weight: bold;
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 10px;
    & > a {
      color: white;
      text-decoration: none;
    }
    & > div {
      cursor: pointer;
    }
  }
`;

export default Navbar;
