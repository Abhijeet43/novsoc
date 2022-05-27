import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/asyncThunk/";
import { toast } from "react-toastify";
import "../../css/authentication.css";

const Login = ({ setAuthMode }) => {
  const [showPass, setShowPass] = useToggle(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);

  const guestUser = {
    username: "Guest123",
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

  const checkInputs = () => {
    return user.username && user.password;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (checkInputs()) {
      const response = await dispatch(loginUser(user));
      if (response?.payload?.status === 200) {
        if (remember) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.data.foundUser)
          );
          localStorage.setItem("token", response.payload.data.encodedToken);
        }
        toast.success(
          `Welcome Back ${response.payload.data.foundUser.firstName}`
        );
        navigate("/home");
      } else {
        toast.error("Something went wrong... Please Try After Sometime");
      }
    } else {
      toast.warn("Both fields are required");
    }
  };

  return (
    <section className="section-form">
      <form action="" onSubmit={submitHandler}>
        <h1 className="form-title">Login</h1>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="User Name"
            onChange={changeHandler}
            value={user.username}
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
            <input
              type="checkbox"
              id="checkbox-remember"
              onChange={() => setRemember((prev) => !prev)}
            />
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
