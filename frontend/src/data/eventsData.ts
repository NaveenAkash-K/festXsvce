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
  {
    id: "auto",
    events: [
      {
        name: "PITSTOP",
        date: "TBA",
        time: "TBA",
        venue: "Automobile Components Laboratory",
        team: "1-2",
        description: [
          '"Pitting" is a common term used in F1 racing. It is the time period in which the car arrives at their allocated "Pitstop" to change the tyres or repair any damages occurred to the car during the course of the race.',
          "Participants will be asked to change the tyres of a particular car, with the given tools. Time taken by the teams will be noted down. Top 3 teams with the minimum time taken to change the tyres will be announced as the winner and runners.",
        ],
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
        venue: "Automotive CAD Laboratory",
        team: "2-4",
        description: [
          "Participants will be provided with a set of problem statements related to automobiles ONLY. Coding won't be mandatory for this event. Teams need to select a particular problem statement and work on it for a solution. Teams will be asked to create a presentation for their solution, with analysis.",
          "At the end of the session, teams will be asked to present their PPTs, and the best 3 teams will be awarded.",
        ],
        rules: [
          "Each team can consist of 2-4 members. Teams should bring their own laptops.",
          "Only one problem statement can be selected from these events, and the teams won’t be allowed to change it during the course of the event.",
          "The challenge is time-bound. Teams will be given 3 hours, after selecting their problem statement, to work on the solutioning and PPT.",
          "The decision of the judging panel will be considered FINAL in any circumstances.",
        ],
        requirements: ["TBA"],
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
          "Participants will be provided with an RC car.",
          "They'll be completing a race course with that RC car.",
          "The participant who takes the minimum time to complete the event, adhering to all rules set by the organizers, will be the winner.",
        ],
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
    events: [
      {
        name: "Biomonopoly",
        date: "TBA",
        time: "TBA",
        venue: "Biotech Seminar Hall",
        team: "Maximum of 2 members",
        description: [
          "This event will consist of several plots (problem statement open to all departments) where each team rolls a die and lands on a plot with a problem statement. If the team finds the problem statement solvable, they buy it and present their solution, or they can move to the next plot without buying the problem statement in the next turn. The team that solves the maximum problem statements in the given time will be announced as the winner.",
        ],
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
        requirements: ["TBA"],
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
        rules: [
          "The teams are required to solve within the allotted time limits for respective events.",
          "In verbal tides, the members should stay in the given characters until the round ends.",
          "Mouthing and acting out words/clues in BIOARTS will lead to disqualification. A point will be awarded to the team if the member identifies the clue and another point will be awarded as the team identifies the correct answer.",
          "Teams are not allowed to help each other out.",
        ],
        requirements: [
          "Projectors",
          "Papers and pencils",
          "Board with chalk or marker",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Find It First",
        date: "TBA",
        time: "TBA",
        venue: "Marine Block Classroom",
        team: "Maximum of 2 members per team",
        description: [
          "SEGMENT1:",
          "There will be a few pictures containing a collection of items, each picture pertaining to different topics. Questions will be asked in the type of riddles or clues or cropped images to identify one particular item from a picture. A point will be awarded as they identify each item first, and the team with the maximum points will move on to the next segment.",
          "SEGMENT2:",
          "An audio will be played which depicts clues regarding a particular domain. Participants will have to find the correct answer and the number of relatable clues within 15 secs after the audio was played. Teams with the lowest points will be eliminated.",
          "SEGMENT3:",
          "Participants will be shown ten random blocks with hidden puzzles(9 pieces) each pertaining to a particular domain, from which they’ll have to select one and solve it.",
        ],
        rules: [
          "Use of mobile phones is prohibited.",
          "SEGMENT1: Each picture will be displayed for 20 sec. 3 pictures per domain. A point will be awarded for identifying the item and another point will be awarded for identifying the correct picture.",
          "SEGMENT2: The audio track will be played only once. Regarding the number of relatable clues teams aren't allowed to jot down the words.",
          "SEGMENT3: Teams get 30 secs to frame the puzzle and 10 secs to figure out the domain.",
          "Throughout the segments teams aren’t allowed to help other teams.",
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
    id: "chem",
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
        rules: [
          "1) The team consists of two to three persons.",
          "2) In round one, players must link the images provided to answer the given question. The shortlisted team will advance to the next round.",
          "3) In round two, selected individuals are invited to play a game similar to snake and ladder, with half of the blocks filled with technical questions from chemical engineering concepts and the other half packed with enjoyable tasks.",
          "4) Qualified teams from round 2 advance to phase 3, where the shortlisted players compete in a bidding auction to check the correctness of the suggested statement and change it correctly.",
          "5) The team with the most earnings at the end is proclaimed the champion.",
          "6) Use of the internet is prohibited.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "ChemScape Room",
        date: "TBA",
        time: "TBA",
        venue: "Any classroom at Block 2",
        team: "3",
        description: [
          "Immerse yourself in the world of chemical engineering with 'ChemScape rooms,' an exhilarating escape room experience designed to challenge your problem-solving skills and ignite your passion for chemE. Assemble your team of aspiring engineers and venture into a meticulously crafted setting, where every detail is infused with intrigue and mystery.",
          "Within the confines of the room, participants encounter a series of perplexing puzzles, each one intricately linked to fundamental principles of chemical engineering. From balancing chemical equations to optimizing reactor designs, every challenge offers a unique opportunity to apply your theoretical knowledge in a practical, hands-on context.",
        ],

        rules: [
          "Usage of mobile phones and internet is restricted.",
          "Decorum is maintained by participants throughout the event",
        ],
        requirements: ["TBA"],
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
        team: "1-3",
        description: [
          "At InnoSolve, participants are given a leadership designation of a specific firm related to their department and are handed with dynamic challenge of solving real-world industrial problems.",
          "With a selection of diverse industrial challenges of a common theme (ex: circular economy/zero defects), participants choose their battleground and unleash their problem-solving prowess. Armed with expertise and creativity, they have a focused three-hour window to decipher, strategize, and ultimately pitch their solutions to a discerning panel of judges.",
        ],
        rules: [
          "Judges’ call remains final decision",
          "Decorum is expected to be maintained by participants at all costs",
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
    id: "civil",
    events: [
      {
        name: "EcoStruct",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "TBA",
        description: [
          "Crafting Tomorrow's Infrastructure",
          "Participants are given a set of specifications for a building project, such as size, location, and purpose. Their task is to design the building using sustainable principles, such as energy efficiency, use of renewable materials, and water conservation. They must create the design using AutoCAD and present it along with a brief explanation of their sustainable design choices.",
        ],
        rules: [
          "One person per team is allowed.",
          "The design should be adhered to IS code specifications.",
          "The design should fulfill the theme of the event. (sustainability)",
          "The design which is more sustainable and aesthetically appealing is declared the winner.",
        ],
        requirements: ["Laptops with AutoCAD installed"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
    ],
  },
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
  {
    id: "ece",
    events: [
      {
        name: "SparkQuest",
        date: "TBA",
        time: "TBA",
        venue: "Electron Devices lab of ECE Department",
        team: "2 to 3",
        description: [
          "Participants will engage in a comprehensive treasure hunt featuring diverse clues encompassing areas such as logic gates, digital electronics, communication, signal processing, Arduino, and Programming. The team achieving the best timing within the 3-hour time limit will be declared the winner.",
        ],
        rules: [
          "• Teams must consist of 2 to 3 participants.",
          "• Each clue in the treasure hunt will be uniquely crafted, drawing from a diverse range of topics including logic gates, digital electronics, communication, signal processing, Arduino, and Programming.",
          "• Each clue will help participants to advance to the next level.",
          "• Participants are allowed to use standard tools and equipment approved by event organizers.",
          "• Usage of Smartphones or any smart devices is strictly prohibited.",
        ],
        requirements: [
          "Participants are allowed to bring standard tools and equipment if required.",
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
        rules: [
          "• Teams must consist of 2 to 3 participants.",
          "• Participants will randomly choose cards featuring electric components from each deck; the chosen components must be used in the circuit or product design.",
          "• Basic electronic components and materials necessary for circuit building will be provided. Teams may not bring their own components; they must use the provided materials.",
          "• The design phase has a strict time limit of 60 minutes. Teams must complete their circuits or products within this timeframe.",
          "• Participants are allowed to use standard tools and equipment but must be approved by event organizers.",
          "• Teams will have a brief time slot for pitching their final product or circuit design.",
        ],
        requirements: [
          "• Participants should bring their own laptop for programming the controller, with Arduino IDE installed in it.",
          "• Participants are allowed to bring standard tools and equipment if required.",
        ],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "Citadel Clash",
        date: "TBA",
        time: "TBA",
        venue: "Microprocessor Lab",
        team: "2 to 3",
        description: [
          "Participants will navigate through two thrilling rounds, combining visual acuity, puzzle-solving, and circuit design skills to emerge victorious. This event is not just about solving puzzles but also about fortifying your fortress against challenges and uncertainties.",
          "Tagline: Conquer the risks, fortify your legacy",
          "Round Details:",
          "Round 1: Spot the Difference",
          "Participants will analyze two images, identifying discrepancies related to electronic circuits.",
          "Round 2: Solve the puzzle or pick a block",
          "Teams progress to the next round where they face a choice between solving crossword puzzles or removing a block from the Jenga tower.",
          "Crossword puzzles must be solved within a limited time frame to avoid removing a Jenga block.",
          "If the team successfully completes the puzzles, they advance without touching the Jenga tower.",
          "If the Jenga tower falls, the team is eliminated.",
          "The last team standing with an intact fort emerges as the winner of the event.",
        ],
        rules: [
          "• Teams consist of 2 to 3 participants.",
          "• In Round 1, participants will spot the differences between two images related to electronic circuits.",
          "• Selected teams from Round 1 will progress to Round 2, facing a choice between solving crossword puzzles or removing a block from the Jenga tower.",
          "• Each crossword puzzle must be solved within a limited time frame. Failure to do so requires the team to remove a piece from the Jenga tower.",
          "• If the Jenga tower collapses, the team is eliminated from the competition.",
          "• The final surviving team with an unbroken fort wins the Challenge.",
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
    events: [
      {
        name: "Uknowhunt",
        date: "TBA",
        time: "TBA",
        venue: "Classrooms",
        team: "3",
        description: [
          '"UKnowHunt" is a dynamic and thrilling intercollege event hosted by the Electrical and Electronics Engineering (EEE) department in SVCE "Techfest". This event is designed to combine the excitement of the classic Uno game with the intellectual challenge of a technical treasure hunt quiz, creating a unique and engaging experience for participants. Teams will navigate through two rounds, showcasing their strategic thinking and electrical engineering knowledge to emerge victorious.',
          "Round 1: Uno Game, In the first round, teams will dive into the fast-paced world of Uno. The team leader will represent their group in a battle of wits and strategy. The stakes are high, as the first-place team earns three lifelines, the second-place team receives two lifelines, and the third-place team gains one lifeline. These lifelines will serve as valuable assets in the second round.",
          'Round 2: Treasure Hunt Quiz, The second round transforms into a technical treasure hunt quiz, where teams explore a series of rooms, each presenting a unique challenge(Questions, Arduino Debugging etc...) related to electrical and electronics engineering. Teams progress by successfully completing each technical challenge in a room. The team that successfully finishes all questions first will be crowned the ultimate winner of "UKnowHunt".',
        ],
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
        date: "TBA",
        time: "TBA",
        venue: "Classroom with Projector",
        team: "3-5",
        description: [
          "Phase 1: SOS Signal (30 minutes):",
          "● Send a Distress Call: Your mission begins with a microcontroller—your only lifeline to the outside world. Successfully interface it with an LCD display and print a desperate plea for 'HELP' to unlock the next step.",
          "● Alternative Route: If precious time slips away, your team will face a hands-on challenge: assemble a circuit with a specific output to bypass the bank's security measures.",
          "Phase 2: Circuit schematics (30 minutes):",
          "● Follow the Electrical Trail: Navigate a tangled web of circuits, tracing electrical pathways and deciphering complex schematics to locate the crucial 5V terminal—the key to powering your next move.",
          "● Under Pressure: If the clock runs out before you find the terminal, the bank's countermeasures will trigger a surprise circuit-building challenge to test your adaptability and resourcefulness.",
          "Phase 3: Digital Decypher(30 minutes):",
          "● Confront the Final Guardian: The vault's digital heart, a formidable circuit, stands between you and the treasure. Decipher its logic, analyze its signals, and experiment with input combinations to crack the code and claim your prize.",
          "● Last Resort: If the circuit proves uncrackable, unleash your creativity and construct a 'hacking bomb' circuit with a calculated output to blast through the vault's defenses.",
          "Tagline: Crack codes, navigate circuits, seize the treasure—do you have what it takes to triumph in The Twisted Heist?",
        ],
        rules: [
          "1. Each phase has a 30-minute time limit.",
          "2. Teams must progress through phases sequentially.",
          "3. Only in the last 5 mins the lifelines for the next level will be revealed.",
          "4. Basic knowledge of Electrical and electronics are enough.",
        ],
        requirements: ["A4 sheets"],
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
          'Tagline: "Turning Ideas into Action: Join the SDG Innovation Challenge!"',
        ],
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
        rules: [
          "1. Participants can use any tool to develop a web design preferably figma.",
          "2. Plagiarism is not allowed.",
          "3. Team size should not exceed 3.",
          "4. All the participants are requested to bring Laptops.",
        ],
        requirements: ["Laptop"],
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
        rules: [
          "1. Decorum must be maintained at all times on the floor.",
          "2. The judge’s say is final and any opposition will lead to disqualification.",
          "3. Use of generative AI for preparation is permitted but only during preparation time and not once the debate starts.",
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
    id: "mech",
    events: [
      {
        name: "MetalMorph",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "2",
        description: [
          "In the intense competition known as MetalMorph, teams are immersed in a thrilling lathe war where precision and creativity intertwine. Participants are tasked with crafting precise components from raw workpieces, utilizing design diagrams provided at the venue. Precision, speed, and inventive techniques will be the deciding factors in determining the ultimate MetalMorph champion.",
        ],
        rules: [
          "1. Adherence to strict safety guidelines is important.",
          "2. Teams will be judged on the accuracy, speed, and overall craftsmanship of their machined components.",
          "3. Each participating team must successfully complete the machining process within the specified time frame.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "DesignSprint",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "Individual Participation",
        description: [
          "DesignSprint is an exhilarating Creo design challenge that demands participants to bring 2-D designs to life using the Creo parametric software. This competition isn't just about technical proficiency; it's a platform for participants to unleash their creativity, surmount design obstacles, and showcase creative solutions. DesignSprint is the ultimate playground for aspiring design maestros, where the fusion of technology and imagination yields victory.",
        ],
        rules: [
          "1. Participants are required to utilize Creo software exclusively for the design challenge.",
          "2. Judging criteria encompass the time utilized, precision, in making the design.",
        ],
        requirements: ["Laptop equipped with Creo software"],
        coordinators: {
          name: "TBA",
          contact: "TBA",
        },
      },
      {
        name: "InnoVision Expo",
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        team: "Individual Participation",
        description: [
          "In the InnoVision Expo, the stage is set for students to illuminate the audience with innovative papers spanning diverse mechanical engineering concepts. The event serves as a nexus for intellectual discourse, encouraging insightful discussions, and fostering connections among visionaries in the field.",
        ],
        rules: [
          "1. Presentations are expected to adhere strictly to the allocated time limit.",
          "2. Each presentation will be followed by a dynamic Q&A session, promoting an exchange of ideas and perspectives.",
          "3. Evaluation criteria are comprehensive, covering content richness, clarity of presentation, and overall impact.",
        ],
        requirements: ["TBA"],
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
        rules: [
          "1. The quiz is structured with timed multiple-choice questions, testing both speed and accuracy.",
          "2. Top-scoring teams advance to an exhilarating final round, potentially involving interactive challenges or problem-solving scenarios.",
          "3. The final round serves as the ultimate decider for the winning team.",
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
    id: "ieee_club",
    events: [
      {
        name: "ProjectForge",
        date: "TBA",
        time: "TBA",
        venue: "EEE department lab",
        team: "1",
        description: [
          "Welcome to the 'ProjectForge' – an immersive mini-project simulation event hosted on an online platform!",
          "Prepare to embark on a journey where your skills in Arduino circuit design and coding will be put to the test in real-time.",
          "An exciting problem statement will be unveiled. Your task? Design an Arduino circuit and write code to tackle the on-the-spot challenge.",
          "It could be anything from creating a smart home automation system to designing a sensor-based project. Get ready to apply your technical and problem-solving skills.",
        ],
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
        venue: "Function Hall",
        team: "1-3",
        description: [
          "Welcome to 'PitchForge', a dynamic pitching event where teams are challenged to provide innovative solutions to bring highly technical products to market.",
          "In this high-stakes competition, participants will demonstrate their prowess in pitching and delivering compelling solutions within a stipulated time frame.",
          "With an emphasis on interdisciplinary collaboration and real-world applicability, teams must craft solutions showcasing not only technical excellence but also practical, impactful, and scalable outcomes.",
          "The stage is set for a pitch-perfect showdown where teams will compete to impress judges with their problem-solving abilities under tight deadlines. May the most inventive and adept solutions rise to the challenge!",
        ],
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
    events: [
      {
        name: "Relay Rush",
        date: "TBA",
        time: "TBA",
        venue: "IT Department Lab",
        team: "3 Members",
        description: [
          '"Code Relay Rush" is a dynamic coding competition where teams solve a chain of related issues.',
          "One participant kicks off, and their solution sets the stage for the next coder. Speed is key – the faster your team solves, the better.",
          "The challenges are interlinked, ensuring a seamless flow.",
          "It's a race against time and bugs. Precision and teamwork matter most. As each hurdle falls, the next coder takes the lead.",
          'The team with the shortest overall time emerges victorious. Simplified coding adrenaline – that\'s "Code Relay Rush" in a nutshell!',
        ],
        rules: [
          "There should be no communication between the team members.",
          "Indulging in any kind of malpractice will lead to instant disqualification of the participant.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "Kavitha (Secretary)",
          contact: "9345603091",
        },
      },
      {
        name: "Prompt Tactics",
        date: "TBA",
        time: "TBA",
        venue: "IT Department Lab",
        team: "2 Members",
        description: [
          "Welcome to the Tech Odyssey - where coding meets creativity in a thrilling three-act saga!",
          "Round 1: Password Hunt - Embark on a digital treasure hunt through 7 levels of password wizardry. Crack the codes in 5 minutes or less to advance.",
          "Round 2: Prompt Craft - Unleash your inner artist as you craft prompts for an AI to replicate an image. It's a duel of creativity and code. The most visually stunning replication earns you a ticket to the grand finale.",
          "Round 3: SQL Showdown - In the final act, dive into the depths of databases and solve SQL riddles with bite-sized queries. It's not just about code; it's about unraveling the mysteries with finesse. Only the SQL maestros will emerge victorious!",
        ],
        rules: [
          "Plagiarism is not allowed.",
          "Indulging in any kind of malpractice will lead to instant disqualification of the participant.",
        ],
        requirements: ["TBA"],
        coordinators: {
          name: "Vishal Athreya",
          contact: "9345182466",
        },
      },
    ],
  },
  // { id: "workshops" },
  // { id: "proshows" },
];

export default eventsData;
