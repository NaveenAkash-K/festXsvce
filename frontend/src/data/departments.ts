import ae from "../assets/auto.jpg";
import bt from "../assets/biotech.jpeg";
import ce from "../assets/chemical.jpg";
import civil from "../assets/civil.jpg";
import cs from "../assets/cs.webp";
import ece from "../assets/ece.jpg";
import eee from "../assets/eee.jpeg";
import it from "../assets/IT.jpg";
import me from "../assets/mech.webp";
import club from "../assets/clubs.png";
import workshops from "../assets/workshop.jpg";
import pros from "../assets/proshow.jpg";

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
