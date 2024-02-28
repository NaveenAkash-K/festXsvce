const eventsData: {
  id: string;
  by: string;
  events: {
    name: string;
    date: string;
    time: string;
    venue: string;
    team: string;
    description: string[];
    shortDescription: string;
    rules: string[];
    requirements: string[];
    coordinators: { name: string; contact: string };
  }[];
}[] = [
  {
    id: "auto",
    by: "SAE Collegiate club of SVCE, AAE",
    events: [
      {
        name: "PITSTOP",
        date: "TBA",
        time: "TBA",
        venue: "Automobile Components Laboratory",
        team: "1-2",
        description: [
          "Pitting, a term from F1 racing, involves cars arriving at designated pitstops to change tires or make repairs",
          "Participants change tires with provided tools.",
          "Times are recorded, with top 3 teams winning.",
        ],
        shortDescription:
          "Thrilling physical competition with strategic challenges",
        rules: [
          "Each team can consist of a maximum of 2 members. One member participation will also be allowed.",
          "Teams should only use the tools provided by the event organisers. Any additional tool usage is prohibited.",
          "The car setup will be stationary, no changes to be done on that.",
          "Innovative techniques are open, but the final deciding authority will be assessing the fairness of the technique.",
          "The decision of the event organisers will be considered FINAL in any circumstances.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "AUTOHACK – Technical Hackathon",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "3",
        description: [
          "Participants will receive a set of automobile-related problem statements; coding is optional. Teams select a problem statement, develop solution(s), and create a presentation with analysis. Top three teams will be awarded based on their solutions",
        ],
        shortDescription:
          "Fast-paced problem solving competition testing the technical brains",
        rules: [
          "Each team can consist of 2-3 members. Teams should bring their own laptops.",
          "Only one problem statement can be selected from these events, and the teams won’t be allowed to change it during the course of the event.",
          "The challenge is time-bound. Teams will be given 3 hours, after selecting their problem statement, to work on the solutioning and PPT.",
          "The decision of the judging panel will be considered FINAL in any circumstances.",
        ],
        requirements: [
          "Participants have to bring their own laptops for their presentation",
          "Each team should bring the required number of extension cords.",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Rev It Up!",
        date: "TBA",
        time: "TBA",
        venue: "Automobile Components Laboratory",
        team: "1 (Individual event)",
        description: [
          "Participants will use the RC car provided by the organizers to race through a course.",
          "The participant with the fastest time, following all rules, wins.",
        ],
        shortDescription:
          "Exhilarating fast paced miniature racing competition",
        rules: [
          "The race course will be designed with obstacles and turns, participants need to follow the rules strictly.",
          "The event organizers have the authority to change the rules and regulations on the spot to ensure fairness of the event.",
          "Penalties in timing can be given for cutting corners.",
          "The final deciding authority will be the event organizers.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
  {
    id: "bio",
    by: "The Students’ Biotech Forum",
    events: [
      {
        name: "Biomonopoly",
        date: "TBA",
        time: "TBA",
        venue: "Biotech Seminar Hall",
        team: "1",
        description: [
          "This event will consist of several plots (problem statement open to all departments) where each team rolls a die and lands on a plot with a problem statement. If the team finds the problem statement solvable, they buy it and present their solution, or they can move to the next plot without buying the problem statement in the next turn. The team that solves the maximum problem statements in the given time will be announced as the winner.",
        ],
        shortDescription:
          "Fun filled monopoly event infused with problem statements.",
        rules: [
          "Initial amount will be provided to each team at the start and it’ll be used to buy the problem statements.",
          "Teams should solve the problem statement they bought in order to buy the next problem and move on to the next plot.",
          "The team that solves the maximum problems in 2hrs is deemed the winners.",
          "The teams are required to solve at least 2 problems within the 1st 30 mins in order to stay in the round.",
          "Bonus will be provided each time the team crosses the Start point.",
          "Teams are not allowed to trade within themselves.",
          "Use of any form of references (use of internet) will lead to elimination of the team.",
          "Teams are not allowed to help each other.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Escape Room",
        date: "TBA",
        time: "TBA",
        venue: "Video Hall",
        team: "Minimum of 2 and maximum of 3 members",
        description: [
          "This event contains three rooms which contain various subevents.",
          "1. CONNECTIONS: Different pictures will be presented, and teams have to find the domain or the idea the pictures are trying to convey.",
          "2. BIOARTS: A hint/clue will be provided to one of the teammates. They have to draw the identified clue, and their teammates should find what the drawn object is.",
          "3. VERBAL TIDES: A debate infused with shipwreck, where the final teams will be given characters and they'll have to argue on the particular topic as the character. The one who wins the debate after the 3 rounds will be considered as the winner.",
        ],
        shortDescription:
          "Get ready to solve tricky segments and perceive your inner Sherlock!",
        rules: [
          "The teams are required to solve within the allotted time limits for respective events.",
          "In verbal tides, the members should stay in the given characters until the round ends.",
          "Mouthing and acting out words/clues in BIOARTS will lead to disqualification. A point will be awarded to the team if the member identifies the clue and another point will be awarded as the team identifies the correct answer.",
          "Teams are not allowed to help each other out.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
  {
    id: "chem",
    by: "Indian Institute of Chemical Engineers",
    events: [
      {
        name: "The ChemEConnundrum",
        date: "TBA",
        time: "TBA",
        venue: "Any 3 classrooms either in Block 2 or Block 3",
        team: "2-3",
        description: [
          "Embark on an exhilarating journey of intellect and wit with 'The ChemEConnundrum,' a riveting three-stage quiz event designed to challenge and entertain enthusiasts of participants. This dynamic competition promises to test your knowledge, strategy, and quick thinking in an electrifying atmosphere of camaraderie and excitement.",
        ],
        shortDescription: "The ChemEConnundrum is technical quiz of 3 rounds",
        rules: [
          "1) The team consists of two to three persons.",
          "2) In round one, players must link the images provided to answer the given question. The shortlisted team will advance to the next round.",
          "3) In round two, selected individuals are invited to play a game similar to snake and ladder, with half of the blocks filled with technical questions from chemical engineering concepts and the other half packed with enjoyable tasks.",
          "4) Qualified teams from round 2 advance to phase 3, where the shortlisted players compete in a bidding auction to check the correctness of the suggested statement and change it correctly.",
          "5) The team with the most earnings at the end is proclaimed the champion.",
          "6) Use of the internet is prohibited.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Presentation",
        date: "TBA",
        time: "TBA",
        venue: "Any classroom at Block 2",
        team: "3",
        description: [
          "Students can showcase their research ideas/ works either in the form of a paper or as a poster",
          "Separate eveluations are made for both paper as wel as for poster presentations",
        ],
        shortDescription:
          "Event to showcase the research expertise of students",
        rules: [
          "Plagiarism is strictly prohibited",
          "For paper presentation; maximum permissible slides are 10 (excluding intro and closing slide",
        ],
        requirements: [
          "1)Participants are required to submit a short abstract of their research work for both paper and poster presentations",
          "Permissible sizes of the poster are : 18''* 24'' or 36''*48''",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "InnoSolve",
        date: "TBA",
        time: "TBA",
        venue: "Library Seminar Hall",
        team: "1",
        description: [
          "At InnoSolve, participants are given a leadership designation of a specific firm related to their department and are handed with dynamic challenge of solving real-world industrial problems.",
          "With a selection of diverse industrial challenges of a common theme (ex: circular economy/zero defects), participants choose their battleground and unleash their problem-solving prowess. Armed with expertise and creativity, they have a focused three-hour window to decipher, strategize, and ultimately pitch their solutions to a discerning panel of judges.",
        ],
        shortDescription:
          "Coming up with feasible solutions for real world problems and pitching them.",
        rules: [
          "Judges’ call remains final decision",
          "Decorum is expected to be maintained by participants at all costs",
        ],
        requirements: [
          "Laptops preferrable",
          "10 slides of presentation for the given problem  (mandatory)",
          "simulations/ feasibility reports fro proof of concept (preferred)",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
  {
    id: "civil",
    by: "Civil Engineering Association (CEA)",
    events: [
      {
        name: "Bridge Expertise",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "2",
        description: [
          "Participants are provided with thermocol for bridge construction. They are provided with a problem statement and the participants are required to solve it. The design which solves the problem statement and is aesthetically pleasing is declared the winner.",
        ],
        shortDescription:
          "A model making competition (bridge) requiring problem solving and design skills.",
        rules: [
          "This is a team event.",
          "Participants must strictly adhere to design specifications",
          "Participants should strictly finish the design within the stipulated time",
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Mudwell mastery",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "2",
        description: [
          "Participants are required to construct a seepage structure (well) with the given items. The structure is constructed with clay. The structure is subjected to load tests.The seepage structure which doesn't allow water to seep through and is design wise perfect is declared the winner.",
        ],
        shortDescription:
          "A model making competition (well) requiring problem solving and design skills.",
        rules: [
          "This is a team event.",
          "Participants must strictly adhere to design specifications",
          "Participants should strictly finish the design within the stipulated time",
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Paper Presentation",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "2",
        description: [
          "This is a paper presentation event focused on future civil engineering development such as sustainability, etc.The participants are required to present their views on sustainability and environmental safety and other future civil engineering advancements even smart buildings etc.",
        ],
        shortDescription:
          "A paper presentation event with a theme focused on civil engineering.",
        rules: [
          " This is an individual event",
          " Decisions of the judges is final.",
          " Participants should strictly adhere to the theme of the event.",
          " The theme of your paper should be from any one of the civil engineering niches (structural engineering, geotechnical engineering, sustainable construction, safety and risk management etc.,)"
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      
    ],
  },
  {
    id: "cse",
    by: "Association of Computer Engineers (ACE)",
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
        shortDescription:"Teams must acquire two tech companies through an auction, navigating historical tech changes. They'll create UI/UX webpages to showcase their company's adaptability and innovation in different eras.",

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
          "Upon arrival, the participants are assigned unique roles, each with their own backstory, motivations, and secrets. As they interact with one another along the course of the game, they must gather clues, analyze evidence, and engage in strategic conversations to uncover the truth behind the murder.",
          "Additionally, participants may encounter unexpected plot twists and red herrings that challenge their investigative skills and keep them on their toes throughout the game.",
          "Furthermore, time pressure and limited resources may add to the intensity of the investigation, requiring participants to prioritize leads and make critical decisions under duress."],
          shortDescription:"Participants are assigned unique roles with backstories, motivations, and secrets. As they interact, they gather clues, analyze evidence, and engage in strategic conversations to uncover the truth behind the murder.",
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
        shortDescription:"None",
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
      // {
      //   name: "WORKSHOP ON UI/UX DESIGN",
      //   coordinators: { name: "Vishuvaradhan A", contact: "+91 72992 13502" },
      //   date: "TBA",
      //   time: "TBA",
      //   team: "TBA",
      //   venue: "Library Seminar Hall",
      //   description: [
      //     "Discover the fusion of creativity and innovation in our workshop on UI/UX Design & Real-Time AI Solutions. Led by industry experts, this workshop offers a concise yet comprehensive exploration of designing captivating user interfaces and harnessing real-time AI for transformative solutions.",
      //     "Participants will delve into UI/UX design principles, learning to craft engaging interfaces that optimize user experience. Simultaneously, they'll explore the power of real-time AI, discovering its potential in creating intelligent systems that adapt seamlessly to user needs.",
      //     "Regardless of being a seasoned designer or a tech enthusiast, this workshop promises invaluable insights and practical knowledge to propel your skills to new heights.",
      //   ],
      //   rules: [
      //     "Respect copyright and intellectual property rights when using workshop materials or resources.",
      //     "Any illegal or unethical behaviour will result in immediate expulsion from the workshop.",
      //   ],
      //   requirements: [
      //     "Participants are advised to bring notebooks or writing utensils (pen, pencil..) for note-taking.",
      //     "Valid identification and proof of registration are required.",
      //     "Kindly bring a laptop.",
      //   ],
      // },
      // {
      //   name: "WORKSHOP ON GAME DESIGNING",
      //   coordinators: { name: "Siva Ishwarya B", contact: "+91 70100 51339" },
      //   date: "TBA",
      //   time: "TBA",
      //   team: "TBA",
      //   venue: "Bio-Tech Seminar Hall / Library Seminar Hall / CS Labs",
      //   description: [
      //     "Dive into the exhilarating realm of game design with our immersive workshop. Led by industry experts, this workshop offers a hands-on exploration of the principles and techniques behind creating captivating games.",
      //     "Participants will delve into storytelling, mechanics, level design, artwork, sound, and user interface, gaining practical experience and invaluable insights into the game development process.",
      //     "Regardless of being an aspiring game developer or simply curious about the magic behind your favourite games, this workshop is your ticket to unlocking the secrets of game design.",
      //   ],
      //   rules: [
      //     "Respect copyright and intellectual property rights when using workshop materials or resources.",
      //     "Any unethical behaviour will result in immediate expulsion from the workshop.",
      //   ],
      //   requirements: [
      //     "Participants are advised to bring notebooks or writing utensils (pen, pencil..) for note-taking.",
      //     "Valid identification and proof of registration are required.",
      //     "Kindly bring a laptop.",
      //   ],
      // },
      // {
      //   name: "PAPER PRESENTATION",
      //   coordinators: { name: "Naafiyah Yusra A", contact: "+91 93618 87936" },
      //   date: "TBA",
      //   time: "TBA",
      //   team: "TBA",
      //   venue: "Bio-Tech Seminar Hall / Library Seminar Hall / CS Labs",
      //   description: [
      //     "This event serves as a platform for enthusiasts, professionals, and students alike to delve into cutting-edge topics and advancements in various domains of technology. Domains Covered such as Artificial Intelligence, Cybersecurity, Data Science, Machine Learning, Blockchain, Internet of Things (IoT), Cloud Computing.",
      //     "Engaging presentations by experts and scholars in the field, offering insights into the latest trends and developments.",
      //     "Opportunity for participants to showcase their research and projects, fostering networking and collaboration.",
      //     "Interactive Q&A sessions allowing attendees to deepen their understanding and engage directly with presenters.",
      //     "Panel discussions featuring industry leaders, providing valuable perspectives on the future of technology.",
      //     "Networking opportunities for students, professionals, and enthusiasts to connect and exchange ideas.",
      //   ],
      //   rules: [
      //     "Any unethical behaviour will result in immediate expulsion from the event.",
      //     "Participant must adhere to the domain which is given by the panel.",
      //     "Judges’ decision will be final.",
      //   ],
      //   requirements: [
      //     "For Participants:",
      //     "- Valid identification and proof of registration are required.",
      //     "- Kindly bring a laptop.",
      //   ],
      // },
    ],
  },
  {
    id: "ece",
    by:"Electronics and Communication Engineers Association",
    events: [
      {
        name: "SparkQuest",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "3",
        description: [
          "Participants will engage in a comprehensive treasure hunt featuring diverse clues encompassing areas such as logic gates, digital electronics, communication, signal processing, Arduino, and Programming. The team achieving the best timing within the 3-hour time limit will be declared the winner.",
        ],
        shortDescription:"Unraveling Treasures in the Electronic Maze!",

        rules: [
          "Teams must consist of 2 to 3 participants.",
          "Each clue in the treasure hunt will be uniquely crafted, drawing from a diverse range of topics including logic gates, digital electronics, communication, signal processing, Arduino, and Programming.",
          "Each clue will help participants to advance to the next level.",
          "Participants are allowed to use standard tools and equipment approved by event organizers.",
          "Usage of Smartphones or any smart devices is strictly prohibited.",
        ],
        requirements: [
          "None",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Electro-Craft Challenge",
        date: "TBA",
        time: "TBA",
        venue: "Embedded Systems Laboratory of ECE Department",
        team: "2 to 3",
        description: [
          "Participants will receive cards featuring electric components. Based on the chosen cards, teams of 2 to 3 must create a circuit or product within a 60-minute time frame. The focus is on practical design and efficient problem-solving. Teams will pitch their finalized projects, demonstrating their ability to work collaboratively and think on their feet.",
        ],
        shortDescription:"From Cards to Circuits: The Techfest Challenge",

        rules: [
          "Teams must consist of 2 to 3 participants.",
          "Participants will randomly choose cards featuring electric components from each deck; the chosen components must be used in the circuit or product design.",
          "Basic electronic components and materials necessary for circuit building will be provided. Teams may not bring their own components; they must use the provided materials.",
          "The design phase has a strict time limit of 60 minutes. Teams must complete their circuits or products within this timeframe.",
          "Participants are allowed to use standard tools and equipment but must be approved by event organizers.",
          "Teams will have a brief time slot for pitching their final product or circuit design.",
        ],
        requirements: [
          "Participants should bring their own laptop for programming the controller, with Arduino IDE installed in it.",
          "Participants are allowed to bring standard tools and equipment if required.",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Paper Presentation",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "2 to 3",
        description: [
          "Papers will be shortlisted based on the abstract submitted.",
          " Selected papers will be reviewed by the panel members and best paper will be rewarded."
        ],
        shortDescription:"Paper Presentation based on ECE domain",
        rules: [
          "Basic Paper presentation rules"
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
  {
    id: "eee",
    by: "AEEE",
    events: [
      {
        name: "Uknowhunt",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "1",
        description: [
          '"UKnowHunt" is a dynamic and thrilling intercollege event hosted by the Electrical and Electronics Engineering (EEE) department in SVCE "Techfest". Teams will navigate through two rounds, showcasing their strategic thinking and electrical engineering knowledge to emerge victorious.',
          "Round 1: Uno Game",
          "In the first round, participants will dive into the fast-paced world of Uno. The winners will earns lifelines that will serve as valuable assets in the second round.",
          "Round 2: Treasure Hunt Quiz",
          'The second round transforms into a technical treasure hunt quiz, where people will explore a series of rooms, each presenting a unique challenge related to electrical and electronics engineering. They progress by successfully completing each technical challenge in a room. The one who successfully finishes all questions first will be crowned the ultimate winner of "UKnowHunt"',
        ],
        shortDescription:
          "UKnowHunt: Where Uno meets technical treasure hunts, igniting strategic prowess and electrical engineering expertise in an exhilarating",
        rules: [
          "1. Fair Play:",
          "- Teams must adhere to the principles of fair play and sportsmanship.",
          "- Any form of cheating or misconduct will result in immediate disqualification.",
          "2. Uno Game Rules:",
          "- Standard Uno rules apply.",
          "- A designated referee will oversee the Uno game and announce the results.",
          "3. Treasure Hunt Quiz Rules:",
          "- Teams must progress through the quiz in order, completing each room's questions before advancing.",
          "- After completing each question, the coordinator will lead you to the next room.",
          "- Teams may not proceed to the next room until their answers are verified by event coordinators or volunteers.",
          "4. Lifeline Usage:",
          "- Lifelines earned in the Uno game can only be used in the second round.",
          "- Teams must declare their intention to use a lifeline after they see the question.",
          "5. Time Limits:",
          "- Each question will be assigned a time limit based on the difficulty level. If a team cannot solve a question, they will be allocated zero points for the question.",
          "6. Dispute Resolution:",
          "- Event coordinators reserve the right to resolve any disputes or discrepancies in a fair and final manner.",
          "7. Phone Usage:",
          "- Participants are strictly prohibited from using phones or any electronic devices during the treasure hunt quiz.",
          "- Phones must be switched off before entering quiz rooms.",
          "- Any violation of this rule may result in disqualification at the discretion of the event coordinators.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "The Twisted Heist",
        date: "NA",
        time: "NA",
        venue: "NA",
        team: "3",
        description: [
          "Phase 1: Trap Door :",
          "Follow the Electrical Trail: Navigate a tangled web of circuits, tracing electrical pathways and deciphering complex schematics to locate the crucial voltage terminal—to locate the vault.",
          "Alternative Route: If precious time slips away, your team will face a hands-on challenge: assemble a circuit with a specific output to power up your com. Circuit. ",

          "Phase 2: Circuit schematics (10 mins):",
          "Take Control: You will be given a circuit diagram representing the alarm system, and identify and manipulate the logic gates to disable the alarm within the time limit.",

          "Phase 3: Digital Decipher :",
          "Confront the Final Guardian: As the final five teams reach the end, The vault's digital heart, a formidable circuit, stands between your crew and the treasure. Interface with the vault and input commands or codes to unlock the vault and claim the prize.",
        ],
        shortDescription:
          "Outsmart the system, bend the circuits, and crack the code in a 90-minute with your skills to save a heist",
        rules: [
          "1. Use of mobile phones are strictly prohibited",
          "2. Teams must progress through phases sequentially.",
          "3. Only in the last 5 mins the lifelines for next level will be revealed",
          "4. Basic knowledge of Electrical and electronics are enough ",
        ],
        requirements: [
          "Participants are requested to carry their laptops if possible, Atleast one for each team.",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "SDG Innovation Challenge",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "3",
        description: [
          "In this dynamic event, participants will collaborate to design and develop innovative models aligned with the United Nations Sustainable Development Goals (SDGs). Rather than just pitching ideas, we're challenging you to bring your models to the table and showcase practical solutions to real-world problems.",
        ],
        shortDescription:
          "A project presentation event where participants collaborate to showcase tangible solutions aligned with the United Nations Sustainable Development Goals through innovative model development",
        rules: [
          "1. Participants must present working models or prototypes that align with the Sustainable Development Goals (SDGs).",
          "2. Teams will be evaluated based on the quality of their short presentation.",
          "3. Models or prototypes should effectively demonstrate solutions or innovations related to the SDGs.",
          "4. Presentations should clearly articulate the problem being addressed and the proposed solution.",
          "5. Teams are encouraged to be creative and innovative in their approach.",
          "6. Each team must adhere to the specified time limit for their presentation.",
          "7. Judges' decisions will be final and binding.",
        ],
        requirements: ["Tables and chairs with plug points"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
  {
    id: "int",
    by: "Association of Information Technologists",
    events: [
      {
        name: "The UI-tlimate Showdown",
        date: "TBA",
        time: "TBA",
        venue: "Marine Lab",
        team: "2-3",
        description: [
          "Welcome to 'The UI-tlimate showdown,' a dynamic 3-hour front-end design competition. Participants unveil their creativity as the problem statement is revealed at the event's commencement. The challenge? Craft a captivating UI/UX design that merges aesthetics with functionality. Teams race against time to impress judges and claim victory. Adding a strategic edge, bidding sessions occur at intervals, allowing teams to invest in cue cards for insights and challenges. Design Dash promises a whirlwind of creativity, competition, and strategic decision-making. Are you ready to showcase your design prowess and emerge victorious in this fast-paced design sprint? The clock is ticking, and the canvas awaits your innovative touch!",
        ],
        shortDescription:
          "Fast-paced UI/UX design competition with bidding and strategic challenges",
        rules: [
          "1. Participants can use any tool to develop a web design preferably figma.",
          "2. Plagiarism is not allowed.",
          "3. Team size should not exceed 3.",
          "4. All the participants are requested to bring Laptops.",
        ],
        requirements: [
          "Laptop",
          "USB to LAN converter if the laptop doesn't have a LAN port",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Haijo",
        date: "TBA",
        time: "TBA",
        venue: "Biotech Seminar Hall (or) Function Hall",
        team: "3 members",
        description: [
          "Welcome to Haijo, a riveting event where participants are tested on both technical and non-technical skills across three undisclosed rounds. As the competition unfolds, the team head must make strategic decisions, including the challenging task of removing one member before each new round. This dynamic element adds an unpredictable twist, shaping the team's destiny. Haijo is a high-stakes game requiring adaptability, collaboration, and quick thinking. Success hinges on navigating through diverse challenges and making crucial decisions to advance in this thrilling contest. Are you ready for the suspense and excitement?",
        ],
        shortDescription:
          "Haijo is a dynamic and suspenseful competition where teams must collaborate strategically, facing unpredictable challenges and high-stakes decisions to advance in the thrilling contest.",
        rules: [
          "1. Team size should be 3.",
          "2. The type of rounds will be revealed on-spot.",
          "3. Switching of the removed member after the start of the round leads to disqualification of the entire team.",
          "4. Persons from different institutions can be a part of the same team. However, one person may not be a part of multiple teams for the same event.",
          "5. Mobiles are strictly not allowed.",
          "6. Discussion among participants is not encouraged.",
          "7. The decision of judges will be final and no arguments or appeal will be entertained.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Ctrl+Alt+Debate",
        date: "TBA",
        time: "TBA",
        venue:
          "Video hall/ Library Seminar Hall/ Biotechnology Department Seminar Hall",
        team: "2 members per team",
        description: [
          "Welcome to 'Ctrl+Alt+Debate,' a cutting-edge parliamentary style debate competition that seamlessly blends oratory excellence with the ever-evolving landscape of technology. Designed to elevate students' public speaking skills, this event goes beyond traditional debate by delving into the forefront of tech headlines and innovations. Participants engage in thought-provoking discussions, navigating the dynamic intersection of technology and society. 'Ctrl+Alt+Debate' not only refines oratory prowess but also offers a unique platform to unravel the complexities of emerging technologies, industry shifts, and future opportunities. Prepare to articulate your perspectives and delve into the tech-driven discourse that shapes our rapidly advancing world. Are you ready to debate the future?",
        ],
        shortDescription:
          "'Ctrl+Alt+Debate' is a forward-thinking competition intertwining eloquent speechcraft with the forefront of technological discourse, providing a platform for participants to engage in thought-provoking discussions on the evolving intersection of technology and society.",
        rules: [
          "1. Decorum must be maintained at all times on the floor.",
          "2. The judge’s say is final and any opposition will lead to disqualification.",
          "3. Use of generative AI for preparation is permitted but only during preparation time and not once the debate starts.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
  {
    id: "mech",
    by:"Society of Mechanical Engineers",
    events: [
      {
        name: "DesignSprint",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "2",
        description: [
          "DesignSprint is an exhilarating Design challenge that demands participants to bring 2-D designs to life using various Design softwares.This competition isn't just about technical proficiency; it's a platform for participants to unleash their creativity, surmount design obstacles, and showcase creative solutions.",
          "DesignSprint is the ultimate playground for aspiring design maestros, where the fusion of technology and imagination yields victory."
          
        ],
        shortDescription:"Design challenge that demands participants to bring 2-D designs to life using various Design softwares.",
        rules: [
          "1. Participants are required to utilize Design software [Creo,Autocad,Fusion 360]exclusively for the design challenge.",
          "2. Judging criteria encompass the time utilized, precision, in making the design."
        ],
        requirements: ["He/she can bring her own laptop,if they did not have , then we can provide computers."],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      // {
      //   name: "DesignSprint",
      //   date: "TBA",
      //   time: "TBA",
      //   venue: "TBA",
      //   team: "Individual Participation",
      //   description: [
      //     "DesignSprint is an exhilarating Creo design challenge that demands participants to bring 2-D designs to life using the Creo parametric software. This competition isn't just about technical proficiency; it's a platform for participants to unleash their creativity, surmount design obstacles, and showcase creative solutions. DesignSprint is the ultimate playground for aspiring design maestros, where the fusion of technology and imagination yields victory.",
      //   ],
      //   rules: [
      //     "1. Participants are required to utilize Creo software exclusively for the design challenge.",
      //     "2. Judging criteria encompass the time utilized, precision, in making the design.",
      //   ],
      //   requirements: ["Laptop equipped with Creo software"],
      //   coordinators: {
      //     name: "TBA",
      //     contact: "TBA",
      //   },
      // },
      {
        name: "InnoVision Expo",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "Individual Participation",
        description: [
          "In the InnoVision Expo, the stage is set for students to illuminate the audience with innovative papers spanning diverse mechanical engineering concepts. The event serves as a nexus for intellectual discourse, encouraging insightful discussions, and fostering connections among visionaries in the field.",
        ],
        shortDescription:"Paper presentation",
        rules: [
          "1. Presentations are expected to adhere strictly to the allocated time limit.",
          "2. Each presentation will be followed by a dynamic Q&A session, promoting an exchange of ideas and perspectives.",
          "3. Evaluation criteria are comprehensive, covering content richness, clarity of presentation, and overall impact.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "AutoTech Quest",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "3",
        description: [
          "In the heart-pounding AutoTech Quest, participants are put against an engaging quiz challenge that evaluates their expertise on the latest automotive technologies, supercars, bikes, and more. Beyond a mere test of knowledge, this quest is a dynamic engagement where participants showcase their automotive acumen.",
        ],
        shortDescription:"Autoquiz",
        rules: [
          "1. The quiz is structured with timed multiple-choice questions, testing both speed and accuracy.",
          "2. Top-scoring teams advance to an exhilarating final round, potentially involving interactive challenges or problem-solving scenarios.",
          "3. The final round serves as the ultimate decider for the winning team.",
        ],
        requirements: ["None"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
  {
    id: "ieee_club",
    by:"IEEE SVCE Student Branch",
    events: [
      {
        name: "ProjectForge",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "1",
        description: [
          "Welcome to the 'ProjectForge' – an immersive mini-project simulation event hosted on an online platform!",
          "Prepare to embark on a journey where your skills in Arduino circuit design and coding will be put to the test in real-time.",
          "An exciting problem statement will be unveiled. Your task? Design an Arduino circuit and write code to tackle the on-the-spot challenge.",
          "It could be anything from creating a smart home automation system to designing a sensor-based project. Get ready to apply your technical and problem-solving skills.",
        ],
        shortDescription:"Where Creativity meets Circuitry- Online simulation Challenge based on Arduino.",
        rules: [
          "Participants must take part individually.",
          "Plagiarism is not allowed.",
          "Participants will be rewarded points based on the efficiency of design and accuracy of code.",
          "Indulging in any kind of malpractice will lead to instant de-qualification of the participant.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "PitchForge",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "1-3",
        description: [
          "Welcome to 'PitchForge', a dynamic pitching event where teams are challenged to provide innovative solutions to bring highly technical products to market.",
          "In this high-stakes competition, participants will demonstrate their prowess in pitching and delivering compelling solutions within a stipulated time frame.",
          "With an emphasis on interdisciplinary collaboration and real-world applicability, teams must craft solutions showcasing not only technical excellence but also practical, impactful, and scalable outcomes.",
          "The stage is set for a pitch-perfect showdown where teams will compete to impress judges with their problem-solving abilities under tight deadlines. May the most inventive and adept solutions rise to the challenge!",
        ],
        shortDescription:"Narrow time-framed pitch perfect kind of event for critical technical products.",
        rules: [
          "Participants will be provided with the description of a highly technical product, and must come up with a pitch to bring that product to market.",
          "The pitch must be holistic and should cover all aspects right from procurement to marketing.",
          "Teams can refer to the internet for a limited period time as determined by the judging panel.",
          "Teams will be judged based on their unique approach, holistic and innovative nature of their pitch.",
          "Determining the winner and dispute resolution is completely undertaken by the judging panel.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
  {
    id: "csi_club",
    by:"CSI - SVCE Student Chapter",

    events: [
      {
        name: "Relay Rush",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "3 Members",
        description: [
          '"Code Relay Rush" is a dynamic coding competition where teams solve a chain of related issues.',
          "One participant kicks off, and their solution sets the stage for the next coder. Speed is key – the faster your team solves, the better.",
          "The challenges are interlinked, ensuring a seamless flow.",
          "It's a race against time and bugs. Precision and teamwork matter most. As each hurdle falls, the next coder takes the lead.",
          'The team with the shortest overall time emerges victorious. Simplified coding adrenaline – that\'s "Code Relay Rush" in a nutshell!',
        ],
        shortDescription:"coding relay competition with strategic challenges",
        rules: [
          "There should be no communication between the team members.",
          "Indulging in any kind of malpractice will lead to instant disqualification of the participant.",
        ],
        requirements: ["laptop , rough sheets, pen"],
        coordinators: {
          name: "None",
          contact: "None",
        },
      },
      {
        name: "Prompt Tactics",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "2 Members",
        description: [
          "Welcome to the Tech Odyssey - where coding meets creativity in a thrilling three-act saga!",
          "Round 1: Password Hunt - Embark on a digital treasure hunt through 7 levels of password wizardry. Crack the codes in 5 minutes or less to advance.",
          "Round 2: Prompt Craft - Unleash your inner artist as you craft prompts for an AI to replicate an image. It's a duel of creativity and code. The most visually stunning replication earns you a ticket to the grand finale.",
          "Round 3: SQL Showdown - In the final act, dive into the depths of databases and solve SQL riddles with bite-sized queries. It's not just about code; it's about unraveling the mysteries with finesse. Only the SQL maestros will emerge victorious!",
        ],
        shortDescription:"prompt based competition with specific challenges",
        rules: [
          "Plagiarism is not allowed.",
          "Indulging in any kind of malpractice will lead to instant disqualification of the participant.",
        ],
        requirements: ["laptop, rough sheets, pen"],
        coordinators: {
          name: "None",
          contact: "None",
        },
      },
      {
        name: "Tech Pair",
        date: "TBA",
        venue: "TBA",
        time: "TBA",
        team: "2",
        description: [
          "Round 1:In this round, two members will be participating, one member as a catcher and the other member as a responser. The timing of the event is 5 minutes where the catcher will be given a technical word and they should help the responser to find out the word with a maximum of three clues.",
          "Round 2: In this round, a poster will be displayed for the participants for nearly 20 seconds. Later on, the participants should recreate the poster that was displayed. The time for recreating the poster would be approximately some 30 to 45 minutes.", 
          "Round 3:Just a minute (JAM)",
          "Round 4:In this round, a topic will be given to a person ( any one of the two participants). The person should write a content on that given topic.The other participant now should analyze and understand the content written by their team member and should speak on that topic for 3 minutes."
        ],
        shortDescription:"A pair event to solve challenges",
        rules: [
          "Round 1 rules:There should not be any direct communication between the participants.",
          "They should find the word only by giving clues.Participants will be rewarded points based on how many words they find within the given time constraint.",

          "Round 2 rules:The Participants will not be given any extra time while analyzing the poster.",
          "The Participants will be judged based on their accuracy for the poster they recreate within the given time constraint.",

          "Round 3 rules:The Participants will not be given any extra time.",
          "The Participants will be judged based on their understanding and how they explain the content."
 ],
        requirements: ["TBA"],
        coordinators: { name: "TBA", contact: "TBA" },
      },
    ],
  },
  // { id: "workshops" },
  // { id: "proshows" },
];

export default eventsData;
