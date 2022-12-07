import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const logoutUser = () => {
    document.cookie = "username=";
    document.cookie = "password=";
    window.location.reload();
  };
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home 🏡
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="register">
            Register 📝
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="login">
            Login 🔐
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="upload-code">
            Upload Code ⬆️
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="show-code">
            Your Codes 📁
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={logoutUser} className="nav-link" to="/">
            Logout 🔑
          </Link>
        </li>
      </ul>

      <Outlet />
      <br />
      <br />
      <center>
        <p className="footer">Made by a ITERIAN 💖 (beta stage)</p>
      </center>
    </>
  );
};

export default Layout;
