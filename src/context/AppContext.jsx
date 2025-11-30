import { createContext, useContext, useState } from "react";
import button from "../components/Button";
import Logo from '../images/Logo.png';
import Logo_white from '../images/Logo-white.png';
import hero1 from '../images/hero1.webp';
import hero2 from '../images/hero2.webp';
import hero3 from '../images/hero3.webp';
import managment from '../images/managment.png';
import engineering from '../images/engineering.png';
import medical from '../images/medical.png';
import abroad from '../images/abroad.png';
import distance from '../images/distance.png';
//school
import institute_1 from '../images/institute_1.png'
import institute_2 from '../images/institute_2.png'
import institute_3 from '../images/institute_3.jpg'
import institute_4 from '../images/institute_4.png'

//testimonials
import student1 from '../images/at_1.png'
import student2 from '../images/at_2.jpg'
import student3 from '../images/at_3.jpg'

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
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
    ],

    rightLinks: [
      { name: "Privacy Policy", path: "/" },
      { name: "Terms & Conditions", path: "/" },
      { name: "FAQ", path: "/" },
      { name: "Support", path: "/" }
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
    ],
    courses: [
      {
        title: "Managment",
        list: ["PGMD", "MBA", "BBA", "BMS"],
        img: managment,
      },
      {
        title: "Managment",
        list: ["PGMD", "MBA", "BBA", "BMS"],
        img: engineering,
      },
      {
        title: "Managment",
        list: ["PGMD", "MBA", "BBA", "BMS"],
        img: medical,
      },
      {
        title: "Managment",
        list: ["PGMD", "MBA", "BBA", "BMS"],
        img: abroad,
      },
      {
        title: "Managment",
        list: ["PGMD", "MBA", "BBA", "BMS"],
        img: distance,
      },
    ],
    rankedInstitutes: [
      {
        img: institute_1,
        name: "Sunrise Engineering College",
        place: "Hyderabad, Telangana"
      },
      {
        img: institute_2,
        name: "Green Valley Institute of Technology",
        place: "Bengaluru, Karnataka"
      },
      {
        img: institute_3,
        name: "National Science & Research Academy",
        place: "Chennai, Tamil Nadu"
      },
      {
        img: institute_4,
        name: "Horizon Business School",
        place: "Pune, Maharashtra"
      },
      {
        img: institute_1,
        name: "Sunrise Engineering College",
        place: "Hyderabad, Telangana"
      },
      {
        img: institute_2,
        name: "Green Valley Institute of Technology",
        place: "Bengaluru, Karnataka"
      },
      {
        img: institute_3,
        name: "National Science & Research Academy",
        place: "Chennai, Tamil Nadu"
      },
      {
        img: institute_4,
        name: "Horizon Business School",
        place: "Pune, Maharashtra"
      },
      {
        img: institute_1,
        name: "Sunrise Engineering College",
        place: "Hyderabad, Telangana"
      },
      {
        img: institute_2,
        name: "Green Valley Institute of Technology",
        place: "Bengaluru, Karnataka"
      },
      {
        img: institute_3,
        name: "National Science & Research Academy",
        place: "Chennai, Tamil Nadu"
      },
      {
        img: institute_4,
        name: "Horizon Business School",
        place: "Pune, Maharashtra"
      },
      {
        img: institute_1,
        name: "Sunrise Engineering College",
        place: "Hyderabad, Telangana"
      },
      {
        img: institute_2,
        name: "Green Valley Institute of Technology",
        place: "Bengaluru, Karnataka"
      },
      {
        img: institute_3,
        name: "National Science & Research Academy",
        place: "Chennai, Tamil Nadu"
      },
      {
        img: institute_4,
        name: "Horizon Business School",
        place: "Pune, Maharashtra"
      }
    ],
    testimonials: [
      {
        img: student1,
        name: "Rohit Sharma",
        review:
          "I had a great experience with Admissionshala. They helped me choose the best college and guided me throughout the process."
      },
      {
        img: student2,
        name: "Pooja Mehta",
        review:
          "Very supportive team. They explained everything clearly and helped me understand which college would suit me."
      },
      {
        img: student3,
        name: "Aman Verma",
        review:
          "Smooth and helpful service. They were always available to clear my doubts. Highly recommended."
      },
      {
        img: student1,
        name: "Rohit Sharma",
        review:
          "I had a great experience with Admissionshala. They helped me choose the best college and guided me throughout the process."
      },
      {
        img: student2,
        name: "Pooja Mehta",
        review:
          "Very supportive team. They explained everything clearly and helped me understand which college would suit me."
      },
      {
        img: student3,
        name: "Aman Verma",
        review:
          "Smooth and helpful service. They were always available to clear my doubts. Highly recommended."
      }
    ],

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
