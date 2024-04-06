import "./Navbar.css";
import { Typography, Button } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
// import H from "./H";
import Home from "../Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItems from "./MenuItems";
import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(true);
  const [classchange, setclasschange] = useState(true);
  const handleChange = () => {
    setClick(!click);
    setclasschange(!classchange);
  };

  return (
    <>
      <nav className="NavbarItems">
        <Typography
          variant="h3"
          sx={{ fontSize: "30px", fontWeight: "bold" }}
          className="navbar-logo"
        >
          <Link to="/Home">Ibtisam Khalid</Link>
        </Typography>
        <ul className={classchange ? "nav-menu" : "nav-menu active"}>
          {MenuItems.map((item, index) => {
            return (
              <>
                <Link to={item.url} className="nav-links">
                  <li key={index} className="nav-li">
                    <FontAwesomeIcon className="nav-icons" icon={item.icons} />
                    {item.title}
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
        <div className="nav-icon" onClick={handleChange}>
          <FontAwesomeIcon icon={click ? "fas fa-bars" : "fas fa-times"} />
        </div>
      </nav>
    </>
  );
}
