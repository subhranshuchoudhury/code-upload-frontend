import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CodeCard from "../components/CodeCard";

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
    fetchData();
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
        <center>
          <div
            style={{ marginTop: "30px" }}
            class="spinner-grow text-success"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p>Loading...</p>
        </center>
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
          <center>
            <p>You are not logged In.</p>
            <Link to="/login" className="MyButton">
              Login ➡️
            </Link>
          </center>
        </div>
      )}
    </>
  );
};

export default ShowCode;
