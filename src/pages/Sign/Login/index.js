import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/fontawesome-free-solid";
import { loginAccount } from "../../../services/auth.service";

const Login = () => {
  useEffect(() => {
    loginAccount("dany0913@hotmail.com");
  }, []);
  return (
    <div className="login-page">
      <main>
        <div className="login-block">
          <img src="./img/logo.png" alt="Logo" />
          <h1>Log into your account</h1>

          <form>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
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
