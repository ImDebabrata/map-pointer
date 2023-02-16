import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../Redux/authSlice";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { ImSpinner3 } from "react-icons/im";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [showToast, setShowToast] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { isError, isLoading } = useSelector((store) => store.auth);
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(loginUser(userInfo)).then((res) => {
      if (res.type === "Authentication/loginSuccess") {
        setShowToast(res.payload.res);
      } else {
        setShowToast(res.payload);
      }
      setTimeout(() => {
        setShowToast("");
      }, 2000);
    });
  };

  return (
    <>
      <ToastBox
        alertType={isError ? "red" : "#38a169"}
        top={showToast ? "10px" : "-15%"}
      >
        {isError ? <MdError /> : <BsFillPatchCheckFill />}
        <div color="white" fsize="18px">
          {showToast}
        </div>
      </ToastBox>
      <Container>
        <h3>Login</h3>
        <Form onSubmit={handleForm}>
          <>
            <label htmlFor="email">Enter The email :-</label>
            <input
              value={userInfo.email}
              onChange={handleChange}
              id="email"
              name="email"
              type="text"
            />
          </>
          <>
            <label htmlFor="password">Enter The Password :-</label>
            <input
              value={userInfo.password}
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
            />
          </>
          <button type="submit">{isLoading ? <ImSpinner3 /> : "Login"}</button>
        </Form>
      </Container>
    </>
  );
};

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  border: 1px solid grey;
  margin: 30px auto;
  padding: 15px 30px;
  border-radius: 7px;
`;

export const Form = styled.form`
  & > label {
    margin-bottom: 5px;
    display: block;
    text-align: left;
  }
  & > input,
  button {
    display: block;
    margin: 0 0 20px 0;
    width: 100%;
    font-size: 16px;
    padding: 7px;
    border-radius: 5px;
    border: 1px solid black;
    &:focus {
      outline: 1px solid blue;
    }
  }
  & > button {
    background-color: #00a0dc;
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #0290c5;
    }
    & > svg {
      animation: rotation 2s infinite linear;
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }
`;

export const ToastBox = styled.div`
  position: absolute;
  left: 50%;
  transition: 500ms linear;
  top: ${(style) => style.top};
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  padding: 10px;
  min-width: 246px;
  gap: 5px;
  background-color: ${(style) => style.alertType};
  border-radius: 7px;
  & > svg {
    display: block;
    width: 30px;
    height: 30px;
    color: white;
  }
  & > div {
    color: white;
    font-size: 18px;
  }
`;

export default Login;
