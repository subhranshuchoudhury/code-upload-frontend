import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CodeCard from "../components/CodeCard";
import "../styles/codecard.scss";

const ShowCode = () => {
  const [Codes, setCodes] = useState([]);
  const [IsRegistered, setIsRegistered] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (getCookie("username") !== "" || getCookie("password") !== "") {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
      setIsLoading(false);
    }
    fetchData(); // eslint-disable-next-line
  }, []);

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

  const fetchData = async () => {
    const options = {
      method: "GET",
    };
    await fetch(
      `https://code-upload-backend.vercel.app/show-code/${getCookie(
        "username"
      )}/${getCookie("password")}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCodes(response.codes);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        String(err).includes("Unauthorized")
          ? alert("Wrong Credentials!")
          : console.error(err);
      });
  };
  return (
    <>
      <div className="pageTitle">YOUR UPLOADED CODES</div>

      {IsLoading ? (
        <div className="centerLoader">
          <div className="loader">
            <span className="loader__element"></span>
            <span className="loader__element"></span>
            <span className="loader__element"></span>
          </div>
          <p>Loading...</p>
        </div>
      ) : null}

      {IsRegistered ? (
        <div className="codeCardContainer">
          {Codes.map((u, index) => {
            return (
              <CodeCard
                key={index}
                assignment_no={u.assignment_no}
                code={u.code}
                language={u.language}
                q_no={u.q_no}
                q_title={u.q_title}
                timestamp={u.timestamp}
              />
            );
          })}
        </div>
      ) : (
        <div className="formContainer">
          <div className="codeUp">
            <p className="alertMessagen">🚫You are not logged In.</p>
            <Link to="/login" className="MyButtonL">
              Login ➡️
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowCode;
