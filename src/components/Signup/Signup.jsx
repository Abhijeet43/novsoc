import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import "../../css/authentication.css";

const Signup = ({ setAuthMode }) => {
  const [showPass, setShowPass] = useToggle(false);
  const [showConfirmPass, setShowConfirmPass] = useToggle(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = async (e) => {
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
      user.email !== "" &&
      user.password !== "" &&
      user.confirmPassword !== ""
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();
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
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
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
            <i
              className={`fas ${showPass ? "fa-eye-slash" : "fa-eye"}`}
              onClick={setShowPass}
            ></i>
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
            <i
              className={`fas ${showConfirmPass ? "fa-eye-slash" : "fa-eye"}`}
              onClick={setShowConfirmPass}
            ></i>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
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
