// import App from '../../App';
import Home from "../Home";
import AboutMe from "../AboutMe";
import Services from "../Services";
import ContactMe from "../ContactMe";

const MenuItems = [
  {
    url: "/Home",
    componentTO: <Home />,
  },
  {
    title: "About",
    url: "/AboutMe",
    componentTO: <AboutMe />,
    icons: "fa-solid fa-circle-info",
  },
  {
    title: "Services",
    url: "/Services",
    componentTO: <Services />,
    icons: "fa-solid fa-briefcase",
  },
  {
    title: "Contact Me",
    url: "/ContactMe",
    componentTO: <ContactMe />,
    icons: "fa-solid fa-address-book",
  },
  {
    title: "Sign Up",
  },
  // , {
  //     title: '',
  //     url: '',
  //     componentTO: '< />'
  // }
];

export default MenuItems;
