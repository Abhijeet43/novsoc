import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import "../../css/authentication.css";

const Login = ({ setAuthMode }) => {
  const [showPass, setShowPass] = useToggle(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const guestUser = {
    email: "user@gmail.com",
    password: "user123",
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const guestUserHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section-form">
      <form action="" onSubmit={submitHandler}>
        <h1 className="form-title">Login</h1>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={changeHandler}
            value={user.email}
            required
          />
        </div>
        <div className="form-group">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
            required
          />
          <i
            onClick={setShowPass}
            className={`fas ${showPass ? "fa-eye-slash" : "fa-eye"}`}
          ></i>
        </div>
        <div className="form-group check-remember">
          <div className="checkbox-group">
            <input type="checkbox" id="checkbox-remember" />
            <label htmlFor="checkbox-remember">Remember Me</label>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={guestUserHandler}>
            Add Guest credentials
          </button>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p className="register-text">
            Don't have an account?
            <button onClick={() => setAuthMode("signup")} className="form-link">
              Signup
            </button>
          </p>
        </div>
      </form>
    </section>
  );
};

export { Login };
