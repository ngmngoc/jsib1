import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="brand">lamabooking</span>
        </Link>
          <div className="nItems">
            <button className="nButton">Dang ky</button>
            <button className="nButton">Dang nhap</button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;