import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/page/eventForm.module.css";
// import IIM from "../assets/images/2IIM.png";
const EventForm: React.FC = () => {
  const [isTechPass, setIsTechPass] = useState<boolean>(false);
  const [isProShows, setIsProShows] = useState<boolean>(false);
  const [isElite, setIsElite] = useState<boolean>(true);
  const [nextPage, setPage] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [techPrice, setTechPrice] = useState<Number>(299);
  const [elitePrice, setElitePrice] = useState<Number>(499);
  const [billingName, setBillingName] = useState<string>("");
  const [billingAddress, setBillingAddress] = useState<string>("");
  const [billingCity, setBillingCity] = useState<string>("");
  const [billingState, setBillingState] = useState<string>("");
  const [billingZip, setBillingZip] = useState<string>("");
  const [billingTel, setBillingTel] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [regNo, setRegNo] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

  const [basicsAutomotive, setBasicsAutomotive] = useState(false);
  const [MARINEPP, SETMARINEPP] = useState(false);
  const [BONDBLEND, SETBONDBLEND] = useState(false);
  const [WELDINGMASTERS, SETWELDINGMASTERS] = useState(false);
  const [revit, setRevit] = useState(false);
  const [biomonopoly, setBiomonopoly] = useState(false);
  const [ctrlalt, setCtrlAlt] = useState(false);
  const [haijo, setHaijo] = useState(false);
  const [bridge, setBridge] = useState(false);
  const [mudwell, setMudwell] = useState(false);
  const [techPair, setTechPair] = useState(false);
  const [prompt, setPrompt] = useState(false);
  const [sdg, setSdg] = useState(false);
  const [uKnow, setUKnow] = useState(false);
  const [electro, setElectro] = useState(false);
  const [spark, setSpark] = useState(false);
  const [thrill, setThrill] = useState(false);
  const [arvr, setArvr] = useState(false);
  const [chemintri, setChemintri] = useState(false);
  const [cheme, setCHEME] = useState(false);
  const [pitch, setPitch] = useState(false);
  const [render, setRender] = useState(false);
  const [mechstix, setMechstix] = useState(false);

  const [innosolve, setInnosolve] = useState(false);
  const [basicsOnCFTWorkshop, setBasicsOnCFTWorkshop] = useState(false);
  const [uiUx, setUiUx] = useState(false);
  const [relayRush, setRelayRush] = useState(false);
  const [projectForge, setProjectForge] = useState(false);
  const [theMistedHeist, setTheMistedHeist] = useState(false);
  const [escapeRooms, setEscapeRooms] = useState(false);
  const [paperPresentationCivil, setPaperPresentationCivil] = useState(false);
  const [paperPresentationECE, setPaperPresentationECE] = useState(false);
  const [embeddedSystemWorkshop, setEmbeddedSystemWorkshop] = useState(false);
  const [visualPapyrus, setVisualPapyrus] = useState(false);
  const [BGMI, SETBGMI] = useState(false);
  const [jokerCoder, setJokerCoder] = useState(false);
  const [pitstop, setPitstop] = useState(false);
  const [innovisionExpo, setInnovisionExpo] = useState(false);
  const [thinkTank, setThinkTank] = useState(false);
  // const [isTechPassDisable, setIsTechPassDisable] = useState(false);
  const [isEventsDisabled, setIsEventsDisabled] = useState(false);
  // Example of using the techPrice variable
  // useEffect(() => {
  //   // Array containing all the state variables
  //   const events = [
  //     isTechPass,
  //     isProShows,
  //     basicsAutomotive,
  //     revit,
  //     biomonopoly,
  //     ctrlalt,
  //     haijo,
  //     bridge,
  //     mudwell,
  //     techPair,
  //     prompt,
  //     sdg,
  //     uKnow,
  //     electro,
  //     spark,
  //     thrill,
  //     arvr,
  //     chemintri,
  //     cheme,
  //     pitch,
  //     render,
  //     mechstix,
  //     innosolve,
  //     basicsOnCFTWorkshop,
  //     uiUx,
  //     relayRush,
  //     projectForge,
  //     theMistedHeist,
  //     escapeRooms,
  //     paperPresentationCivil,
  //     paperPresentationECE,
  //     embeddedSystemWorkshop,
  //     visualPapyrus,
  //     jokerCoder,
  //     pitstop,
  //     innovisionExpo,
  //     thinkTank,
  //   ];

  //   // Check if any of the state variables is true
  //   const isAnyTrue = events.some((event) => event);

  //   // Check if all of the state variables are false
  //   const areAllFalse = events.every((event) => !event);

  //   // Set isTechPass state based on the condition
  //   setIsTechPass(!areAllFalse && isAnyTrue);
  // }, [
  //   basicsAutomotive,
  //   revit,
  //   biomonopoly,
  //   ctrlalt,
  //   haijo,
  //   bridge,
  //   mudwell,
  //   techPair,
  //   prompt,
  //   sdg,
  //   uKnow,
  //   electro,
  //   spark,
  //   thrill,
  //   arvr,
  //   chemintri,
  //   cheme,
  //   pitch,
  //   render,
  //   mechstix,
  //   innosolve,
  //   basicsOnCFTWorkshop,
  //   uiUx,
  //   relayRush,
  //   projectForge,
  //   theMistedHeist,
  //   escapeRooms,
  //   paperPresentationCivil,
  //   paperPresentationECE,
  //   embeddedSystemWorkshop,
  //   visualPapyrus,
  //   jokerCoder,
  //   pitstop,
  //   innovisionExpo,
  //   thinkTank,
  // ]);
  // useEffect(() => {
  //   if (isProShows === true && !isElite) {
  //     setBasicsAutomotive(false);
  //     setRevit(false);
  //     setBiomonopoly(false);
  //     setCtrlAlt(false);
  //     setHaijo(false);
  //     setBridge(false);
  //     setMudwell(false);
  //     setTechPair(false);
  //     setPrompt(false);
  //     setSdg(false);
  //     setUKnow(false);
  //     setElectro(false);
  //     setSpark(false);
  //     setThrill(false);
  //     setArvr(false);
  //     setChemintri(false);
  //     setCHEME(false);
  //     setPitch(false);
  //     setRender(false);
  //     setMechstix(false);
  //     setInnosolve(false);
  //     setBasicsOnCFTWorkshop(false);
  //     setUiUx(false);
  //     setRelayRush(false);
  //     setProjectForge(false);
  //     setTheMistedHeist(false);
  //     setEscapeRooms(false);
  //     setPaperPresentationCivil(false);
  //     setPaperPresentationECE(false);
  //     setEmbeddedSystemWorkshop(false);
  //     setVisualPapyrus(false);
  //     setJokerCoder(false);
  //     setPitstop(false);
  //     setInnovisionExpo(false);
  //     setThinkTank(false);
  //     setIsTechPassDisable(true);
  //     setIsTechPass(false);
      // setIsEventsDisabled(true);
  //   } else {
      // setIsEventsDisabled(false);
  //     setIsTechPassDisable(false)
  //   }
  // }, [isProShows]);
  // useEffect(() => {
  //   // if (isTechPass && isProShows) {
  //   //   setIsElite(true);
  //   // }
  //   if(isElite){
  //     setIsProShows(true)
  //     setIsTechPass(true)
  //   }
  //   if(!isElite){
  //     setIsProShows(false)
  //     setIsTechPass(false)
  //   }
  // }, [isTechPass, isProShows, isElite]);
  useEffect(() => {
    if (email.trim().endsWith("svce.ac.in")) {
      setElitePrice(399);
      setTechPrice(199);
    } else {
      setElitePrice(499);
      setTechPrice(299);
    }
  }, [email]);

  // Add these onChange handlers to your checkboxes
  const handleBasicsAutomotiveChange = () =>
    setBasicsAutomotive(!basicsAutomotive);
  const handleRevitChange = () => setRevit(!revit);
  const handleBGMIChange = () => SETBGMI(!BGMI);
  const handleMARINEPPChange = () => SETMARINEPP(!MARINEPP);
  const handleBONDBLENDChange = () => SETBONDBLEND(!BONDBLEND);
  const handleWELDINGMASTERSChange = () => SETWELDINGMASTERS(!WELDINGMASTERS);
  const handleBiomonopolyChange = () => setBiomonopoly(!biomonopoly);
  const handleCtrlAltChange = () => setCtrlAlt(!ctrlalt);
  const handleHaijoChange = () => setHaijo(!haijo);
  const handleBridgeChange = () => setBridge(!bridge);
  const handleMudwellChange = () => setMudwell(!mudwell);
  const handleTechPairChange = () => setTechPair(!techPair);
  const handlePromptChange = () => setPrompt(!prompt);
  const handleSdgChange = () => setSdg(!sdg);
  const handleUKnowChange = () => setUKnow(!uKnow);
  const handleElectroChange = () => setElectro(!electro);
  const handleSparkChange = () => setSpark(!spark);
  const handleThrillChange = () => setThrill(!thrill);
  const handleArvrChange = () => setArvr(!arvr);
  const handleChemintriChange = () => setChemintri(!chemintri);
  const handleCHEMEChange = () => setCHEME(!cheme);
  const handlePitchChange = () => setPitch(!pitch);
  const handleRenderChange = () => setRender(!render);
  const handleMechstixChange = () => setMechstix(!mechstix);

  const handleInnosolveChange = () => setInnosolve(!innosolve);
  const handleBasicsOnCFTWorkshopChange = () =>
    setBasicsOnCFTWorkshop(!basicsOnCFTWorkshop);
  const handleUiUxChange = () => setUiUx(!uiUx);
  const handleRelayRushChange = () => setRelayRush(!relayRush);
  const handleProjectForgeChange = () => setProjectForge(!projectForge);
  const handleTheMistedHeistChange = () => setTheMistedHeist(!theMistedHeist);
  const handleEscapeRoomsChange = () => setEscapeRooms(!escapeRooms);
  const handlePaperPresentationCivilChange = () =>
    setPaperPresentationCivil(!paperPresentationCivil);
  const handlePaperPresentationECEChange = () =>
    setPaperPresentationECE(!paperPresentationECE);
  const handleEmbeddedSystemWorkshopChange = () =>
    setEmbeddedSystemWorkshop(!embeddedSystemWorkshop);
  const handleVisualPapyrusChange = () => setVisualPapyrus(!visualPapyrus);
  const handleJokerCoderChange = () => setJokerCoder(!jokerCoder);
  const handlePitstopChange = () => setPitstop(!pitstop);
  const handleInnovisionExpoChange = () => setInnovisionExpo(!innovisionExpo);
  const handleThinkTankChange = () => setThinkTank(!thinkTank);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Form | Technoways";
    var l = email.endsWith("svce.ac.in");
    if (l) {
      setTechPrice(199);
      setElitePrice(399);
    } else {
      setTechPrice(299);
      setElitePrice(499);
    }
  }, [nextPage]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Register</h1>
        <br />
        <center>
          <h3>⭐ Avail special offer by using svce official maid id ⭐ </h3>
        </center>
        <br />
        <form
          method="POST"
          name="customerData"
          // action="http://localhost:3001/ccavRequestHandler"
          action="https://technoways-svce-backend.vercel.app/ccavRequestHandler"
          className={styles.eventFormContainer}
        >
          <input
            type="text"
            name="billing_name"
            placeholder="Name"
            required
            // value={billingName}
            onChange={(e) => setBillingName(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="billing_address"
            placeholder="Address"
            required
            // value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="billing_city"
            placeholder="City"
            required
            //value={billingCity}
            onChange={(e) => setBillingCity(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="billing_state"
            placeholder="State"
            required
            //value={billingState}
            onChange={(e) => setBillingState(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="billing_zip"
            placeholder="Pincode"
            required
            //value={billingZip}
            onChange={(e) => setBillingZip(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="billing_tel"
            placeholder="Phone No"
            required
            //value={billingTel}
            onChange={(e) => setBillingTel(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="email"
            name="billing_email"
            placeholder="Email"
            //value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            required
            //value={college}
            onChange={(e) => setCollege(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="year"
            placeholder="Year of Study"
            required
            //value={year}
            onChange={(e) => setYear(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="regNo"
            placeholder="College Register No"
            required
            //value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            // disabled={isEventsDisabled}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            required
            //value={department}
            onChange={(e) => setDepartment(e.target.value)}
            // disabled={isEventsDisabled}
          />
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              setPage(true);
            }}
          >
            Next
          </button> */}
          <div className={styles.passTag}>
            <br />

            <p>Select atleast any one pass.</p>
            <p>Only one response is recorded for a email</p>
            <p>Please ensure provided email is valid for ticket generation</p>
            <p>
              You can either choose Technoways Pass or Proshows Pass or Elite
              for both pass
            </p>
            <br />
            <h1 style={{ fontSize: "2rem" }}>Get Your Passes Now</h1>
            <div>
              <input
                type="radio"
                name="pass"
                id="pass"
                // disabled={isTechPassDisable}
                // checked={isTechPass}
                value={"TechPass"}
                onChange={(value) => {
                  setIsTechPass(value.target.checked);
                }}
              />
              <span style={{ fontSize: "1.1rem" }}>
                TECHNOWAYS PASS (Only for Tech Events) RS:
                {techPrice?.toString()}
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="pass"
                id="pass"
                value={"Proshows"}

                // checked={isProShows}
                onChange={(value) => {
                  setIsProShows(value.target.checked);
                }}
              />
              <label htmlFor="proshows" style={{ fontSize: "1.1rem" }}>
                PRO SHOWS (Only for concert) RS:299
              </label>
            </div>
            <div>
              <center>
                <h2>⭐BEST SELLING⭐</h2>
              </center>
              <input
                type="radio"
                name="pass"
                value={"Elite"}
                id="pass"
                defaultChecked={true}
                // checked={isElite}
                onChange={(value) => {
                  setIsElite(value.target.checked);
                }}
              />
              <span style={{ fontSize: "1.1rem" }}>
                ELITE (For both events and concert) RS:{elitePrice?.toString()}
              </span>
            </div>
            {/* <button onClick={() => setPage(false)}>Prev</button> */}
          </div>
          <br />
          <br />
          <h1>Technical Events</h1>
          <p>Select events that do not overlap in time.</p>
          <p>Below events doesnt apply for proshow passes.</p>
          <div className={styles.nextPageContainer}>
            <div className={styles.day1}>
              <h3 style={{ textAlign: "center" }}>Day1</h3>
              {/* <div>
                <input
                  name="BASICS AUTOMOTIVE"
                  type="checkbox"
                  id="techpass"
                  onChange={handleBasicsAutomotiveChange}
                  // disabled={isEventsDisabled}
                  checked={basicsAutomotive}
                />
                <label htmlFor="basicsAutomotive">
                  Basics Of Automotive Tuning (9:30AM-12:30PM)
                </label>
              </div> */}
              <div>
                <input
                  name="PAPER PRESENTATION (MARINE)"
                  type="checkbox"
                  id="techpass"
                  onChange={handleMARINEPPChange}
                  // disabled={isEventsDisabled}
                  checked={MARINEPP}
                />
                <label htmlFor="PAPER PRESENTATION (MARINE)">
                  PAPER PRESENTATION (MARINE)
                </label>
              </div>
              <div>
                <input
                  name="WELDING MASTERS"
                  type="checkbox"
                  id="techpass"
                  onChange={handleWELDINGMASTERSChange}
                  // disabled={isEventsDisabled}
                  checked={WELDINGMASTERS}
                />
                <label htmlFor="WELDING MASTERS">WELDING MASTERS</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="REV IT UP"
                  id="techpass"
                  onChange={handleRevitChange}
                  // disabled={isEventsDisabled}
                  checked={revit}
                />
                <label htmlFor="revit">Rev It Up (1:00PM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="BIOMONOPOLY"
                  id="techpass"
                  onChange={handleBiomonopolyChange}
                  // disabled={isEventsDisabled}
                  checked={biomonopoly}
                />
                <label htmlFor="biomonopoly">
                  Bio Monopoly(10:00AM-1:00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="CTRL + ALT + DELETE"
                  id="techpass"
                  onChange={handleCtrlAltChange}
                  // disabled={isEventsDisabled}
                  checked={ctrlalt}
                />
                <label htmlFor="ctrlalt">
                  CTRL+ALT+DELETE (10:00AM-1:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="HAIJO"
                  id="techpass"
                  onChange={handleHaijoChange}
                  // disabled={isEventsDisabled}
                  checked={haijo}
                />
                <label htmlFor="haijo">HAIJO (12:00AM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="BRIDGE EXPERTISE"
                  id="techpass"
                  onChange={handleBridgeChange}
                  // disabled={isEventsDisabled}
                  checked={bridge}
                />
                <label htmlFor="BRIDGE">
                  BRIDGE EXPERTISE (10:30AM-12:00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="MUDWELL MASTERY"
                  id="techpass"
                  onChange={handleMudwellChange}
                  // disabled={isEventsDisabled}
                  checked={mudwell}
                />
                <label htmlFor="MUDWELL">MUDWELL MASTERY (1:00PM-2:30PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="TECHPAIR"
                  id="techpass"
                  onChange={handleTechPairChange}
                  // disabled={isEventsDisabled}
                  checked={techPair}
                />
                <label htmlFor="TECHPAIR">TECH PAIR (10:30AM-12:30PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PROMPT TACTICS"
                  id="techpass"
                  onChange={handlePromptChange}
                  // disabled={isEventsDisabled}
                  checked={prompt}
                />
                <label htmlFor="prompt">PROMPT TACTICS (1:00PM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="SDG INNOVATION CHALLENGE"
                  id="techpass"
                  onChange={handleSdgChange}
                  // disabled={isEventsDisabled}
                  checked={sdg}
                />
                <label htmlFor="SDG">
                  SDG INNOVATION CHALLENGE(10:30AM-11:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="UKNOWHUNT"
                  id="techpass"
                  onChange={handleUKnowChange}
                  // disabled={isEventsDisabled}
                  checked={uKnow}
                />
                <label htmlFor="UKNOW">UKNOWHUNT (12:00PM-2:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ELECTRO-CRAFT"
                  id="techpass"
                  onChange={handleElectroChange}
                  // disabled={isEventsDisabled}
                  checked={electro}
                />
                <label htmlFor="ELECTRO">
                  ELECTRO-CRAFT CHALLENGE (10:30AM-12:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="SPARK QUEST"
                  id="techpass"
                  onChange={handleSparkChange}
                  // disabled={isEventsDisabled}
                  checked={spark}
                />
                <label htmlFor="SPARK">SPARK QUEST (12:30PM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="THRILL QUEST"
                  id="techpass"
                  onChange={handleThrillChange}
                  // disabled={isEventsDisabled}
                  checked={thrill}
                />
                <label htmlFor="THRILL">THRILL QUEST (10:00AM-3:00PM)</label>
              </div>
              {/* <div>
                <input
                  type="checkbox"
                  name="AR VR WORKSHOP"
                  id="techpass"
                  onChange={handleArvrChange}
                  // disabled={isEventsDisabled}
                  checked={arvr}
                />
                <label htmlFor="ARVR">
                  WORKSHOP ON AR & VR (10:00AM-3:00PM)
                </label>
              </div> */}
              <div>
                <input
                  type="checkbox"
                  name="CHEM E PANSOPHY"
                  id="techpass"
                  onChange={handleChemintriChange}
                  // disabled={isEventsDisabled}
                  checked={chemintri}
                />
                <label htmlFor="CHEMINTRI">
                  PRESENTATION ON (CHEM E PANSOPHY) (9:30AM-12:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PANSOPHY'S CONNUNDRUM"
                  id="techpass"
                  onChange={handleCHEMEChange}
                  // disabled={isEventsDisabled}
                  checked={cheme}
                />
                <label htmlFor="CHEME">
                  PANSOPHY'S CONNUNDRUM(12:00PM-3:00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PITCH FORGE"
                  id="techpass"
                  onChange={handlePitchChange}
                  // disabled={isEventsDisabled}
                  checked={pitch}
                />
                <label htmlFor="PITCH">PITCH FORGE (10:00AM-1:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="RENDER ROYALE"
                  id="techpass"
                  onChange={handleRenderChange}
                  // disabled={isEventsDisabled}
                  checked={render}
                />
                <label htmlFor="RENDER">RENDER ROYALE (9:30AM-12:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="MECHSTIX MARVEL"
                  id="techpass"
                  onChange={handleMechstixChange}
                  // disabled={isEventsDisabled}
                  checked={mechstix}
                />
                <label htmlFor="MECHSTIX">
                  MECHSTIX MARVEL (12:30PM-3:00PM)
                </label>
              </div>
            </div>
            <div className={styles.day2}>
              <h3 style={{ textAlign: "center" }}>Day2</h3>
              {/* <div>
                <input
                  type="checkbox"
                  name="BGMI"
                  id="techpass"
                  onChange={handleBGMIChange}
                  // disabled={isEventsDisabled}
                  checked={BGMI}
                />
                <label htmlFor="BGMI">BGMI (9.00AM-12.30PM)</label>
              </div> */}
              <div>
                <input
                  type="checkbox"
                  name="INNOSOLVE"
                  id="techpass"
                  onChange={handleInnosolveChange}
                  // disabled={isEventsDisabled}
                  checked={innosolve}
                />
                <label htmlFor="INNOSOLVE">INNOSOLVE (9.30AM-12.30PM)</label>
              </div>
              <div>
                <input
                  name="BOND BLEND"
                  type="checkbox"
                  id="techpass"
                  onChange={handleBONDBLENDChange}
                  // disabled={isEventsDisabled}
                  checked={BONDBLEND}
                />
                <label htmlFor="BOND BLEND">BOND BLEND</label>
              </div>
              {/* <div>
                <input
                  type="checkbox"
                  name="BASICS ON CFT WORKSHOP"
                  id="techpass"
                  onChange={handleBasicsOnCFTWorkshopChange}
                  // disabled={isEventsDisabled}
                  checked={basicsOnCFTWorkshop}
                />
                <label htmlFor="BASICS ON CFT WORKSHOP">
                  BASICS ON CFT WORKSHOP (1.00PM-2.30PM)
                </label>
              </div> */}
              <div>
                <input
                  type="checkbox"
                  name="PIXEL PALETTE"
                  id="techpass"
                  onChange={handleUiUxChange}
                  // disabled={isEventsDisabled}
                  checked={uiUx}
                />
                <label htmlFor="PIXEL PALETTE">
                  PIXEL PALETTE (10.00AM-1.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="RELAY RUSH"
                  id="techpass"
                  onChange={handleRelayRushChange}
                  // disabled={isEventsDisabled}
                  checked={relayRush}
                />
                <label htmlFor="RELAY RUSH">RELAY RUSH (10.00AM-1.00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PROJECT FORGE"
                  id="techpass"
                  onChange={handleProjectForgeChange}
                  // disabled={isEventsDisabled}
                  checked={projectForge}
                />
                <label htmlFor="PROJECT FORGE">
                  PROJECT FORGE (1.00PM-3.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="THE TWISTED HEIST"
                  id="techpass"
                  onChange={handleTheMistedHeistChange}
                  // disabled={isEventsDisabled}
                  checked={theMistedHeist}
                />
                <label htmlFor="THE TWISTED HEIST">
                  THE TWISTED HEIST (10.00AM-12.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ESCAPE ROOMS"
                  id="techpass"
                  onChange={handleEscapeRoomsChange}
                  // disabled={isEventsDisabled}
                  checked={escapeRooms}
                />
                <label htmlFor="ESCAPE ROOMS">
                  ESCAPE ROOMS (9.30AM-12.30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PAPYRUS BLITZ"
                  id="techpass"
                  onChange={handlePaperPresentationCivilChange}
                  // disabled={isEventsDisabled}
                  checked={paperPresentationCivil}
                />
                <label htmlFor="PAPYRUS BLITZ">
                  PAPYRUS BLITZ (9.30AM-12.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PAPER PRISM"
                  id="techpass"
                  onChange={handlePaperPresentationECEChange}
                  // disabled={isEventsDisabled}
                  checked={paperPresentationECE}
                />
                <label htmlFor="PAPER PRISM">
                  PAPER PRISM (10.00AM-2.00PM)
                </label>
              </div>
              {/* <div>
                <input
                  type="checkbox"
                  name="EMBEDDED SYSTEM WORKSHOP"
                  id="techpass"
                  onChange={handleEmbeddedSystemWorkshopChange}
                  // disabled={isEventsDisabled}
                  checked={embeddedSystemWorkshop}
                />
                <label htmlFor="EMBEDDED SYSTEM WORKSHOP">
                  EMBEDDED SYSTEM WORKSHOP (9.30AM-2.00PM)
                </label>
              </div> */}
              <div>
                <input
                  type="checkbox"
                  name="VISUAL PAPYRUS"
                  id="techpass"
                  onChange={handleVisualPapyrusChange}
                  // disabled={isEventsDisabled}
                  checked={visualPapyrus}
                />
                <label htmlFor="VISUAL PAPYRUS">
                  VISUAL PAPYRUS (9.30AM-2.30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="JOKER CODER"
                  id="techpass"
                  onChange={handleJokerCoderChange}
                  // disabled={isEventsDisabled}
                  checked={jokerCoder}
                />
                <label htmlFor="JOKER CODER">JOKER CODER (9.30AM-2.30PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PITSTOP"
                  id="techpass"
                  onChange={handlePitstopChange}
                  // disabled={isEventsDisabled}
                  checked={pitstop}
                />
                <label htmlFor="PITSTOP">PITSTOP (10.00AM-12.00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="INNOVISION EXPO"
                  id="techpass"
                  onChange={handleInnovisionExpoChange}
                  // disabled={isEventsDisabled}
                  checked={innovisionExpo}
                />
                <label htmlFor="INNOVISION EXPO">
                  INNOVISION EXPO (10.00AM-1.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="THINK TANK"
                  id="techpass"
                  onChange={handleThinkTankChange}
                  // disabled={isEventsDisabled}
                  checked={thinkTank}
                />
                <label htmlFor="THINK TANK">THINK TANK (10.00AM-1.00PM)</label>
              </div>
            </div>
          </div>

          <input type="submit" style={{ textAlign: "center" }} />
        </form>
      </div>
    </>
  );
};

export default EventForm;
