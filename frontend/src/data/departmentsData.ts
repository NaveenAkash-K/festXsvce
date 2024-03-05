import ae from "../assets/images/departments/auto.png";
import bt from "../assets/images/departments/biotech.png";
import ce from "../assets/images/departments/chemical.png";
import civil from "../assets/images/departments/civil.png";
import cs from "../assets/images/departments/cs.png";
import ece from "../assets/images/departments/ece.png";
import eee from "../assets/images/departments/eee.png";
import it from "../assets/images/departments/IT.png";
import me from "../assets/images/departments/mech.png";
import club from "../assets/images/departments/csi.png";
import ieee from "../assets/images/departments/ieee.png";
import bgmi from "../assets/images/departments/BGMI.png";
import marine from "../assets/images/departments/Marine.png";
// import workshops from "../assets/images/departments/IT.webp";
// import pros from "../assets/images/proshow.webp";

const departmentsData: {
  id: string;
  name: string;
  img: string;
}[] = [
  { id: "auto", name: "Automobile Engineering", img: ae },
  { id: "bio", name: "BioTechnology", img: bt },
  { id: "chem", name: "Chemical Engineering", img: ce },
  { id: "civil", name: "Civil Engineering", img: civil },
  { id: "cse", name: "Computer Science", img: cs },
  { id: "csi_club", name: "CSI Student Chapter", img: club },
  { id: "ece", name: "Electrical & Communication Engineering", img: ece },
  { id: "eee", name: "Electrical & Electronics Engineering", img: eee },
  { id: "ieee_club", name: "IEEE SVCE Student Branch", img: ieee },
  { id: "int", name: "Information Technology", img: it },
  { id: "marine", name: "Marine Engineering", img: marine },
  { id: "mech", name: "Mechanical Engineering", img: me },
  { id: "bgmi", name: "BGMI", img: bgmi },
  // { id: "workshops", name: "Workshops", img: workshops },
  // { id: "proshows", name: "Proshows", img: pros },
];

export default departmentsData;
