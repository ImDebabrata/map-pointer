import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavBar>
      <div>Map View</div>
      <div>
        <div>Login</div>
        <div>Signup</div>
        <div>Dashboard</div>
        <div>Logout</div>
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
  }
`;

export default Navbar;
