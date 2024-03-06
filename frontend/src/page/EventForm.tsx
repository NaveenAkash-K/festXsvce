import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/page/eventForm.module.css";
import IIM from "../assets/images/2IIM.png";
const Sponsers: React.FC = () => {
  const [isTechPass, setIsTechPass] = useState<boolean>(false);
  const [isProShows, setIsProShows] = useState<boolean>(false);
  const [isElite, setIsElite] = useState<boolean>(false);
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
  const [jokerCoder, setJokerCoder] = useState(false);
  const [pitstop, setPitstop] = useState(false);
  const [innovisionExpo, setInnovisionExpo] = useState(false);
  const [thinkTank, setThinkTank] = useState(false);

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
            value={billingName}
            onChange={(e) => setBillingName(e.target.value)}
          />
          <input
            type="text"
            name="billing_address"
            placeholder="Address"
            required
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
          <input
            type="text"
            name="billing_city"
            placeholder="City"
            required
            value={billingCity}
            onChange={(e) => setBillingCity(e.target.value)}
          />
          <input
            type="text"
            name="billing_state"
            placeholder="State"
            required
            value={billingState}
            onChange={(e) => setBillingState(e.target.value)}
          />
          <input
            type="text"
            name="billing_zip"
            placeholder="zip"
            required
            value={billingZip}
            onChange={(e) => setBillingZip(e.target.value)}
          />
          <input
            type="text"
            name="billing_tel"
            placeholder="Phone No"
            required
            value={billingTel}
            onChange={(e) => setBillingTel(e.target.value)}
          />
          <input
            type="email"
            name="billing_email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            required
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            type="text"
            name="regNo"
            placeholder="College Register No"
            required
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            required
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              setPage(true);
            }}
          >
            Next
          </button> */}

          <div className={styles.nextPageContainer}>
            <div className={styles.day1}>
              <h3 style={{ textAlign: "center" }}>Day1</h3>
              <div>
                <input
                  name="basicsAutomotive"
                  type="checkbox"
                  id="techpass"
                  onChange={handleBasicsAutomotiveChange}
                  checked={basicsAutomotive}
                />
                <label htmlFor="basicsAutomotive">
                  Basics Of Automotive Tuning (9:30AM-12:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="revit"
                  id="techpass"
                  onChange={handleRevitChange}
                  checked={revit}
                />
                <label htmlFor="revit">Rev It Up (1:00PM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="biomonopoly"
                  id="techpass"
                  onChange={handleBiomonopolyChange}
                  checked={biomonopoly}
                />
                <label htmlFor="biomonopoly">
                  Bio Monopoly(10:00AM-1:00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ctrlalt"
                  id="techpass"
                  onChange={handleCtrlAltChange}
                  checked={ctrlalt}
                />
                <label htmlFor="ctrlalt">
                  CTRL+ALT+DELETE (10:00AM-1:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="haijo"
                  id="techpass"
                  onChange={handleHaijoChange}
                  checked={haijo}
                />
                <label htmlFor="haijo">HAIJO (12:00AM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="BRIDGE"
                  id="techpass"
                  onChange={handleBridgeChange}
                  checked={bridge}
                />
                <label htmlFor="BRIDGE">
                  BRIDGE EXPERTISE (10:30AM-12:00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="MUDWELL"
                  id="techpass"
                  onChange={handleMudwellChange}
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
                  checked={techPair}
                />
                <label htmlFor="TECHPAIR">TECH PAIR (10:30AM-12:30PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="prompt"
                  id="techpass"
                  onChange={handlePromptChange}
                  checked={prompt}
                />
                <label htmlFor="prompt">PROMPT TACTICS (1:00PM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="SDG"
                  id="techpass"
                  onChange={handleSdgChange}
                  checked={sdg}
                />
                <label htmlFor="SDG">
                  SDG INNOVATION CHALLENGE(10:30AM-11:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="UKNOW"
                  id="techpass"
                  onChange={handleUKnowChange}
                  checked={uKnow}
                />
                <label htmlFor="UKNOW">UKNOWHUT (12:00PM-2:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ELECTRO"
                  id="techpass"
                  onChange={handleElectroChange}
                  checked={electro}
                />
                <label htmlFor="ELECTRO">
                  ELECTRO-CRAFT CHALLENGE (10:30AM-12:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="SPARK"
                  id="techpass"
                  onChange={handleSparkChange}
                  checked={spark}
                />
                <label htmlFor="SPARK">SPARK QUEST (12:30PM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="THRILL"
                  id="techpass"
                  onChange={handleThrillChange}
                  checked={thrill}
                />
                <label htmlFor="THRILL">THRILL QUEST (10:00AM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ARVR"
                  id="techpass"
                  onChange={handleArvrChange}
                  checked={arvr}
                />
                <label htmlFor="ARVR">
                  WORKSHOP ON AR & VR (10:00AM-3:00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="CHEMINTRI"
                  id="techpass"
                  onChange={handleChemintriChange}
                  checked={chemintri}
                />
                <label htmlFor="CHEMINTRI">
                  PRESENTATION ON (CHEM-E-INTRIGUE) (9:30AM-12:30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="CHEME"
                  id="techpass"
                  onChange={handleCHEMEChange}
                  checked={cheme}
                />
                <label htmlFor="CHEME">CHEME CONNUNDRUM(12:00PM-3:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PITCH"
                  id="techpass"
                  onChange={handlePitchChange}
                  checked={pitch}
                />
                <label htmlFor="PITCH">PITCH FORGE (10:00AM-1:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="RENDER"
                  id="techpass"
                  onChange={handleRenderChange}
                  checked={render}
                />
                <label htmlFor="RENDER">RENDER ROYALE (9:30AM-12:00PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="MECHSTIX"
                  id="techpass"
                  onChange={handleMechstixChange}
                  checked={mechstix}
                />
                <label htmlFor="MECHSTIX">
                  MECHSTIX MARVEL (12:30PM-3:00PM)
                </label>
              </div>
            </div>
            <div className={styles.day2}>
              <h3 style={{ textAlign: "center" }}>Day2</h3>
              <div>
                <input
                  type="checkbox"
                  name="INNOSOLVE"
                  id="techpass"
                  onChange={handleInnosolveChange}
                  checked={innosolve}
                />
                <label htmlFor="INNOSOLVE">INNOSOLVE (9.30AM-12.30PM)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="BASICS ON CFT WORKSHOP"
                  id="techpass"
                  onChange={handleBasicsOnCFTWorkshopChange}
                  checked={basicsOnCFTWorkshop}
                />
                <label htmlFor="BASICS ON CFT WORKSHOP">
                  BASICS ON CFT WORKSHOP (1.00PM-2.30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="UI/UX(THE UI-TIMATE SHOWDOWN)"
                  id="techpass"
                  onChange={handleUiUxChange}
                  checked={uiUx}
                />
                <label htmlFor="UI/UX(THE UI-TIMATE SHOWDOWN)">
                  UI/UX(THE UI-TIMATE SHOWDOWN) (10.00AM-1.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="RELAY RUSH"
                  id="techpass"
                  onChange={handleRelayRushChange}
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
                  checked={projectForge}
                />
                <label htmlFor="PROJECT FORGE">
                  PROJECT FORGE (1.00PM-3.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="THE MISTED HEIST"
                  id="techpass"
                  onChange={handleTheMistedHeistChange}
                  checked={theMistedHeist}
                />
                <label htmlFor="THE MISTED HEIST">
                  THE MISTED HEIST (10.00AM-12.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ESCAPE ROOMS"
                  id="techpass"
                  onChange={handleEscapeRoomsChange}
                  checked={escapeRooms}
                />
                <label htmlFor="ESCAPE ROOMS">
                  ESCAPE ROOMS (9.30AM-12.30PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PAPER PRESENTATION(CIVIL)"
                  id="techpass"
                  onChange={handlePaperPresentationCivilChange}
                  checked={paperPresentationCivil}
                />
                <label htmlFor="PAPER PRESENTATION(CIVIL)">
                  PAPER PRESENTATION(CIVIL) (9.30AM-12.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="PAPER PRESENTATION(ECE)"
                  id="techpass"
                  onChange={handlePaperPresentationECEChange}
                  checked={paperPresentationECE}
                />
                <label htmlFor="PAPER PRESENTATION(ECE)">
                  PAPER PRESENTATION(ECE) (10.00AM-2.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="EMBEDDED SYSTEM WORKSHOP"
                  id="techpass"
                  onChange={handleEmbeddedSystemWorkshopChange}
                  checked={embeddedSystemWorkshop}
                />
                <label htmlFor="EMBEDDED SYSTEM WORKSHOP">
                  EMBEDDED SYSTEM WORKSHOP (9.30AM-2.00PM)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="VISUAL PAPYRUS"
                  id="techpass"
                  onChange={handleVisualPapyrusChange}
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
                  checked={thinkTank}
                />
                <label htmlFor="THINK TANK">THINK TANK (10.00AM-1.00PM)</label>
              </div>
            </div>
          </div>
          <div className={styles.passTag}>
            <div>
              <input
                type="checkbox"
                name="techpass"
                id="techpass"
                value={isTechPass.toString()}
                checked={isTechPass}
                onChange={(value) => {
                  setIsTechPass(value.target.checked);
                }}
              />
              Tech Pass {techPrice?.toString()}
            </div>
            <div>
              <input
                type="checkbox"
                name="proshows"
                id="proshows"
                value={isProShows.toString()}
                checked={isProShows}
                onChange={(value) => {
                  setIsProShows(value.target.checked);
                }}
              />
              <label htmlFor="proshows">Pro Shows 250</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="elite"
                id="elite"
                value={isElite.toString()}
                checked={isElite}
                onChange={(value) => {
                  setIsElite(value.target.checked);
                }}
              />
              Elite {elitePrice?.toString()}
            </div>
            <button onClick={() => setPage(false)}>Prev</button>
          </div>
          <input type="submit" style={{ textAlign: "center" }} />
        </form>
      </div>
    </>
  );
};

export default Sponsers;
