import { createContext, useContext, useState } from "react";

import Logo from '../../../public/images/Logo.png';
import Logo_white from '../../../public/images/Logo-white.png';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [logo] = useState(Logo);
  const [menus] = useState([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ]);

  const [theme, setTheme] = useState("light");


const [footer] = useState({
    logo: Logo_white,
    description:
      "Admissionshala.com is a Legal Entity of Career Leader Educational Services",
    leftLinks: ["Careers", "Distance Learning", "Blog", "Contact Us"],
    rightLinks: [
      "About Us",
      "Management",
      "Resume Builder",
      "College Comparator"
    ],
    socials: [
      { icon: "instagram" },
      { icon: "facebook" },
      { icon: "linkedin" },
      { icon: "twitter" },
      { icon: "youtube" }
    ],
    contact: [
      { icon: "phone", text: "+91-73044-55555" },
      { icon: "mail", text: "info@admissionshala.com" },
      { icon: "globe", text: "www.admissionshala.com" }
    ]
  });

  return (
    <AppContext.Provider value={{ logo, menus, theme, setTheme , footer}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
