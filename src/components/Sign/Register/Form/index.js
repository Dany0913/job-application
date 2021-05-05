import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/fontawesome-free-solid";
import { registerAccount } from "../../../../services/auth.service";

const FormRegister = () => {
  console.log("Entró FN handleRegister");
  const [form, setForm] = useState({});

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("Entró FN handleSubmit");
    try {
      delete form.password;
      let user = await registerAccount(form);
      console.log("Entró try", user);
      localStorage.setItem("LOCAL_JOB_APP_USER", JSON.stringify(form));
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    console.log("Entró FN validateForm");
    const nonCompleteVariables = [];
    let flag = false;
    if (!form.name) {
      nonCompleteVariables.push("name");
      flag = true;
    }
    if (!form.email) {
      nonCompleteVariables.push("email");
      flag = true;
    }
    if (!form.password) {
      nonCompleteVariables.push("password");
      flag = true;
    }
    if (!form.role) {
      nonCompleteVariables.push("role");
      flag = true;
    }
    return flag;
  };
  return (
    <div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <FontAwesomeIcon icon={faUser} size="1x" />
          </span>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Your name"
            required
            onChange={handleForm}
          />
        </div>
      </div>
      <hr className="hr-xs" />
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </span>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={handleForm}
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
            id="password"
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            minLength={4}
            required
            onChange={handleForm}
          />
        </div>
      </div>
      <div className="form-group">
        <select
          className="form-control selectpicker"
          name="role"
          onChange={handleForm}
        >
          <option disabled selected hidden>
            Select your role:
          </option>
          <option value="Candidate">Candidate</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      <div onClick={handleSubmit}>
        <Link
          className="btn btn-primary btn-block"
          id="btnLogin"
          disabled={validateForm()}
          to="/"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default FormRegister;
