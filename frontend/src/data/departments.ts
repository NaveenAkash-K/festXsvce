import ae from "../assets/images/departments/auto.jpg";
import bt from "../assets/images/departments/biotech.jpeg";
import ce from "../assets/images/departments/chemical.jpg";
import civil from "../assets/images/departments/civil.jpg";
import cs from "../assets/images/departments/cs.webp";
import ece from "../assets/images/departments/ece.jpg";
import eee from "../assets/images/departments/eee.jpeg";
import it from "../assets/images/departments/IT.jpg";
import me from "../assets/images/departments/mech.webp";
import club from "../assets/images/departments/clubs.png";
import workshops from "../assets/images/departments/workshop.jpg";
import pros from "../assets/images/proshow.jpg";

const departments: {
  id: string;
  name: string;
  img: string;
}[] = [
  { id: "auto", name: "Automobile Engineering", img: ae },
  { id: "bio", name: "BioTechnology", img: bt },
  { id: "chm", name: "Chemical Engineering", img: ce },
  { id: "civil", name: "Civil Engineering", img: civil },
  { id: "cse", name: "Computer Science", img: cs },
  { id: "ece", name: "ECE", img: ece },
  { id: "eee", name: "EEE", img: eee },
  { id: "int", name: "Information Technology", img: it },
  { id: "mech", name: "Mechanical Engineering", img: me },
  { id: "clubs", name: "Clubs", img: club },
  { id: "workshops", name: "Workshops", img: workshops },
  { id: "proshows", name: "Proshows", img: pros },
];

export default departments;
