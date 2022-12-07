import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CodeUpload = () => {
  const [inputs, setInputs] = useState({});
  const [IsRegistered, setIsRegistered] = useState(false);
  const [Loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const handlePOST = async () => {
    setLoading(true);
    console.log("logging....");
    if (
      getCookie("username") === "" ||
      inputs.code === "" ||
      inputs.code === undefined
    ) {
      alert("❌ Fields can't be empty!");
      setLoading(false);
      return;
    }
    const options = {
      method: "POST",
      body: new URLSearchParams({
        username: getCookie("username"),
        password: getCookie("password"),
        q_title: inputs.q_title,
        q_no: inputs.q_no,
        assignment_no: inputs.assignment_no,
        language: inputs.language === "" ? "java" : inputs.language,
        timestamp: new Date().toLocaleString(),
        code: inputs.code,
      }),
    };

    console.log(options);
    // fetch request
    await fetch("https://code-upload-backend.vercel.app/upload-code", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("✅ Code Upload successfully!");
          setIsRegistered(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        String(err).includes("Unauthorized")
          ? alert("Wrong Credentials!")
          : console.error(err);
      });
  };
  useEffect(() => {
    if (getCookie("username") !== "" && getCookie("password") !== "") {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
    }
  }, []);
  return (
    <>
      <div className="pageTitle">UPLOAD YOUR CODE</div>

      <p className="alertMessage pageTitle">
        *you can leave every box empty without code/program box.
      </p>
      {IsRegistered ? (
        <div className="formContainer">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Assignment No.
            </label>
            <input
              type="number"
              placeholder="Enter Assignment no..."
              name="assignment_no"
              value={inputs.assignment_no || ""}
              onChange={handleChange}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Question No.
            </label>
            <input
              type="number"
              placeholder="Enter Question Number..."
              name="q_no"
              value={inputs.q_no || ""}
              onChange={handleChange}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Language
            </label>
            <input
              type="text"
              placeholder="Leave it blank if language is java.."
              name="language"
              value={inputs.language || ""}
              onChange={handleChange}
              className="form-control"
            ></input>
          </div>
          {/* <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Question Title
            </label>
            <input
              type="text"
              placeholder="Not necessary.."
              name="q_title"
              value={inputs.q_title || ""}
              onChange={handleChange}
              className="form-control"
            ></input>
          </div> */}
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Code / Program
            </label>
            <textarea
              type="password"
              name="code"
              placeholder="Paste your code here..."
              value={inputs.code || ""}
              onChange={handleChange}
              className="form-control"
              rows={"10"}
            ></textarea>
          </div>
          <button
            style={{ width: "50%" }}
            onClick={handlePOST}
            className="MyButton"
          >
            {Loading ? "Wait Uploading..." : "Upload"}
          </button>
        </div>
      ) : (
        <div>
          <center>
            <p className="alertMessage">🚫You are not logged In.</p>
            <Link to="/login" className="MyButton">
              Login ➡️
            </Link>
          </center>
        </div>
      )}
    </>
  );
};

export default CodeUpload;
