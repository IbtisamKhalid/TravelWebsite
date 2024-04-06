// import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Routes, Route , Link } from "react-router-dom";
import MenuItems from "./Components/MoreThanOnce/MenuItems";
// import H from "./Components/MoreThanOnce/H";
import Home from "./Components/Home";
import Navbar from "./Components/MoreThanOnce/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";








function App() {
  // const [click, setClick] = useState(true);
  const [classchange, setclasschange] = useState(true);
  // const handleChange = () => {
  //   setClick(!click);
  //   setclasschange(!classchange);
  // };
  return (
    <>
      {/* <Home /> */}
      {/* <Navbar /> */}
      <Routes>
          {MenuItems.map((item) => {
            const [value] = useState(item.componentTO);
            return (
              <>
                <Route path={item.url} element={value} />
              </>
            );
          })}
          {/* <Route path="/H" element={<H />}></Route> */}
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
          {/* {MenuItems.map((item) => {
            return (
              <>
                <Link to={item.url} className="nav-links">
                </Link>
              </>
            );
          })} */}
    </>
  );
}
export default App;
library.add(fab, fas, far);
