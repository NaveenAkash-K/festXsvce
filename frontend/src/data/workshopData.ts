const workshopData: {
  id: Number;
  dept: String;
  name: String;
  duration: String;
  shrtDesc: String;
  desc: String[];
  venue: String;
  req: String[];
  day:String;
  maxPeople: Number | null;
  rules:String[] | null;
  coord:String[];
  ph:String | null
}[] = [
  {
    id: 0,
    dept: "Electronics and Communication Engineers Association",
    name: "ChipConnect:Embedded Systems",
    duration: "9:30AM - 2:00PM",
    shrtDesc:
      "Explore The World Of Embedded Systems In This Engaging Workshop Hosted By ChipConnect",
    desc: [
      "What You'll Experience:",
      "Dive deep into The fundamentals of Embedded Systems.",
      "Learn About Integrated Circuits and their applications.",
      "Gain pratical insights into microcontrollers and their functionalities.",
      "Explore firmware programming techniques for real-world applications.",
      "Engage in interactive sessions and guided exercises.",
      "Develop your own embedded projects under expert guidance.",
      "Stay updated with the latest trends and advancements in Embedded Systems Technology.",
      "Network with fellow enthusiasts and industry professionals."
    ],
    venue: "Embedded Systems Laboratory",
    req: ["Nill"],
    maxPeople: null,
    day:"16th March",
    rules:[""],
    coord:["V Kiran Yadav"],
    ph:"+91 73391 20852"
  },
  {
    id: 1,
    dept: "SAE Collegiate club of SVCE, AAE",
    name: "Basics of Automotive tuning",
    duration: "9:30AM - 12:30PM",
    shrtDesc:
      "Covers all the basics regarding automotive tuning and engine mapping.",
    desc: [
      "The workshop covers all the basics of automotive tuning.",
      "The reason for tuning and the merits and demerits will also be discussed.",
      " Participants can ask their doubts at the end of the session.",
    ],
    venue: "Automotive Components Laboratory",
    req: [
      "Need to be an automotive enthusiast or a person pursuing automotive related career",
    ],
    maxPeople: 30,
    day:"15th March",
    rules:[""],
    coord:[""],
    ph:null
  },
  {
    id: 2,
    dept: "Indian Institute of Chemical Engineers",
    name: "Basics Of Process Flow Sheeting using DWSIM",
    duration: "1:00PM - 2:30PM",
    shrtDesc:
      "Introduction to building process flow diagrams of various manufacturing processes.",
    desc: [
      "General awareness about process modelling and construction of process flow diagrams are given using softwares like Dwsim  matlab from experts.",
    ],
    venue: "Block 5 / Library seminar hall",
    req: ["laptops with dwsim installed"],
    maxPeople: 100,
    day:"16th March",
    rules:[""],
    coord:[""],
    ph:null
  },
  {
    id: 3,
    dept: "Association of Computer Engineers (ACE)",
    name: "A Mixed Reality AR & VR Experience",
    duration: "9am - 2pm",
    shrtDesc:
      "🎮 *AR & VR Workshop with Unreal Engine* Experience hands-on learning, build practical skills, and network with industry professionals in this immersive exploration of AR and VR technology. Perfect for students, professionals, and enthusiasts eager to dive into the future of digital experiences.",
    desc: [
      "🎮 *Unleash Your Creativity: AR & VR Workshop with Unreal Engine*",
      " Dive into the world of Augmented Reality (AR) and Virtual Reality (VR) in our dynamic workshop led by a certified Unreal Engine instructor.",
      "*What You'll Experience:*",
      "Hands-on learning with expert guidance.",
      "Build practical skills through interactive sessions.",
      "Create your own AR and VR projects.",
      "Stay ahead with cutting-edge Unreal Engine technology.",
      "Network with industry professionals and enthusiasts.",
    ],
    venue: "CS Laboratory",
    req: [
      "1.Participants are advised to bring notebooks or writing utensils(pen, pencil..)for note-taking.",
      "2.Valid identification and proof of registration are required.",
      "3.Kindly bring laptop.",
    ],
    maxPeople: null,
    day:"15th March",
    rules:["Respect copyright and intellectual property rights when using workshop materials or resources.","Any illegal or unethical behaviour "],
    coord:["Manoj"],
    ph:"+91 82209 69058"
  },
];

export default workshopData;
