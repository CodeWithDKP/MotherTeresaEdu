import { createContext, useContext, useState } from "react";
import button from "../UI/Button";
import Logo from '../../../public/images/Logo.png';
import Logo_white from '../../../public/images/Logo-white.png';
import hero1 from '../../../public/images/hero1.webp';
import hero2 from '../../../public/images/hero2.webp';
import hero3 from '../../../public/images/hero3.webp';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // static logo
  const logo = Logo;
  const Button = button;
  // static menus
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  // theme can change → keep in state (optional)
  const [theme, setTheme] = useState("light");

  // static footer data
  const footer = {
    logo: Logo_white,
    description: "We provide top-notch services for students and institutions.",

    leftLinks: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Courses", path: "/courses" },
      { name: "Contact", path: "/contact" }
    ],

    rightLinks: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Conditions", path: "/terms" },
      { name: "FAQ", path: "/faq" },
      { name: "Support", path: "/support" }
    ],

    socials: [
      { icon: "instagram", url: "https://instagram.com" },
      { icon: "facebook", url: "https://facebook.com" },
      { icon: "linkedin", url: "https://linkedin.com" },
      { icon: "twitter", url: "https://twitter.com" },
      { icon: "youtube", url: "https://youtube.com" }
    ],

    contact: [
      { icon: "phone", text: "+91 98765 43210" },
      { icon: "mail", text: "support@yourdomain.com" },
      { icon: "globe", text: "www.yourdomain.com" }
    ]
  };
  // ---------- STATES + CITIES DATA ----------
  const indiaData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kurnool"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Pasighat"],
    Assam: ["Guwahati", "Silchar", "Dibrugarh"],
    Bihar: ["Patna", "Gaya", "Bhagalpur"],
    Chhattisgarh: ["Raipur", "Bilaspur", "Durg"],
    Goa: ["Panaji", "Margao", "Mapusa"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Haryana: ["Gurugram", "Faridabad", "Hisar"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
    Karnataka: ["Bengaluru", "Mysore", "Mangalore"],
    Kerala: ["Kochi", "Thiruvananthapuram", "Calicut"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Manipur: ["Imphal"],
    Meghalaya: ["Shillong"],
    Mizoram: ["Aizawl"],
    Nagaland: ["Kohima", "Dimapur"],
    Odisha: ["Bhubaneswar", "Cuttack"],
    Punjab: ["Amritsar", "Ludhiana"],
    Rajasthan: ["Jaipur", "Udaipur"],
    Sikkim: ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    Telangana: ["Hyderabad", "Warangal"],
    Tripura: ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
    Uttarakhand: ["Dehradun", "Haridwar"],
    "West Bengal": ["Kolkata", "Siliguri"]
  };

  const Course = {
    Course1: ["1", "2", "3", "4", "5"],
    Course2: ["1", "2", "3"]
  }
  //course state handling
  const [courseSelected, setCourseSelected] = useState("");
  const [spe, setSep] = useState([]);

  const handleCourseChange = (stateName) => {
    setCourseSelected(stateName);
    setSep(Course[stateName] || []);
  };
  // state handling
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (stateName) => {
    setSelectedState(stateName);
    setCities(indiaData[stateName] || []);
  };
  // ---------- END STATES + CITIES DATA ----------

  const home = {
    hero: [
      {
        image: hero1,
        title: "First slide label",
        desc: "Some representative placeholder content for the first slide."
      },
      {
        image: hero2,
        title: "Second slide label",
        desc: "Some representative placeholder content for the second slide."
      },
      {
        image: hero3,
        title: "Third slide label",
        desc: "Some representative placeholder content for the third slide."
      }
    ]
  }

  return (
    <AppContext.Provider value={{
      logo, menus, Button, home, indiaData,
      selectedState,
      handleStateChange,
      cities, Course, courseSelected, spe, handleCourseChange, footer
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
