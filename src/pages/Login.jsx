import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
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

  useEffect(() => {
    if (getCookie("username") !== "" && getCookie("password") !== "") {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
    }
  }, []);

  const handlePOST = async () => {
    setLoading(true);
    console.log("logging....");
    if (
      inputs.username === "" ||
      inputs.password === "" ||
      inputs.username === undefined ||
      inputs.password === undefined
    ) {
      toast.error("Username or Password can't be empty!");
      setLoading(false);
      return;
    }
    const options = {
      method: "POST",
      body: new URLSearchParams({
        username: inputs.username,
        password: inputs.password,
      }),
    };
    // fetch request
    await fetch("https://code-upload-backend.vercel.app/register", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          document.cookie = `username=${inputs.username};`;
          document.cookie = `password=${inputs.password};`;
          toast.success("Successfully Logged In!");
          setIsRegistered(true);
          setLoading(false);
        } else if (response.status === 404) {
          toast.error("Invalid credentials");
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        String(err).includes("Unauthorized")
          ? toast.error("Wrong Credentials!")
          : console.error(err);
      });
  };
  return (
    <>
      <div className="pageTitle">LOGIN PAGE</div>
      {IsRegistered ? (
        <div className="formContainer">
          <div className="actionBtnContainer">
            <Link to="/upload-code" className="MyButton login_action_btn">
              UPLOAD CODE ⬆️
            </Link>
            <Link to="/show-code" className="MyButton login_action_btn">
              SHOW CODES 📁
            </Link>
          </div>
        </div>
      ) : (
        <div className="formContainerLogIn">
          <div className="logInController">
            <div className="mb-3">
              <legend for="exampleInputEmail1" className="form-label">
                Username
              </legend>
              <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                className="form-control"
                aria-describedby="emailHelp"
              ></input>
              <div id="emailHelp" className="form-text">
                ⚠️ Username and Password are case sensitive.
              </div>
              <legend for="exampleInputPassword1" className="form-label">
                Password
              </legend>
              <input
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                className="form-control"
              ></input>
            </div>
            <button onClick={handlePOST} className="MyButton">
              {Loading ? "Please Wait..." : "Login"}
            </button>
            <br />
            <p className="footerL">
              ✅ Login with any username and password but remember it to
              retrieve your codes later.
            </p>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Login;
