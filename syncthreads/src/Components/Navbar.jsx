import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
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
          <div>Logout</div>
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
  }
`;

export default Navbar;
