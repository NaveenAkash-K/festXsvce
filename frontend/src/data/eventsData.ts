const eventsData: {
  id: string;
  events: {
    name: string;
    date: string;
    time: string;
    venue: string;
    team: string;
    description: string[];
    rules: string[];
    requirements: string[];
    coordinators: { name: string; contact: string };
  }[];
}[] = [
  // { id: "auto" },
  // { id: "bio" },
  // { id: "chm" },
  // { id: "civil" },
  {
    id: "cse",
    events: [
      {
        name: "VISUAL PAPYRUS",
        date: "TBA",
        time: "TBA",
        venue: "Classrooms",
        team: "2-3",
        description: [
          "Round1: Prelims Quiz(Online/Offline) – Shortlisting of 15 teams max. from this round. The teams are posed with a set of quiz based on UI/UX domain.",
          "Round2: Tech Company Acquisition Challenge",
          "In this unique event, teams will embark on a journey through the annals of technological history, with the ultimate goal of acquiring two tech companies via a thrilling auction. But here's the twist – as participants navigate the auction floor, they'll be bombarded with real-time historical tech change incidents, ranging from the invention of the light bulb to groundbreaking innovations of today.",
          "Each team will be transported back to pivotal moments in history, where they must adapt their company to thrive in that era. Teams will now craft UI/UX webpages by showcasing how their company would navigate challenges and seize opportunities in that period. In the UI/UX interface, teams must demonstrate strategic foresight, adaptability, and innovation to emerge victorious in this exhilarating competition",
        ],
        rules: [
          "Teams are limited to a maximum of 2-3 members.",
          "Investment decisions must be justified during presentation.",
          "Website UI designs must be based on the domain of the companies invested in during the challenge (Domains like E-Commerce, Banking, HealthCare..).",
          "Cheating or unethical behaviour are severely condemned.",
          "Judges' decisions are final.",
        ],
        requirements: [
          "Teams must bring their own laptops or devices for both levels.",
          "Any specific software or tools required for the challenges should be installed on participants' devices prior to the event.",
          "Valid identification and proof of registration are required.",
        ],
        coordinators: {
          name: "Sahana B",
          contact: "+91 78248 82255",
        },
      },
      {
        name: "THRILL QUEST – CHASING THE THRILL OF MYSTERY",
        date: "TBA",
        time: "TBA",
        coordinators: { name: "Sharan Balaji S", contact: "+91 94444 31042" },
        venue: "Classrooms",
        team: "Maximum of 2",
        description: [
          "Round 1: Connection",
          "The game offers a variety of levels, each featuring a set of images with subtle or abstract connections. Players must think creatively and critically to decipher these connections, which can range from thematic similarities to conceptual associations. As players progress through the levels, the complexity of the connections increases, providing a stimulating and rewarding experience.",
          "Round 2: Murder Mystery",
          "Upon arrival, the participants are assigned unique roles, each with their own backstory, motivations, and secrets. As they interact with one another along the course of the game, they must gather clues, analyze evidence, and engage in strategic conversations to uncover the truth behind the murder.",
        ],
        rules: [
          "Teams are limited to a maximum of 2 members.",
          "Cheating or unethical behaviour are severely condemned.",
          "Judges' decisions are final.",
        ],
        requirements: [
          "Valid identification and proof of registration are required.",
        ],
      },
      {
        name: "JOKER CODER",
        coordinators: { name: "Srilekha P", contact: "+91 78128 63379" },
        date: "TBA",
        time: "TBA",
        venue: "Classrooms",
        team: "2",
        description: [
          "Round 1: Cryptic Decryption Battle",
          "In this thrilling round, each team of two will embark on a journey to decipher seven encrypted words, each employing a unique cryptographic logic. With each word decoded, teams will inch closer to revealing the final answers. It's a race against time and wit as teams must unravel these cryptic puzzles swiftly and accurately to secure their spot in the next round.",
          "Round 2: Code Sprint with a Twist",
          "This is a dynamic coding session, where teams will be provided with three unique coding questions. But here's the twist – participants will swap partners every 5 minutes! While one teammate codes, the other will engage in entertaining tasks. Amidst the lively atmosphere of loud music and camaraderie, teams must overcome hindrances and ensure seamless execution of their code within the time limit.",
        ],
        rules: [
          "Use of any AI tools is not allowed.",
          "Participants are kindly asked to complete tasks without objection, approaching them positively.",
          "Malpractices of any sort are strictly condemned. If found it results in immediate disqualification.",
          "Judge’s decisions are final.",
        ],
        requirements: [
          "Valid identification and proof of registration are required.",
          "Bring pen and laptop.",
        ],
      },
      {
        name: "WORKSHOP ON UI/UX DESIGN",
        coordinators: { name: "Vishuvaradhan A", contact: "+91 72992 13502" },
        date: "TBA",
        time: "TBA",
        team: "TBA",
        venue: "Library Seminar Hall",
        description: [
          "Discover the fusion of creativity and innovation in our workshop on UI/UX Design & Real-Time AI Solutions. Led by industry experts, this workshop offers a concise yet comprehensive exploration of designing captivating user interfaces and harnessing real-time AI for transformative solutions.",
          "Participants will delve into UI/UX design principles, learning to craft engaging interfaces that optimize user experience. Simultaneously, they'll explore the power of real-time AI, discovering its potential in creating intelligent systems that adapt seamlessly to user needs.",
          "Regardless of being a seasoned designer or a tech enthusiast, this workshop promises invaluable insights and practical knowledge to propel your skills to new heights.",
        ],
        rules: [
          "Respect copyright and intellectual property rights when using workshop materials or resources.",
          "Any illegal or unethical behaviour will result in immediate expulsion from the workshop.",
        ],
        requirements: [
          "Participants are advised to bring notebooks or writing utensils (pen, pencil..) for note-taking.",
          "Valid identification and proof of registration are required.",
          "Kindly bring a laptop.",
        ],
      },
      {
        name: "WORKSHOP ON GAME DESIGNING",
        coordinators: { name: "Siva Ishwarya B", contact: "+91 70100 51339" },
        date: "TBA",
        time: "TBA",
        team: "TBA",
        venue: "Bio-Tech Seminar Hall / Library Seminar Hall / CS Labs",
        description: [
          "Dive into the exhilarating realm of game design with our immersive workshop. Led by industry experts, this workshop offers a hands-on exploration of the principles and techniques behind creating captivating games.",
          "Participants will delve into storytelling, mechanics, level design, artwork, sound, and user interface, gaining practical experience and invaluable insights into the game development process.",
          "Regardless of being an aspiring game developer or simply curious about the magic behind your favourite games, this workshop is your ticket to unlocking the secrets of game design.",
        ],
        rules: [
          "Respect copyright and intellectual property rights when using workshop materials or resources.",
          "Any unethical behaviour will result in immediate expulsion from the workshop.",
        ],
        requirements: [
          "Participants are advised to bring notebooks or writing utensils (pen, pencil..) for note-taking.",
          "Valid identification and proof of registration are required.",
          "Kindly bring a laptop.",
        ],
      },
      {
        name: "PAPER PRESENTATION",
        coordinators: { name: "Naafiyah Yusra A", contact: "+91 93618 87936" },
        date: "TBA",
        time: "TBA",
        team: "TBA",
        venue: "Bio-Tech Seminar Hall / Library Seminar Hall / CS Labs",
        description: [
          "This event serves as a platform for enthusiasts, professionals, and students alike to delve into cutting-edge topics and advancements in various domains of technology. Domains Covered such as Artificial Intelligence, Cybersecurity, Data Science, Machine Learning, Blockchain, Internet of Things (IoT), Cloud Computing.",
          "Engaging presentations by experts and scholars in the field, offering insights into the latest trends and developments.",
          "Opportunity for participants to showcase their research and projects, fostering networking and collaboration.",
          "Interactive Q&A sessions allowing attendees to deepen their understanding and engage directly with presenters.",
          "Panel discussions featuring industry leaders, providing valuable perspectives on the future of technology.",
          "Networking opportunities for students, professionals, and enthusiasts to connect and exchange ideas.",
        ],
        rules: [
          "Any unethical behaviour will result in immediate expulsion from the event.",
          "Participant must adhere to the domain which is given by the panel.",
          "Judges’ decision will be final.",
        ],
        requirements: [
          "For Participants:",
          "- Valid identification and proof of registration are required.",
          "- Kindly bring a laptop.",
        ],
      },
    ],
  },
  // { id: "ece" },
  // { id: "eee" },
  // { id: "int" },
  // { id: "mech" },
  // { id: "clubs" },
  // { id: "workshops" },
  // { id: "proshows" },
];

export default eventsData;
