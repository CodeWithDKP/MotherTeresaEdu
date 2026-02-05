import { createContext, useContext, useState } from "react";
import button from "../components/Button";
import Logo from '../images/teresaLogo.png';
import Logo_white from '../images/teresaLogoWhite.png';
import hero1 from '../images/hero3.webp';
import hero2 from '../images/hero2.webp';
import hero3 from '../images/hero1.webp';
import managment from '../images/managment.png';
import engineering from '../images/engineering.png';
import medical from '../images/medical.png';
import abroad from '../images/abroad.png';
import distance from '../images/distance.png';
//top schools
import auro from '../images/institutes/auro.png'
import gims from '../images/institutes/gims.png'
import iba from '../images/institutes/iba.jpg'
import iicmt from '../images/institutes/iicmt-featured.png'
import isbm from '../images/institutes/isbm.png'
import isbr from '../images/institutes/isbr.jpg'
import ISBS from '../images/institutes/ISBS-PAGE-featured.png'
import itm from '../images/institutes/itm.png'
import jagsom from '../images/institutes/jagsom.png'
import patil from '../images/institutes/patil.jpg'
import nbs from '../images/institutes/nbs.jpg'
import pgdm from '../images/institutes/pgdm.png'
import pgdm2 from '../images/institutes/pgdm2.png'
import pgmd from '../images/institutes/pgmd.png'
import rcm from '../images/institutes/rcm.jpg'
import sbs from '../images/institutes/sbs.jpg'

//clients chennai
import AMRITA from "../images/chennai/AMRITA.jpg";
import ARJUN from "../images/chennai/ARJUN.jfif";
import DLM from "../images/chennai/DLM.jfif";
import hindustan from "../images/chennai/hindustan.webp";
import JANSHON from "../images/chennai/JANSHON.jfif";
import ku from "../images/chennai/ku.jfif";
import mgr from "../images/chennai/mgr.jfif";
import RMK from "../images/chennai/RMK.jpg";
import SATHYABAMA from "../images/chennai/SATHYABAMA.jfif";
import SAVITHA from "../images/chennai/SAVITHA.jfif";
import SRM from "../images/chennai/SRM.jpg";
import SSN from "../images/chennai/SSN.jpg";
import TU from "../images/chennai/TU.jfif";
import VELTECH from "../images/chennai/VELTECH.jfif";
import vit from "../images/chennai/vit.jpg";

//banglore
import ACHARYA from "../images/BANGLOE/ACHARYA.jfif";
import ATRIA from "../images/BANGLOE/ATRIA.jfif";
import AU from "../images/BANGLOE/AU.jfif";
import BGS from "../images/BANGLOE/BGS.jfif";
import BMSC from "../images/BANGLOE/BMSC.jfif";
import BMSIT from "../images/BANGLOE/BMSIT.jfif";
import BRINDAVAN from "../images/BANGLOE/BRINDAVAN.jfif";
import CHRIST from "../images/BANGLOE/CHRIST.avif";
import CMR from "../images/BANGLOE/CMR.jfif";
import DS from "../images/BANGLOE/DS.jfif";
import GARDEN from "../images/BANGLOE/GARDEN.jfif";
import HKBKBNG from "../images/BANGLOE/HKBKBNG.jfif";
import IMPACT from "../images/BANGLOE/IMPACT.jfif";
import JAINCOLLGE from "../images/BANGLOE/JAINCOLLGE.jfif";
import MS from "../images/BANGLOE/MS.jfif";
import NAGARJUNA from "../images/BANGLOE/NAGARJUNA.jfif";
import NH from "../images/BANGLOE/NH.jfif";
import NIITMEENAKSHI from "../images/BANGLOE/NIITMEENAKSHI.jfif";
import PES from "../images/BANGLOE/PES.jfif";
import REVA from "../images/BANGLOE/REVA.jfif";
import RV from "../images/BANGLOE/RV.jfif";
import SJCIT from "../images/BANGLOE/SJCIT.jfif";
import UNCMR from "../images/BANGLOE/UNCMR.jfif";

//testimonials
import at_1 from '../images/at_1.png'
import at_2 from '../images/at_2.jpg'
import at_3 from '../images/at_3.jpg'
import at_4 from '../images/at_4.jpg'
import at_5 from '../images/at_5.jpg'
import at_6 from '../images/at_6.jpg'
//new clients
import commonImg from "../images/common.jpg";

