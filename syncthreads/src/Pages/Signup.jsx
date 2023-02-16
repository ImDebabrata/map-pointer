import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "../Redux/authSlice";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { ImSpinner3 } from "react-icons/im";
import { ToastBox, Container, Form } from "./Login";

const initialState = {
  email: "",
  password: "",
};

const Signup = () => {
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
    dispatch(signupUser(userInfo)).then((res) => {
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
        <h3>Signup</h3>
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
          <button type="submit">{isLoading ? <ImSpinner3 /> : "Signup"}</button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
