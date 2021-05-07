import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/fontawesome-free-solid";
import { loginAccount } from "../../../services/auth.service";

const Login = () => {
  const [registeredUser, setRegisteredUser] = useState({ email: "" });

  const handleRegisteredUser = ({ target }) => {
    const { name, value } = target;
    setRegisteredUser({ ...registeredUser, [name]: value });
  };
  const handleLogin = async (evt) => {
    evt.preventDefault();
    try {
      let userRegistered = await loginAccount(registeredUser.email);
      console.log("Entró try", [userRegistered]);
      if (userRegistered) {
        localStorage.setItem(
          "LOCAL_JOB_APP_USER",
          JSON.stringify(userRegistered)
        );
      } else {
        alert("Usuario no registrado");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-page">
      <main>
        <div className="login-block">
          <img src="./img/logo.png" alt="Logo" />
          <h1>Log into your account</h1>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleRegisteredUser}
                />
              </div>
            </div>

            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FontAwesomeIcon icon={faLock} size="1x" />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>

        <div className="login-links">
          <Link to="/" className="pull-left">
            Forget Password?
          </Link>
          <Link to="/register" className="pull-right">
            Register an account
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Login;
