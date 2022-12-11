import { Outlet, Link } from "react-router-dom";
import logo from "../soa-logo.png";
import { useState } from "react";
import "../styles/navbar.scss";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logoutUser = () => {
    document.cookie = "username=";
    document.cookie = "password=";
    window.location.reload();
  };
  return (
    <>
      <div className="Navbar">
        <Link to="/">
          <img src={logo} alt="" className="nav-logo" />
        </Link>
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link onClick={() => setIsOpen(!isOpen)} to="/">
            Home 🏡
          </Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/login">
            Login 🔐
          </Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/upload-code">
            Upload Code ⬆️
          </Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/show-code">
            Your Codes 📁
          </Link>
          <Link onClick={() => setIsOpen(!isOpen)}>
            <Link onClick={logoutUser} to="/" style={{ color: "#fff" }}>
              Logout 🔑
            </Link>
          </Link>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
