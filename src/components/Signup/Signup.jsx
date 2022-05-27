import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { signupUser } from "../../redux/asyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../../css/authentication.css";

const Signup = ({ setAuthMode }) => {
  const [showPass, setShowPass] = useToggle(false);
  const [showConfirmPass, setShowConfirmPass] = useToggle(false);
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const checkInputs = () => {
    return (
      user.firstName !== "" &&
      user.lastName !== "" &&
      user.username !== "" &&
      user.password !== "" &&
      user.confirmPassword !== ""
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (checkInputs()) {
      if (user.password === user.confirmPassword) {
        const response = await dispatch(signupUser(user));
        if (response?.payload?.status === 201) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.data.foundUser)
          );
          localStorage.setItem("token", response.payload.data.encodedToken);
          toast.success("Signup Successfull!!");
          navigate("/home");
        } else {
          toast.error("Something went wrong... Please Try After Sometime");
        }
      } else {
        toast.error("Password and Confirm Password donot match");
      }
    } else {
      toast.warn("Fields cannot be empty");
    }
  };

  return (
    <>
      <section className="section-form">
        <form action="" onSubmit={submitHandler}>
          <h1 className="form-title">Sign Up</h1>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={user.firstName}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={user.name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={changeHandler}
              required
            />
            {showPass ? (
              <AiFillEye onClick={setShowPass} />
            ) : (
              <AiFillEyeInvisible onClick={setShowPass} />
            )}
          </div>
          <div className="form-group">
            <input
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={changeHandler}
              required
            />
            {showConfirmPass ? (
              <AiFillEye onClick={setShowConfirmPass} />
            ) : (
              <AiFillEyeInvisible onClick={setShowConfirmPass} />
            )}
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              Sign Up
            </button>
            <p className="login-text">
              Already Have an Account?
              <button
                onClick={() => setAuthMode("login")}
                className="form-link"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export { Signup };
