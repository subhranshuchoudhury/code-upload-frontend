import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      {/* <div className="formContainer">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <button className="MyButton">Register</button>
        <br />
        <p>Already have an account ? </p>
        <Link className="MyButton">Login</Link>
      </div> */}
      <div>
        <center>
          <div>
            <p className="alertMessage">Hey! Enjoy Direct Login.. 😇</p>
            <p className="alertMessage">
              ⚠️Username and Password is CASE SENSITIVE⚠️
            </p>
            <p className="alertMessageBody">
              You can directly login with any username and password but remember
              it.. otherwise you will lost your codes.
            </p>
            <p className="alertMessageBody">
              Enjoy ICP Class !.. No need to use Pendrive{" "}
            </p>
            <Link to="/login" className="MyButton">
              GO TO LOGIN ➡️
            </Link>
          </div>
        </center>
      </div>
    </>
  );
};

export default Register;