//icons
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsTelephoneFill,
  BsEnvelopeFill,
  BsGeoAltFill
} from "react-icons/bs";
//team
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // static logo
  const logo = Logo;
  const Button = button;
  // static menus
  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Our Clients", path: "/clients" },
    { name: "Donation", path: "/payment" },
    { name: "Contact Us", path: "/contact" }
  ];
  // static footer data
  const footer = {
    logo: Logo_white,
    description: "Mother Teresa Educational Foundation, Ananthapuramu, Andhra Pradesh — empowering students with quality education and guidance.",

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
    ]
  };
  // ---------- STATES + CITIES DATA ----------
  const indiaData = {

    Haryana: [
      "Faridabad",
      "Gurgaon",
      "Hisar",
      "Rohtak",
      "Panipat",
      "Karnal",
      "Sonipat",
      "Yamunanagar",
      "Panchkula",
      "Bhiwani",
      "Bahadurgarh",
      "Jind",
      "Sirsa",
      "Thanesar",
      "Kaithal",
      "Palwal",
      "Rewari",
      "Hansi",
      "Narnaul",
      "Fatehabad",
      "Gohana",
      "Tohana",
      "Narwana",
      "Mandi Dabwali",
      "Charkhi Dadri",
      "Shahbad",
      "Pehowa",
      "Samalkha",
      "Pinjore",
      "Ladwa",
      "Sohna",
      "Safidon",
      "Taraori",
      "Mahendragarh",
      "Ratia",
      "Rania",
      "Sarsod"
    ],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Tiruppur",
      "Ranipet",
      "Nagercoil",
      "Thanjavur",
      "Vellore",
      "Kancheepuram",
      "Erode",
      "Tiruvannamalai",
      "Pollachi",
      "Rajapalayam",
      "Sivakasi",
      "Pudukkottai",
      "Neyveli (TS)",
      "Nagapattinam",
      "Viluppuram",
      "Tiruchengode",
      "Vaniyambadi",
      "Theni Allinagaram",
      "Udhagamandalam",
      "Aruppukkottai",
      "Paramakudi",
      "Arakkonam",
      "Virudhachalam",
      "Srivilliputhur",
      "Tindivanam",
      "Virudhunagar",
      "Karur",
      "Valparai",
      "Sankarankovil",
      "Tenkasi",
      "Palani",
      "Pattukkottai",
      "Tirupathur",
      "Ramanathapuram",
      "Udumalaipettai",
      "Gobichettipalayam",
      "Thiruvarur",
      "Thiruvallur",
      "Panruti",
      "Namakkal",
      "Thirumangalam",
      "Vikramasingapuram",
      "Nellikuppam",
      "Rasipuram",
      "Tiruttani",
      "Nandivaram-Guduvancheri",
      "Periyakulam",
      "Pernampattu",
      "Vellakoil",
      "Sivaganga",
      "Vadalur",
      "Rameshwaram",
      "Tiruvethipuram",
      "Perambalur",
      "Usilampatti",
      "Vedaranyam",
      "Sathyamangalam",
      "Puliyankudi",
      "Nanjikottai",
      "Thuraiyur",
      "Sirkali",
      "Tiruchendur",
      "Periyasemur",
      "Sattur",
      "Vandavasi",
      "Tharamangalam",
      "Tirukkoyilur",
      "Oddanchatram",
      "Palladam",
      "Vadakkuvalliyur",
      "Tirukalukundram",
      "Uthamapalayam",
      "Surandai",
      "Sankari",
      "Shenkottai",
      "Vadipatti",
      "Sholingur",
      "Tirupathur",
      "Manachanallur",
      "Viswanatham",
      "Polur",
      "Panagudi",
      "Uthiramerur",
      "Thiruthuraipoondi",
      "Pallapatti",
      "Ponneri",
      "Lalgudi",
      "Natham",
      "Unnamalaikadai",
      "P.N.Patti",
      "Tharangambadi",
      "Tittakudi",
      "Pacode",
      "O' Valley",
      "Suriyampalayam",
      "Sholavandan",
      "Thammampatti",
      "Namagiripettai",
      "Peravurani",
      "Parangipettai",
      "Pudupattinam",
      "Pallikonda",
      "Sivagiri",
      "Punjaipugalur",
      "Padmanabhapuram",
      "Thirupuvanam"
    ],
    "Madhya Pradesh": [
      "Indore",
      "Bhopal",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Ratlam",
      "Satna",
      "Murwara (Katni)",
      "Morena",
      "Singrauli",
      "Rewa",
      "Vidisha",
      "Ganjbasoda",
      "Shivpuri",
      "Mandsaur",
      "Neemuch",
      "Nagda",
      "Itarsi",
      "Sarni",
      "Sehore",
      "Mhow Cantonment",
      "Seoni",
      "Balaghat",
      "Ashok Nagar",
      "Tikamgarh",
      "Shahdol",
      "Pithampur",
      "Alirajpur",
      "Mandla",
      "Sheopur",
      "Shajapur",
      "Panna",
      "Raghogarh-Vijaypur",
      "Sendhwa",
      "Sidhi",
      "Pipariya",
      "Shujalpur",
      "Sironj",
      "Pandhurna",
      "Nowgong",
      "Mandideep",
      "Sihora",
      "Raisen",
      "Lahar",
      "Maihar",
      "Sanawad",
      "Sabalgarh",
      "Umaria",
      "Porsa",
      "Narsinghgarh",
      "Malaj Khand",
      "Sarangpur",
      "Mundi",
      "Nepanagar",
      "Pasan",
      "Mahidpur",
      "Seoni-Malwa",
      "Rehli",
      "Manawar",
      "Rahatgarh",
      "Panagar",
      "Wara Seoni",
      "Tarana",
      "Sausar",
      "Rajgarh",
      "Niwari",
      "Mauganj",
      "Manasa",
      "Nainpur",
      "Prithvipur",
      "Sohagpur",
      "Nowrozabad (Khodargama)",
      "Shamgarh",
      "Maharajpur",
      "Multai",
      "Pali",
      "Pachore",
      "Rau",
      "Mhowgaon",
      "Vijaypur",
      "Narsinghgarh"
    ],
    Jharkhand: [
      "Dhanbad",
      "Ranchi",
      "Jamshedpur",
      "Bokaro Steel City",
      "Deoghar",
      "Phusro",
      "Adityapur",
      "Hazaribag",
      "Giridih",
      "Ramgarh",
      "Jhumri Tilaiya",
      "Saunda",
      "Sahibganj",
      "Medininagar (Daltonganj)",
      "Chaibasa",
      "Chatra",
      "Gumia",
      "Dumka",
      "Madhupur",
      "Chirkunda",
      "Pakaur",
      "Simdega",
      "Musabani",
      "Mihijam",
      "Patratu",
      "Lohardaga",
      "Tenu dam-cum-Kathhara"
    ],
    Mizoram: [
      "Aizawl",
      "Lunglei",
      "Saiha"
    ],
    Nagaland: [
      "Dimapur",
      "Kohima",
      "Zunheboto",
      "Tuensang",
      "Wokha",
      "Mokokchung"
    ],
    "Himachal Pradesh": [
      "Shimla",
      "Mandi",
      "Solan",
      "Nahan",
      "Sundarnagar",
      "Palampur",
      "Kullu"
    ],
    Tripura: [
      "Agartala",
      "Udaipur",
      "Dharmanagar",
      "Pratapgarh",
      "Kailasahar",
      "Belonia",
      "Khowai"
    ],
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Rajahmundry",
      "Kakinada",
      "Tirupati",
      "Anantapur",
      "Kadapa",
      "Vizianagaram",
      "Eluru",
      "Ongole",
      "Nandyal",
      "Machilipatnam",
      "Adoni",
      "Tenali",
      "Chittoor",
      "Hindupur",
      "Proddatur",
      "Bhimavaram",
      "Madanapalle",
      "Guntakal",
      "Dharmavaram",
      "Gudivada",
      "Srikakulam",
      "Narasaraopet",
      "Rajampet",
      "Tadpatri",
      "Tadepalligudem",
      "Chilakaluripet",
      "Yemmiganur",
      "Kadiri",
      "Chirala",
      "Anakapalle",
      "Kavali",
      "Palacole",
      "Sullurpeta",
      "Tanuku",
      "Rayachoti",
      "Srikalahasti",
      "Bapatla",
      "Naidupet",
      "Nagari",
      "Gudur",
      "Vinukonda",
      "Narasapuram",
      "Nuzvid",
      "Markapur",
      "Ponnur",
      "Kandukur",
      "Bobbili",
      "Rayadurg",
      "Samalkot",
      "Jaggaiahpet",
      "Tuni",
      "Amalapuram",
      "Bheemunipatnam",
      "Venkatagiri",
      "Sattenapalle",
      "Pithapuram",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Macherla",
      "Gooty",
      "Salur",
      "Mandapeta",
      "Jammalamadugu",
      "Peddapuram",
      "Punganur",
      "Nidadavole",
      "Repalle",
      "Ramachandrapuram",
      "Kovvur",
      "Tiruvuru",
      "Uravakonda",
      "Narsipatnam",
      "Yerraguntla",
      "Pedana",
      "Puttur",
      "Renigunta",
      "Rajam",
      "Srisailam Project (Right Flank Colony) Township"
    ],
    Punjab: [
      "Ludhiana",
      "Patiala",
      "Amritsar",
      "Jalandhar",
      "Bathinda",
      "Pathankot",
      "Hoshiarpur",
      "Batala",
      "Moga",
      "Malerkotla",
      "Khanna",
      "Mohali",
      "Barnala",
      "Firozpur",
      "Phagwara",
      "Kapurthala",
      "Zirakpur",
      "Kot Kapura",
      "Faridkot",
      "Muktsar",
      "Rajpura",
      "Sangrur",
      "Fazilka",
      "Gurdaspur",
      "Kharar",
      "Gobindgarh",
      "Mansa",
      "Malout",
      "Nabha",
      "Tarn Taran",
      "Jagraon",
      "Sunam",
      "Dhuri",
      "Firozpur Cantt.",
      "Sirhind Fatehgarh Sahib",
      "Rupnagar",
      "Jalandhar Cantt.",
      "Samana",
      "Nawanshahr",
      "Rampura Phul",
      "Nangal",
      "Nakodar",
      "Zira",
      "Patti",
      "Raikot",
      "Longowal",
      "Urmar Tanda",
      "Morinda, India",
      "Phillaur",
      "Pattran",
      "Qadian",
      "Sujanpur",
      "Mukerian",
      "Talwara"
    ],
    Chandigarh: [
      "Chandigarh"
    ],
    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Bikaner",
      "Udaipur",
      "Ajmer",
      "Bhilwara",
      "Alwar",
      "Bharatpur",
      "Pali",
      "Barmer",
      "Sikar",
      "Tonk",
      "Sadulpur",
      "Sawai Madhopur",
      "Nagaur",
      "Makrana",
      "Sujangarh",
      "Sardarshahar",
      "Ladnu",
      "Ratangarh",
      "Nokha",
      "Nimbahera",
      "Suratgarh",
      "Rajsamand",
      "Lachhmangarh",
      "Rajgarh (Churu)",
      "Nasirabad",
      "Nohar",
      "Phalodi",
      "Nathdwara",
      "Pilani",
      "Merta City",
      "Sojat",
      "Neem-Ka-Thana",
      "Sirohi",
      "Pratapgarh",
      "Rawatbhata",
      "Sangaria",
      "Lalsot",
      "Pilibanga",
      "Pipar City",
      "Taranagar",
      "Vijainagar, Ajmer",
      "Sumerpur",
      "Sagwara",
      "Ramganj Mandi",
      "Lakheri",
      "Udaipurwati",
      "Losal",
      "Sri Madhopur",
      "Ramngarh",
      "Rawatsar",
      "Rajakhera",
      "Shahpura",
      "Shahpura",
      "Raisinghnagar",
      "Malpura",
      "Nadbai",
      "Sanchore",
      "Nagar",
      "Rajgarh (Alwar)",
      "Sheoganj",
      "Sadri",
      "Todaraisingh",
      "Todabhim",
      "Reengus",
      "Rajaldesar",
      "Sadulshahar",
      "Sambhar",
      "Prantij",
      "Mount Abu",
      "Mangrol",
      "Phulera",
      "Mandawa",
      "Pindwara",
      "Mandalgarh",
      "Takhatgarh"
    ],
    Assam: [
      "Guwahati",
      "Silchar",
      "Dibrugarh",
      "Nagaon",
      "Tinsukia",
      "Jorhat",
      "Bongaigaon City",
      "Dhubri",
      "Diphu",
      "North Lakhimpur",
      "Tezpur",
      "Karimganj",
      "Sibsagar",
      "Goalpara",
      "Barpeta",
      "Lanka",
      "Lumding",
      "Mankachar",
      "Nalbari",
      "Rangia",
      "Margherita",
      "Mangaldoi",
      "Silapathar",
      "Mariani",
      "Marigaon"
    ],
    Odisha: [
      "Bhubaneswar",
      "Cuttack",
      "Raurkela",
      "Brahmapur",
      "Sambalpur",
      "Puri",
      "Baleshwar Town",
      "Baripada Town",
      "Bhadrak",
      "Balangir",
      "Jharsuguda",
      "Bargarh",
      "Paradip",
      "Bhawanipatna",
      "Dhenkanal",
      "Barbil",
      "Kendujhar",
      "Sunabeda",
      "Rayagada",
      "Jatani",
      "Byasanagar",
      "Kendrapara",
      "Rajagangapur",
      "Parlakhemundi",
      "Talcher",
      "Sundargarh",
      "Phulabani",
      "Pattamundai",
      "Titlagarh",
      "Nabarangapur",
      "Soro",
      "Malkangiri",
      "Rairangpur",
      "Tarbha"
    ],
    Chhattisgarh: [
      "Raipur",
      "Bhilai Nagar",
      "Korba",
      "Bilaspur",
      "Durg",
      "Rajnandgaon",
      "Jagdalpur",
      "Raigarh",
      "Ambikapur",
      "Mahasamund",
      "Dhamtari",
      "Chirmiri",
      "Bhatapara",
      "Dalli-Rajhara",
      "Naila Janjgir",
      "Tilda Newra",
      "Mungeli",
      "Manendragarh",
      "Sakti"
    ],
    "Jammu and Kashmir": [
      "Srinagar",
      "Jammu",
      "Baramula",
      "Anantnag",
      "Sopore",
      "KathUrban Agglomeration",
      "Rajauri",
      "Punch",
      "Udhampur"
    ],
    Karnataka: [
      "Bengaluru",
      "Hubli-Dharwad",
      "Belagavi",
      "Mangaluru",
      "Davanagere",
      "Ballari",
      "Mysore",
      "Tumkur",
      "Shivamogga",
      "Raayachuru",
      "Robertson Pet",
      "Kolar",
      "Mandya",
      "Udupi",
      "Chikkamagaluru",
      "Karwar",
      "Ranebennuru",
      "Ranibennur",
      "Ramanagaram",
      "Gokak",
      "Yadgir",
      "Rabkavi Banhatti",
      "Shahabad",
      "Sirsi",
      "Sindhnur",
      "Tiptur",
      "Arsikere",
      "Nanjangud",
      "Sagara",
      "Sira",
      "Puttur",
      "Athni",
      "Mulbagal",
      "Surapura",
      "Siruguppa",
      "Mudhol",
      "Sidlaghatta",
      "Shahpur",
      "Saundatti-Yellamma",
      "Wadi",
      "Manvi",
      "Nelamangala",
      "Lakshmeshwar",
      "Ramdurg",
      "Nargund",
      "Tarikere",
      "Malavalli",
      "Savanur",
      "Lingsugur",
      "Vijayapura",
      "Sankeshwara",
      "Madikeri",
      "Talikota",
      "Sedam",
      "Shikaripur",
      "Mahalingapura",
      "Mudalagi",
      "Muddebihal",
      "Pavagada",
      "Malur",
      "Sindhagi",
      "Sanduru",
      "Afzalpur",
      "Maddur",
      "Madhugiri",
      "Tekkalakote",
      "Terdal",
      "Mudabidri",
      "Magadi",
      "Navalgund",
      "Shiggaon",
      "Shrirangapattana",
      "Sindagi",
      "Sakaleshapura",
      "Srinivaspur",
      "Ron",
      "Mundargi",
      "Sadalagi",
      "Piriyapatna",
      "Adyar"
    ],
    Manipur: [
      "Imphal",
      "Thoubal",
      "Lilong",
      "Mayang Imphal"
    ],
    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kollam",
      "Thrissur",
      "Palakkad",
      "Alappuzha",
      "Malappuram",
      "Ponnani",
      "Vatakara",
      "Kanhangad",
      "Taliparamba",
      "Koyilandy",
      "Neyyattinkara",
      "Kayamkulam",
      "Nedumangad",
      "Kannur",
      "Tirur",
      "Kottayam",
      "Kasaragod",
      "Kunnamkulam",
      "Ottappalam",
      "Thiruvalla",
      "Thodupuzha",
      "Chalakudy",
      "Changanassery",
      "Punalur",
      "Nilambur",
      "Cherthala",
      "Perinthalmanna",
      "Mattannur",
      "Shoranur",
      "Varkala",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Attingal",
      "Kodungallur",
      "Pappinisseri",
      "Chittur-Thathamangalam",
      "Muvattupuzha",
      "Adoor",
      "Mavelikkara",
      "Mavoor",
      "Perumbavoor",
      "Vaikom",
      "Palai",
      "Panniyannur",
      "Guruvayoor",
      "Puthuppally",
      "Panamattom"
    ],
    Delhi: [
      "Delhi",
      "New Delhi"
    ],
    "Dadra and Nagar Haveli": [
      "Silvassa"
    ],
    Puducherry: [
      "Pondicherry",
      "Karaikal",
      "Yanam",
      "Mahe"
    ],
    Uttarakhand: [
      "Dehradun",
      "Hardwar",
      "Haldwani-cum-Kathgodam",
      "Srinagar",
      "Kashipur",
      "Roorkee",
      "Rudrapur",
      "Rishikesh",
      "Ramnagar",
      "Pithoragarh",
      "Manglaur",
      "Nainital",
      "Mussoorie",
      "Tehri",
      "Pauri",
      "Nagla",
      "Sitarganj",
      "Bageshwar"
    ],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Firozabad",
      "Agra",
      "Meerut",
      "Varanasi",
      "Allahabad",
      "Amroha",
      "Moradabad",
      "Aligarh",
      "Saharanpur",
      "Noida",
      "Loni",
      "Jhansi",
      "Shahjahanpur",
      "Rampur",
      "Modinagar",
      "Hapur",
      "Etawah",
      "Sambhal",
      "Orai",
      "Bahraich",
      "Unnao",
      "Rae Bareli",
      "Lakhimpur",
      "Sitapur",
      "Lalitpur",
      "Pilibhit",
      "Chandausi",
      "Hardoi ",
      "Azamgarh",
      "Khair",
      "Sultanpur",
      "Tanda",
      "Nagina",
      "Shamli",
      "Najibabad",
      "Shikohabad",
      "Sikandrabad",
      "Shahabad, Hardoi",
      "Pilkhuwa",
      "Renukoot",
      "Vrindavan",
      "Ujhani",
      "Laharpur",
      "Tilhar",
      "Sahaswan",
      "Rath",
      "Sherkot",
      "Kalpi",
      "Tundla",
      "Sandila",
      "Nanpara",
      "Sardhana",
      "Nehtaur",
      "Seohara",
      "Padrauna",
      "Mathura",
      "Thakurdwara",
      "Nawabganj",
      "Siana",
      "Noorpur",
      "Sikandra Rao",
      "Puranpur",
      "Rudauli",
      "Thana Bhawan",
      "Palia Kalan",
      "Zaidpur",
      "Nautanwa",
      "Zamania",
      "Shikarpur, Bulandshahr",
      "Naugawan Sadat",
      "Fatehpur Sikri",
      "Shahabad, Rampur",
      "Robertsganj",
      "Utraula",
      "Sadabad",
      "Rasra",
      "Lar",
      "Lal Gopalganj Nindaura",
      "Sirsaganj",
      "Pihani",
      "Shamsabad, Agra",
      "Rudrapur",
      "Soron",
      "SUrban Agglomerationr",
      "Samdhan",
      "Sahjanwa",
      "Rampur Maniharan",
      "Sumerpur",
      "Shahganj",
      "Tulsipur",
      "Tirwaganj",
      "PurqUrban Agglomerationzi",
      "Shamsabad, Farrukhabad",
      "Warhapur",
      "Powayan",
      "Sandi",
      "Achhnera",
      "Naraura",
      "Nakur",
      "Sahaspur",
      "Safipur",
      "Reoti",
      "Sikanderpur",
      "Saidpur",
      "Sirsi",
      "Purwa",
      "Parasi",
      "Lalganj",
      "Phulpur",
      "Shishgarh",
      "Sahawar",
      "Samthar",
      "Pukhrayan",
      "Obra",
      "Niwai",
      "Mirzapur"
    ],
    Bihar: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Darbhanga",
      "Arrah",
      "Begusarai",
      "Chhapra",
      "Katihar",
      "Munger",
      "Purnia",
      "Saharsa",
      "Sasaram",
      "Hajipur",
      "Dehri-on-Sone",
      "Bettiah",
      "Motihari",
      "Bagaha",
      "Siwan",
      "Kishanganj",
      "Jamalpur",
      "Buxar",
      "Jehanabad",
      "Aurangabad",
      "Lakhisarai",
      "Nawada",
      "Jamui",
      "Sitamarhi",
      "Araria",
      "Gopalganj",
      "Madhubani",
      "Masaurhi",
      "Samastipur",
      "Mokameh",
      "Supaul",
      "Dumraon",
      "Arwal",
      "Forbesganj",
      "BhabUrban Agglomeration",
      "Narkatiaganj",
      "Naugachhia",
      "Madhepura",
      "Sheikhpura",
      "Sultanganj",
      "Raxaul Bazar",
      "Ramnagar",
      "Mahnar Bazar",
      "Warisaliganj",
      "Revelganj",
      "Rajgir",
      "Sonepur",
      "Sherghati",
      "Sugauli",
      "Makhdumpur",
      "Maner",
      "Rosera",
      "Nokha",
      "Piro",
      "Rafiganj",
      "Marhaura",
      "Mirganj",
      "Lalganj",
      "Murliganj",
      "Motipur",
      "Manihari",
      "Sheohar",
      "Maharajganj",
      "Silao",
      "Barh",
      "Asarganj"
    ],
    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Nadiad",
      "Porbandar",
      "Anand",
      "Morvi",
      "Mahesana",
      "Bharuch",
      "Vapi",
      "Navsari",
      "Veraval",
      "Bhuj",
      "Godhra",
      "Palanpur",
      "Valsad",
      "Patan",
      "Deesa",
      "Amreli",
      "Anjar",
      "Dhoraji",
      "Khambhat",
      "Mahuva",
      "Keshod",
      "Wadhwan",
      "Ankleshwar",
      "Savarkundla",
      "Kadi",
      "Visnagar",
      "Upleta",
      "Una",
      "Sidhpur",
      "Unjha",
      "Mangrol",
      "Viramgam",
      "Modasa",
      "Palitana",
      "Petlad",
      "Kapadvanj",
      "Sihor",
      "Wankaner",
      "Limbdi",
      "Mandvi",
      "Thangadh",
      "Vyara",
      "Padra",
      "Lunawada",
      "Rajpipla",
      "Vapi",
      "Umreth",
      "Sanand",
      "Rajula",
      "Radhanpur",
      "Mahemdabad",
      "Ranavav",
      "Tharad",
      "Mansa",
      "Umbergaon",
      "Talaja",
      "Vadnagar",
      "Manavadar",
      "Salaya",
      "Vijapur",
      "Pardi",
      "Rapar",
      "Songadh",
      "Lathi",
      "Adalaj",
      "Chhapra",
      "Gandhinagar"
    ],
    Telangana: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar",
      "Ramagundam",
      "Khammam",
      "Mahbubnagar",
      "Mancherial",
      "Adilabad",
      "Suryapet",
      "Jagtial",
      "Miryalaguda",
      "Nirmal",
      "Kamareddy",
      "Kothagudem",
      "Bodhan",
      "Palwancha",
      "Mandamarri",
      "Koratla",
      "Sircilla",
      "Tandur",
      "Siddipet",
      "Wanaparthy",
      "Kagaznagar",
      "Gadwal",
      "Sangareddy",
      "Bellampalle",
      "Bhongir",
      "Vikarabad",
      "Jangaon",
      "Bhadrachalam",
      "Bhainsa",
      "Farooqnagar",
      "Medak",
      "Narayanpet",
      "Sadasivpet",
      "Yellandu",
      "Manuguru",
      "Kyathampalle",
      "Nagarkurnool"
    ],
    Meghalaya: [
      "Shillong",
      "Tura",
      "Nongstoin"
    ],
    "Himachal Praddesh": [
      "Manali"
    ],
    "Arunachal Pradesh": [
      "Naharlagun",
      "Pasighat"
    ],
    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Thane",
      "Nashik",
      "Kalyan-Dombivali",
      "Vasai-Virar",
      "Solapur",
      "Mira-Bhayandar",
      "Bhiwandi",
      "Amravati",
      "Nanded-Waghala",
      "Sangli",
      "Malegaon",
      "Akola",
      "Latur",
      "Dhule",
      "Ahmednagar",
      "Ichalkaranji",
      "Parbhani",
      "Panvel",
      "Yavatmal",
      "Achalpur",
      "Osmanabad",
      "Nandurbar",
      "Satara",
      "Wardha",
      "Udgir",
      "Aurangabad",
      "Amalner",
      "Akot",
      "Pandharpur",
      "Shrirampur",
      "Parli",
      "Washim",
      "Ambejogai",
      "Manmad",
      "Ratnagiri",
      "Uran Islampur",
      "Pusad",
      "Sangamner",
      "Shirpur-Warwade",
      "Malkapur",
      "Wani",
      "Lonavla",
      "Talegaon Dabhade",
      "Anjangaon",
      "Umred",
      "Palghar",
      "Shegaon",
      "Ozar",
      "Phaltan",
      "Yevla",
      "Shahade",
      "Vita",
      "Umarkhed",
      "Warora",
      "Pachora",
      "Tumsar",
      "Manjlegaon",
      "Sillod",
      "Arvi",
      "Nandura",
      "Vaijapur",
      "Wadgaon Road",
      "Sailu",
      "Murtijapur",
      "Tasgaon",
      "Mehkar",
      "Yawal",
      "Pulgaon",
      "Nilanga",
      "Wai",
      "Umarga",
      "Paithan",
      "Rahuri",
      "Nawapur",
      "Tuljapur",
      "Morshi",
      "Purna",
      "Satana",
      "Pathri",
      "Sinnar",
      "Uchgaon",
      "Uran",
      "Pen",
      "Karjat",
      "Manwath",
      "Partur",
      "Sangole",
      "Mangrulpir",
      "Risod",
      "Shirur",
      "Savner",
      "Sasvad",
      "Pandharkaoda",
      "Talode",
      "Shrigonda",
      "Shirdi",
      "Raver",
      "Mukhed",
      "Rajura",
      "Vadgaon Kasba",
      "Tirora",
      "Mahad",
      "Lonar",
      "Sawantwadi",
      "Pathardi",
      "Pauni",
      "Ramtek",
      "Mul",
      "Soyagaon",
      "Mangalvedhe",
      "Narkhed",
      "Shendurjana",
      "Patur",
      "Mhaswad",
      "Loha",
      "Nandgaon",
      "Warud"
    ],
    Goa: [
      "Marmagao",
      "Panaji",
      "Margao",
      "Mapusa"
    ],
    "West Bengal": [
      "Kolkata",
      "Siliguri",
      "Asansol",
      "Raghunathganj",
      "Kharagpur",
      "Naihati",
      "English Bazar",
      "Baharampur",
      "Hugli-Chinsurah",
      "Raiganj",
      "Jalpaiguri",
      "Santipur",
      "Balurghat",
      "Medinipur",
      "Habra",
      "Ranaghat",
      "Bankura",
      "Nabadwip",
      "Darjiling",
      "Purulia",
      "Arambagh",
      "Tamluk",
      "AlipurdUrban Agglomerationr",
      "Suri",
      "Jhargram",
      "Gangarampur",
      "Rampurhat",
      "Kalimpong",
      "Sainthia",
      "Taki",
      "Murshidabad",
      "Memari",
      "Paschim Punropara",
      "Tarakeswar",
      "Sonamukhi",
      "PandUrban Agglomeration",
      "Mainaguri",
      "Malda",
      "Panchla",
      "Raghunathpur",
      "Mathabhanga",
      "Monoharpur",
      "Srirampore",
      "Adra"
    ]
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
        title: "Empowering Brighter Futures",
        desc: "Join Mother Teresa Educational Foundation in Ananthapuramu to achieve academic excellence and holistic development."
      },
      {
        image: hero2,
        title: "Innovate. Learn. Grow.",
        desc: "We provide quality education with modern facilities, expert faculty, and a student-centric approach."
      },
      {
        image: hero3,
        title: "Inspiring Lives, Shaping Careers",
        desc: "Discover endless opportunities and nurture your potential with our specialized programs and support."
      }
    ],

    courses: [
      {
        title: "ENGINEERING",
        list: [
          "ITI",
          "Polytechnic / Diploma",
          "B.Tech",
          "M.Tech"
        ],
        img: engineering,
      },
      {
        title: "MEDICAL",
        list: [
          "Pharmacy",
          "MBBS (Abroad)",
          "Nursing",
          "Agriculture"
        ],
        img: medical,
      },
      {
        title: "MANAGEMENT & COUNSELING",
        list: [
          "MBA",
          "Hotel Management",
          "Defence",
          "B.Ed",
          "D.Ed"
        ],
        img: managment,
      },
      {
        title: "EDUCATION",
        list: [
          "10th Class",
          "INTER (All Groups)",
          "Degree (All Groups)",
          "PG"
        ],
        img: distance,
      }
    ]
    ,
    rankedInstitutes: [
      {
        img: auro,
        name: "Auro University",
        place: "Surat"
      },
      {
        img: iba,
        name: "Indus Business Academy (IBA)",
        place: "Bangalore"
      },
      {
        img: iicmt,
        name: "Institute of Industrial and Computer Management and Research",
        place: "Pune"
      },
      {
        img: jagsom,
        name: "Jagdish Sheth School of Management ( JAGSOM formerly known as IFIM Business School)",
        place: "Bangalore"
      },
      {
        img: isbr,
        name: "Institute of Industrial and Computer Management and Research",
        place: "Pune"
      },
      {
        img: ISBS,
        name: "Indira School of Business Studies",
        place: "Pune"
      },
      {
        img: itm,
        name: "ITM Navi Mumbai",
        place: "Mumbai"
      },
      {
        img: isbm,
        name: "International School of Business and Media",
        place: "Pune"
      },

      {
        img: gims,
        name: "GNIOT Institute of Management Studies (GIMS)",
        place: "Delhi & NCR"
      },
      {
        img: patil,
        name: "Dr. D.Y. Patil Vidyapeeth (GBSRC)",
        place: "Pune"
      },
      {
        img: nbs,
        name: "Narayana Business School (NBS)",
        place: "Ahmedabad"
      },
      {
        img: pgdm,
        name: "ITM Navi Mumbai",
        place: "Mumbai"
      },
      {
        img: pgdm2,
        name: "Indira School of Business Studies",
        place: "Pune"
      },
      {
        img: pgmd,
        name: "Dr. D.Y. Patil B-School Details",
        place: "Pune"
      },
      {
        img: rcm,
        name: "Regional College of Management (RCM) / (PGDM+ IBC)",
        place: "Bangalore"
      },
      {
        img: sbs,
        name: "Shanti Business School (SBS)",
        place: "Ahmedabad"
      }
    ],

    testimonials: [
      {
        img: at_1,
        name: "Anjali Reddy",
        review:
          "Mother Teresa Educational Foundation has transformed my learning experience in ways I never imagined. The faculty not only teaches but truly understands the challenges students face. They constantly encourage us to stay focused and believe in ourselves. The atmosphere here motivates me to aim higher every single day. From improving my study habits to helping me build confidence in communication, the foundation has played a major role in shaping who I am today. I genuinely feel supported, valued, and guided at every step."
      },
      {
        img: at_2,
        name: "Rakesh Kumar",
        review:
          "Joining the foundation has been one of the best decisions I’ve made for my educational journey. The individual attention we receive is something rare. Teachers ensure every concept is crystal clear, and they always push us to think critically and creatively. The doubt sessions, discussions, and regular feedback helped me improve consistently. Beyond academics, the mentors here help us build discipline, time management, and confidence. I feel prepared for my future because of the strong foundation they have given me."
      },
      {
        img: at_4,
        name: "Sowmya Devi",
        review:
          "Before joining the foundation, I was unsure about my strengths and career direction. But the environment here changed everything. The faculty helped me identify my abilities and guided me with patience and care. The classes are interactive, practical, and focused on real understanding rather than just memorizing. I love how the institution ensures students develop not only academically but also emotionally and socially. Today, I am more confident in my career choices and feel empowered to chase my goals thanks to their constant motivation."
      },
      {
        img: at_3,
        name: "Praveen Reddy",
        review:
          "What makes this foundation truly stand out is the dedication of the mentors. They always take extra time to explain things until everyone understands. Their mentorship helped me overcome my hesitation and communicate more confidently. The workshops, training sessions, and regular assessments gave me the discipline and clarity I needed. I can proudly say that the guidance I received here has prepared me well for future challenges, both academically and personally. It’s more than just an institution – it’s a family."
      },
      {
        img: at_6,
        name: "Neha Sharma",
        review:
          "The foundation provides a nurturing environment where students are encouraged to explore, express, and grow. Every day here has helped me improve in different ways—whether academically, creatively, or emotionally. The teachers not only educate but inspire and support us like guardians. I have become more confident, responsible, and self-driven because of their constant encouragement. I highly recommend this foundation to students who want quality education with genuine care and personal attention."
      },
      {
        img: at_5,
        name: "Vikram Singh",
        review:
          "What I appreciate most about the foundation is its holistic approach to education. It is not just about scoring marks; it’s about developing skills, confidence, and clarity. The career guidance sessions, interactive classes, and personalized mentorship have helped me become more focused and ambitious. The faculty is approachable, knowledgeable, and always ready to help, no matter how many doubts we ask. I feel much more confident about my abilities and future path because of the constant support and structured training provided here."
      }
    ]

  }
  const about = {
    counters: [
      { number: 10000, label: "Enrolled +" },
      { number: 100, label: "Colleges & Universities +" },
      { number: 50, label: "Courses +" },
      { number: 1000, label: "Counsellors +" },
    ],
  }
  const Links_Address = {
    socials: [
      { icon: BsInstagram, url: "https://instagram.com" },
      { icon: BsFacebook, url: "https://facebook.com" },
      { icon: BsLinkedin, url: "https://linkedin.com" },
      { icon: BsTwitter, url: "https://twitter.com" },
      { icon: BsYoutube, url: "https://youtube.com" }
    ],

    contact: [
      { icon: BsTelephoneFill, text: "+91 88857 727716 & +91 63035 11233" },
      { icon: BsEnvelopeFill, text: "support@yourdomain.com" },
      { icon: BsGeoAltFill, text: "Sri Skanda Residency, Dwaraka (Chalama Reddy), IOC Petrol Bunk Backside, Opp.Sri Chaitanya Junior Collage, Near RTC Bus Stan, Ananthapuramu - 515001, A.P." }
    ],

    map: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d899.6066063852431!2d77.60121168303333!3d14.68651808772237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1764646362318!5m2!1sen!2sin"
    }

  }
  const Team = {
    teamData: [
      {
        img: avatar1,
        name: "Rahul Sharma",
        role: "Founder & CEO",
      },
      {
        img: avatar2,
        name: "Namesh",
        role: "Academic Head",
      },
      {
        img: avatar3,
        name: "Amit Verma",
        role: "Counsellor",
      },
      {
        img: avatar4,
        name: "Jaya Simha",
        role: "Counsellor",
      }
    ]
  }
  const ourClients = {
    clients: [
      { img: vit, name: "VIT", place: "Chennai" },
      { img: AMRITA, name: "AMRITA", place: "Chennai" },
      { img: SRM, name: "SRM", place: "Chennai" },
      { img: RMK, name: "RMK", place: "Chennai" },
      { img: SSN, name: "SSN", place: "Chennai" },
      { img: hindustan, name: "HINDUSTAN", place: "Chennai" },
      { img: VELTECH, name: "VELTECH", place: "Chennai" },
      { img: JANSHON, name: "JANSHON", place: "Chennai" },
      { img: mgr, name: "MGR DEEMED TO BE UNIVERSITY", place: "Chennai" },
      { img: DLM, name: "DHANALAKSHMI UNIVERSITY", place: "Chennai" },
      { img: SAVITHA, name: "SAVITHA", place: "Chennai" },
      { img: SATHYABAMA, name: "SATHYABAMA", place: "Chennai" },
      { img: ARJUN, name: "ARJUN", place: "Chennai" },
      { img: ku, name: "KALASALINGAM UNIVERSITY", place: "Chennai" },
      { img: TU, name: "TAKSHASHILA UNIVERSITY", place: "Chennai" },
      { img: RV, name: "RV", place: "Bangalore" },
      { img: BMSC, name: "BMSC", place: "Bangalore" },
      { img: BMSIT, name: "BMSIT", place: "Bangalore" },
      { img: MS, name: "M S RAMAIAH", place: "Bangalore" },
      { img: PES, name: "PES", place: "Bangalore" },
      { img: CHRIST, name: "CHRIST", place: "Bangalore" },
      { img: DS, name: "DAYANANDA SAGAR", place: "Bangalore" },
      { img: NH, name: "NEW HORIZON", place: "Bangalore" },
      { img: AU, name: "ALLIANCE UNIVERSITY", place: "Bangalore" },
      { img: HKBKBNG, name: "HKBK", place: "Bangalore" },
      { img: SJCIT, name: "SJCIT", place: "Bangalore" },
      { img: NAGARJUNA, name: "NAGARJUNA", place: "Bangalore" },
      { img: ATRIA, name: "ATRIA", place: "Bangalore" },
      { img: BGS, name: "BGS", place: "Bangalore" },
      { img: CMR, name: "CMR IT", place: "Bangalore" },
      { img: UNCMR, name: "CMR UNIVERSITY", place: "Bangalore" },
      { img: REVA, name: "REVA", place: "Bangalore" },
      { img: GARDEN, name: "GARDEN CITY UNIVERSITY", place: "Bangalore" },
      { img: BRINDAVAN, name: "BRINDAVAN COLLEGE", place: "Bangalore" },
      { img: JAINCOLLGE, name: "JAIN", place: "Bangalore" },
      { img: IMPACT, name: "IMPACT COLLEGE", place: "Bangalore" },
      { img: NIITMEENAKSHI, name: "NIIT MEENAKSHI", place: "Bangalore" },
      { img: ACHARYA, name: "ACHARYA", place: "Bangalore" },
    ],
   newClients: [
  {
    img: commonImg,
    intution: "Academy for Learning Pre-University College",
    campus: "Raja Reddy Layout",
    address: "Raja Reddy Layout, Hesaraghatta Main Road, Chikkabanavara, Bangalore."
  },
  {
    img: commonImg,
    intution: "ACS College",
    campus: "Kambipura",
    address: "Kambipura, Mysore Road, Bangalore"
  },
  {
    img: commonImg,
    intution: "Adani University",
    campus: "Shantigram",
    address: "nr. Vaishnodevi Circle, Shantigram, Khodiyar, Ahmedabad, Gujarat"
  },
  {
    img: commonImg,
    intution: "Adarsh Institute of Management & Information Technology",
    campus: "Chamarajpet",
    address: "5th Main, Chamarajpet, Bangalore, Karnataka, India"
  },
  {
    img: commonImg,
    intution: "AIMS Institutes",
    campus: "Peenya",
    address: "1st Cross, 1st Stage, Peenya, Bengaluru, Karnataka, India"
  },
  {
    img: commonImg,
    intution: "Al-Ameen Pre University College",
    campus: "Hosur Road",
    address: "Behind Al-Ameen Towers, Near Lalbagh Main Gate, Bangalore"
  },
  {
    img: commonImg,
    intution: "Alard University",
    campus: "Rajiv Gandhi IT Park",
    address: "Survey No. 47 & 50, Near Rajiv Gandhi IT Park, Marunji, Hinjawadi, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "Alliance University",
    campus: "Anekal",
    address: "Chikkahagade Cross, Chandapura–Anekal Main Road, Anekal, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Alliance Ascent College",
    campus: "BTM 2nd Stage",
    address: "19th Cross, 7th Main, N.S. Palya, BTM 2nd Stage, Bengaluru"
  },
  {
    img: commonImg,
    intution: "Alva's Institute of Engineering and Technology",
    campus: "Moodbidri",
    address: "Solapur–Mangalore Highway, Shobhavana Campus, MIJAR, Moodbidri, Karnataka"
  },
  {
    img: commonImg,
    intution: "Amity University",
    campus: "Bengaluru (Devanahalli)",
    address: "NH-648, Devanahalli–Doddaballapur Road, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Amity University",
    campus: "Chhattisgarh",
    address: "State Highway 9, Raipur–Baloda Bazar Marg, Raipur, Chhattisgarh"
  },
  {
    img: commonImg,
    intution: "Amity University",
    campus: "Gurgaon",
    address: "Amity Education Valley, Pachgaon, Gurugram, Haryana"
  },
  {
    img: commonImg,
    intution: "Amity University",
    campus: "Jaipur",
    address: "NH-11, Jaipur–Ajmer Highway, Jaipur, Rajasthan"
  },
  {
    img: commonImg,
    intution: "Amity University",
    campus: "Kolkata",
    address: "Major Arterial Road, Action Area-II, New Town, Kolkata, West Bengal"
  },
  {
    img: commonImg,
    intution: "Amity University",
    campus: "Patna",
    address: "Bailey Road, Rupaspur, Patna, Bihar"
  },
  {
    img: commonImg,
    intution: "Amrita Vishwa Vidyapeetham",
    campus: "Amaravati",
    address: "Kuragallu Village, Mangalagiri Mandal, Guntur, Andhra Pradesh"
  },
  {
    img: commonImg,
    intution: "Amrita Vishwa Vidyapeetham",
    campus: "Amritapuri",
    address: "Amritapuri, Clappana, Vallikavu, Kerala"
  },
  {
    img: commonImg,
    intution: "Amrita Vishwa Vidyapeetham",
    campus: "Bengaluru",
    address: "Amrita Nagar, Choodasandra, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Anant National University",
    campus: "Sanskardham",
    address: "Near S.P. Ring Road, Bopal–Ghuma, Ahmedabad, Gujarat"
  },
  {
    img: commonImg,
    intution: "Apeejay Stya University",
    campus: "Gurugram",
    address: "Palwal–Sohna Road, Gurugram, Haryana"
  },
  {
    img: commonImg,
    intution: "Arihanth Pre-University College",
    campus: "Thalaghattapura",
    address: "Opp. Metro Pillar No.275, Thalaghattapura, Bengaluru"
  },
  {
    img: commonImg,
    intution: "Arihanth Pre-University College",
    campus: "V.V. Puram",
    address: "148, R.V. Road, V.V. Puram, Bengaluru"
  },
  {
    img: commonImg,
    intution: "Ashoka University",
    campus: "Sonipat",
    address: "Rajiv Gandhi Education City, Sonepat, Haryana"
  },
  {
    img: commonImg,
    intution: "Asian Business School",
    campus: "Noida",
    address: "Plot A2, Sector 125, Noida, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "Atlas Skilltech University",
    campus: "Ambedkar Nagar",
    address: "Equinox Business Park, Ambedkar Nagar, Kurla West, Mumbai, Maharashtra"
  },
  {
    img: commonImg,
    intution: "Auro University",
    campus: "Earthspace, Surat",
    address: "AURO University, Earthspace, Hazira Road, Surat, Gujarat, India"
  },
  {
    img: commonImg,
    intution: "Azim Premji University",
    campus: "Bengaluru (Sarjapura)",
    address: "Burugunte Village, Bikkanahalli Main Road, Sarjapura, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Azim Premji University",
    campus: "Bhopal",
    address: "Bhopal–Vidisha Bypass Road, Kanhasaiya, Tehsil Huzur, Bhopal, Madhya Pradesh"
  },
  {
    img: commonImg,
    intution: "Bangalore City College",
    campus: "Banaswadi",
    address: "160, Chelekere Main Road, Banaswadi Outer Ring Road, Bengaluru"
  },
  {
    img: commonImg,
    intution: "Bangalore Institute of Technology",
    campus: "V V Pura",
    address: "K R Road, V V Pura, Bengaluru, Karnataka, India"
  },
  {
    img: commonImg,
    intution: "Bennett University",
    campus: "Greater Noida",
    address: "Plot Nos. 8–11, Tech Zone II, Greater Noida, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "BLDE University",
    campus: "Bijapur",
    address: "Smt. Bangaramma Sajjan Campus, B M Patil Road, Vijayapura, Karnataka"
  },
  {
    img: commonImg,
    intution: "BML Munjal University",
    campus: "Gurugram",
    address: "NH-48, 67th Milestone, Gurugram, Haryana"
  },
  {
    img: commonImg,
    intution: "BMS College for Women",
    campus: "Basavanagudi",
    address: "Bugle Rock Road, Basavanagudi, Bangalore, Karnataka"
  },
  {
    img: commonImg,
    intution: "BMS College of Architecture, Design and Planning",
    campus: "Bull Temple Road",
    address: "Bull Temple Road, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "BMS College of Engineering",
    campus: "Bull Temple Road",
    address: "P.O. Box No. 1908, Bull Temple Road, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "BMS Institute of Technology and Management",
    campus: "Doddaballapur Main Road",
    address: "Avalahalli, Yelahanka, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "BMS PU College for Women",
    campus: "Basavanagudi",
    address: "Bugle Rock Park Road, Basavanagudi, Bengaluru"
  },
  {
    img: commonImg,
    intution: "BMS School of Architecture",
    campus: "Doddaballapur",
    address: "Off BMSIT Campus, Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru"
  },
  {
    img: commonImg,
    intution: "B.N.M. Institute of Technology",
    campus: "Banashankari",
    address: "12th Main Road, 27th Cross, Banashankari Stage II, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Brainware University",
    campus: "Barasat",
    address: "398, Ramkrishnapur Road, Barasat, Kolkata, West Bengal"
  },
  {
    img: commonImg,
    intution: "Brindavan Group of Institutions",
    campus: "Yelahanka",
    address: "Dwarakanagar, Bagalur Main Road, Yelahanka, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "BTL PU College",
    campus: "Bommasandra",
    address: "259/B, Hosur Road, Bommasandra Industrial Area, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "C B Bhandari Jain College",
    campus: "Shankarpuram",
    address: "#84, K.R. Road, Shankarpuram, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Chanakya University",
    campus: "Devanahalli",
    address: "Global Campus, near Bengaluru International Airport, Devanahalli, Karnataka"
  },
  {
    img: commonImg,
    intution: "Chandigarh University",
    campus: "Mohali",
    address: "NH-05, Chandigarh–Ludhiana Highway, Mohali, Punjab"
  },
  {
    img: commonImg,
    intution: "Chitkara University",
    campus: "Himachal Pradesh",
    address: "Pinjore–Barotiwala National Highway (NH-105), Himachal Pradesh"
  },
  {
    img: commonImg,
    intution: "Christ Academy Institute for Advanced Studies",
    campus: "Begur–Koppa Road",
    address: "Christ Nagar, Hullahalli, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "City Engineering College",
    campus: "Kanakapura Road",
    address: "Doddakallasandra, Off Kanakapura Road, Bengaluru"
  },
  {
    img: commonImg,
    intution: "CMR University",
    campus: "City Campus, Kalyan Nagar",
    address: "HRBR Layout, 2nd Block, Kalyan Nagar, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "CMR University",
    campus: "Lakeside Campus, Bagalur Main Road",
    address: "Near Kempegowda International Airport, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "CMR University",
    campus: "OMBR Campus, Banaswadi",
    address: "Chikka Banaswadi Road, Banaswadi, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Dayananda Sagar Academy of Technology and Management",
    campus: "Kanakapura Main Road",
    address: "Opp. Art of Living International Centre, Udayapura, Bengaluru"
  },
  {
    img: commonImg,
    intution: "Dayananda Sagar College of Engineering",
    campus: "Kumaraswamy Layout",
    address: "Mahatma Gandhi Vidya Peetha Trust, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Dayananda Sagar University",
    campus: "City Innovation Campus, Hosur Road",
    address: "Administrative Office, Kudlu Gate, Hosur Road, Bengaluru"
  },
  {
    img: commonImg,
    intution: "Dayananda Sagar University",
    campus: "Main Campus, Harohalli",
    address: "Kanakapura Road, Ramanagara District, Karnataka"
  },
  {
    img: commonImg,
    intution: "DES Pune University",
    campus: "Shivajinagar",
    address: "BMCC Campus, Agarkar Road, Shivajinagar, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "Dhirubhai Ambani Institute of Information and Communication Technology",
    campus: "Gandhinagar",
    address: "DA-IICT Road, Near Indroda Circle, Gandhinagar, Gujarat"
  },
  {
    img: commonImg,
    intution: "Don Bosco College",
    campus: "K R Puram",
    address: "Bosco Nagar, TC Palya, K.R. Puram, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Don Bosco Institute of Technology",
    campus: "Kumbalgodu",
    address: "State Highway 17, Kumbalgodu, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Doon Business School (DBS Global University)",
    campus: "Dehradun",
    address: "Selaqui Industrial Area, Dehradun, Uttarakhand"
  },
  {
    img: commonImg,
    intution: "Dr. A.P.J. Abdul Kalam University",
    campus: "Indore",
    address: "Indore–Dewas Bypass Road, Arandia Village, Indore, Madhya Pradesh"
  },
  {
    img: commonImg,
    intution: "D Y Patil Business School",
    campus: "Pimpri",
    address: "Sant Tukaram Nagar, Pimpri, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "D Y Patil International University",
    campus: "Akurdi",
    address: "Sector 29, Nigdi Pradhikaran, Akurdi, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "Galgotias University",
    campus: "Greater Noida",
    address: "Yamuna Expressway, Sector 17A, Greater Noida, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "Ganpat University",
    campus: "Ganpat Vidyanagar",
    address: "Mehsana–Gandhinagar Highway, North Gujarat, India"
  },
  {
    img: commonImg,
    intution: "Garden City University",
    campus: "Old Madras Road",
    address: "16th KM, Old Madras Road, Bengaluru"
  },
  {
    img: commonImg,
    intution: "G.H Raisoni Skill Tech University",
    campus: "Nagpur",
    address: "Hingna–Wadi Link Road, Nagpur, Maharashtra"
  },
  {
    img: commonImg,
    intution: "GITAM Deemed to be University",
    campus: "Bangalore",
    address: "NH 207, Doddaballapura, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "GITAM Deemed to be University",
    campus: "Visakhapatnam",
    address: "Rushikonda, Gandhi Nagar, Visakhapatnam, Andhra Pradesh"
  },
  {
    img: commonImg,
    intution: "GITAM Deemed to be University",
    campus: "Hyderabad",
    address: "Rudraram, Patancheru Mandal, Telangana"
  },
  {
    img: commonImg,
    intution: "Global Academy of Technology",
    campus: "Rajarajeshwari Nagar",
    address: "Aditya Layout, Rajarajeshwari Nagar, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Global Institute of Business Studies",
    campus: "Mylasandra Road",
    address: "Off Begur–Koppa Road, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "GRV Group of Institutions",
    campus: "Ganganagar",
    address: "Dena Bank Colony, Ganganagar, Bengaluru"
  },
  {
    img: commonImg,
    intution: "GRV Institute of Medical Sciences",
    campus: "Devanahalli Taluk",
    address: "Arasanahalli, IVC Road, Devanahalli Taluk, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Haridwar University",
    campus: "Roorkee",
    address: "Upper Ganga Canal Road, Bajuheri, Roorkee, Uttarakhand"
  },
  {
    img: commonImg,
    intution: "HKBK Group of Institutions",
    campus: "Nagawara",
    address: "Opp. Manyata Tech Park, Nagawara, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "HRIT University",
    campus: "Ghaziabad",
    address: "Meerut Road, Near Duhai Rapid Rail Station, Ghaziabad, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Ahmedabad",
    address: "Annapurna Dham, Por, Adalaj–Koba Road, Ahmedabad, Gujarat"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Bangalore",
    address: "Near Check Post, Mysore Road, Kengeri, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Dehradun",
    address: "Selaqui–Rajawala Road, Central Hope Town, Dehradun, Uttarakhand"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Gurgaon",
    address: "Golf Course Extension Road, Sector 62, Gurugram, Haryana"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Hyderabad",
    address: "Donthanapally, Shankarapalli Road, Hyderabad, Telangana"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Jaipur",
    address: "Jamdoli, Agra Road, Jaipur, Rajasthan"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Kolkata",
    address: "Sector V, Salt Lake City, Kolkata, West Bengal"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Mumbai",
    address: "Hiranandani Knowledge Park, Powai, Mumbai, Maharashtra"
  },
  {
    img: commonImg,
    intution: "ICFAI Business School",
    campus: "Pune",
    address: "Hadapsar, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "IES University",
    campus: "Ratibad",
    address: "Ratibad Main Road, Bhopal, Madhya Pradesh"
  },
  {
    img: commonImg,
    intution: "IFIM College",
    campus: "Electronic City",
    address: "KIADB Industrial Area, Electronics City Phase 1, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "IFTM University",
    campus: "Moradabad",
    address: "Delhi Road, Lodhipur Rajput, Moradabad, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "IIHMR University",
    campus: "Jaipur",
    address: "Prabhu Dayal Marg, Near Sanganer Airport, Jaipur, Rajasthan"
  },
  {
    img: commonImg,
    intution: "IILM University",
    campus: "Greater Noida",
    address: "Knowledge Park II, Greater Noida, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "IILM University",
    campus: "Gurugram",
    address: "Sector 53, Golf Course Road, Gurugram, Haryana"
  },
  {
    img: commonImg,
    intution: "IILM University",
    campus: "Jaipur",
    address: "Pratap Nagar, Sanganer, Jaipur, Rajasthan"
  },
  {
    img: commonImg,
    intution: "IILM University",
    campus: "Lucknow",
    address: "Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "IMS Unison University",
    campus: "Dehradun",
    address: "Mussoorie Diversion Road, Dehradun, Uttarakhand"
  },
  {
    img: commonImg,
    intution: "Indian Academy Pre-University College",
    campus: "Hennur",
    address: "Hennur Main Road, Kalyan Nagar, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Indo Asian Academy Degree College",
    campus: "Kalyan Nagar",
    address: "Outer Ring Road, Near Indo Asian Bus Stop, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Indus Business Academy",
    campus: "Kanakapura Road",
    address: "Lakshmipura, Thataguni Post, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Institute of Business Management and Research (IBMR)",
    campus: "Yelahanka",
    address: "9th A Cross, A Sector, Yelahanka New Town, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Institute of Salutogenesis and Complementary Medicine",
    campus: "Pillayarkuppam",
    address: "MGMCRI Hospital Road, Pillayarkuppam, Puducherry"
  },
  {
    img: commonImg,
    intution: "International Institute of Business Studies (IIBS)",
    campus: "Begur",
    address: "Muthugadahalli, Bangalore North, Begur, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "ISBM University",
    campus: "Nawapara",
    address: "Vill-Nawapara (Kosmi), Chhura Block, Gariyaband District"
  },
  {
    img: commonImg,
    intution: "ISME",
    campus: "Sarjapur Road",
    address: "Chembanahalli, Near Dommasandra Circle, Sarjapur Road, Bengaluru"
  },
  {
    img: commonImg,
    intution: "ITM Skills University",
    campus: "Kharghar",
    address: "Institutional Area, Kharghar, Navi Mumbai"
  },
  {
    img: commonImg,
    intution: "ITM University",
    campus: "Raipur",
    address: "Sector 40, Atal Nagar, Nava Raipur, Chhattisgarh"
  },
  {
    img: commonImg,
    intution: "Jagannath University",
    campus: "Jaipur",
    address: "Chaksu Bypass, Tonk Road, Jaipur, Rajasthan"
  },
  {
    img: commonImg,
    intution: "Jagan Nath University",
    campus: "Jhajjar",
    address: "Bahadurgarh–Jhajjar Road, Jhajjar, Haryana"
  },
  {
    img: commonImg,
    intution: "Jagran LakeCity University",
    campus: "Bhopal",
    address: "Mugaliyachap, Near Ratibad, Bhopal, Madhya Pradesh"
  },
  {
    img: commonImg,
    intution: "Jaypee Institute of Information Technology",
    campus: "Noida",
    address: "Sector 62, Noida, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "JSPM University",
    campus: "Pune",
    address: "Katraj Chowk, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "JSS Science and Technology University",
    campus: "Mysuru",
    address: "University of Mysore Campus, Mysuru, Karnataka"
  },
  {
    img: commonImg,
    intution: "JSS University",
    campus: "Noida",
    address: "Sector 62, Noida, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "Karnavati University",
    campus: "Uvarsad",
    address: "Adalaj–Uvarsad Road, Gandhinagar, Gujarat"
  },
  {
    img: commonImg,
    intution: "Khalsa University",
    campus: "Amritsar",
    address: "GT Road, Near Guru Nanak Dev University, Amritsar, Punjab"
  },
  {
    img: commonImg,
    intution: "KLE Law College",
    campus: "Bengaluru",
    address: "Sir M. Vishweshwaraiah Layout, Ullal, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "KLE Technological University",
    campus: "Hubballi",
    address: "Gokul Road, Hubballi, Karnataka"
  },
  {
    img: commonImg,
    intution: "Koshys Group of Institutions",
    campus: "Hennur-Bagalur Road",
    address: "Kannur Post, Hennur-Bagalur Road, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Kristu Jayanti University",
    campus: "K. Narayanapura",
    address: "Kothanur Post, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "K R Mangalam University",
    campus: "Gurugram",
    address: "Sohna Road, Gurugram, Haryana"
  },
  {
    img: commonImg,
    intution: "Krupanidhi Group of Institutions",
    campus: "Sarjapur Road",
    address: "Chikka Bellandur, Carmelaram Post, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Krupanidhi Pre University College",
    campus: "Sarjapur Road",
    address: "Chikka Bellandur, Carmelaram Post, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Lexicon Mile",
    campus: "Wagholi, Pune",
    address: "GAT No. 726, Pune–Nagar Road, Wagholi, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "Maharaja Agrasen Himalayan Garhwal University",
    campus: "Pauri Garhwal",
    address: "Dhaid Gaon, Pokhra Block, Pauri Garhwal, Uttarakhand"
  },
  {
    img: commonImg,
    intution: "Maharishi Markandeshwar University",
    campus: "Himachal Pradesh",
    address: "Bajoral Khurd, Solan, Himachal Pradesh"
  },
  {
    img: commonImg,
    intution: "Malla Reddy University",
    campus: "Maisammaguda",
    address: "Maisammaguda, Dulapally, Hyderabad, Telangana"
  },
  {
    img: commonImg,
    intution: "Mangalmay Group of Institutions",
    campus: "Greater Noida",
    address: "Knowledge Park II, Greater Noida, Uttar Pradesh"
  },
  {
    img: commonImg,
    intution: "Manipal Academy of Higher Education",
    campus: "Bengaluru",
    address: "BSF Campus, Govindapura, Yelahanka, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Manipal Academy of Higher Education",
    campus: "Jamshedpur",
    address: "Kadani Road, Baridih, Jamshedpur, Jharkhand"
  },
  {
    img: commonImg,
    intution: "Manipal Academy of Higher Education",
    campus: "Mangaluru",
    address: "Hampankatta, Mangaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Manipal Academy of Higher Education",
    campus: "Manipal",
    address: "Madhav Nagar, Manipal, Udupi District, Karnataka"
  },
  {
    img: commonImg,
    intution: "Meenakshi Ammal Dental College & Hospital",
    campus: "Janaki Nagar",
    address: "Alapakkam Main Road, Janaki Nagar, Chennai, Tamil Nadu"
  },
  {
    img: commonImg,
    intution: "Meenakshi College of Allied Health Sciences",
    campus: "Kottakudi",
    address: "Kottakudi, Melur Taluk, Tamil Nadu"
  },
  {
    img: commonImg,
    intution: "Meenakshi College of Physiotherapy",
    campus: "K. K. Nagar West",
    address: "Vembuliamman Koil Street, Chennai, Tamil Nadu"
  },
  {
    img: commonImg,
    intution: "MIT Art Design and Technology University",
    campus: "Rajbaug",
    address: "Loni Kalbhor, Solapur Highway, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "MIT Vishwaprayag University",
    campus: "Solapur",
    address: "Solapur–Pune Highway, Kegaon, Solapur, Maharashtra"
  },
  {
    img: commonImg,
    intution: "MIT World Peace University",
    campus: "Kothrud",
    address: "Paud Road, Kothrud, Pune, Maharashtra"
  },
  {
    img: commonImg,
    intution: "MKPM RV Institute of Legal Studies",
    campus: "Jayanagar",
    address: "22nd Cross Road, Jayanagar 3rd Block East, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Mohan Babu University",
    campus: "Tirupati",
    address: "Sree Sainath Nagar, Tirupati, Andhra Pradesh"
  },
  {
    img: commonImg,
    intution: "Mount Carmel College",
    campus: "Vasanthnagar",
    address: "Palace Road, Vasanthnagar, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Mount Carmel Pre-University College",
    campus: "Vasanthnagar",
    address: "Palace Road, Vasanthnagar, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "M. P. Birla Institute of Management",
    campus: "Race Course Road",
    address: "Associates Bharatiya Vidya Bhavan, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "MS Ramaiah Foundation (RIBS)",
    campus: "Gokula Extension",
    address: "M.S. Ramaiah Road, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "MS Ramaiah Foundation (RIMS)",
    campus: "Gokula Extension",
    address: "M.S. Ramaiah Road, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "MS Ramaiah University of Applied Sciences",
    campus: "Mathikere",
    address: "New BEL Road, Mathikere, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "MVM Educational Institutions",
    campus: "Yelahanka",
    address: "Vikas Layout, Yelahanka, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "MYRA School of Business",
    campus: "Mysuru",
    address: "Near Infosys, Yelwal, Mysuru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Nagarjuna College of Engineering & Technology",
    campus: "Devanahalli",
    address: "Beedaganahalli, Devanahalli, Bengaluru, Karnataka"
  },
  {
    img: commonImg,
    intution: "Nagarjuna College of Management Studies",
    campus: "Chikkamarali",
    address: "NCET Campus, Chikkamarali, Chikkaballapur, Karnataka"
  }
]

  }
  return (
    <AppContext.Provider value={{
      logo,
      menus,
      Button,
      home,
      indiaData,

      selectedState,
      setSelectedState, // ✅ ADD
      cities,
      setCities,        // ✅ ADD
      handleStateChange,

      about,
      Team,
      ourClients,
      Links_Address,
      footer
    }}>
      {children}
    </AppContext.Provider>

  );
};

export const useApp = () => useContext(AppContext);
