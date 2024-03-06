import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/page/eventForm.module.css";
import IIM from "../assets/images/2IIM.png";
const Sponsers: React.FC = () => {
  
  const [isTechPass, setIsTechPass] = useState<boolean>(false);
  const [isProShows, setIsProShows] = useState<boolean>(false);
  const [isElite, setIsElite] = useState<boolean>(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Form | Technoways";
    if(!isTechPass || !isProShows){
      setIsElite(false);
    }
    if(isElite){
      setIsProShows(true);
      setIsTechPass(true);
    }
    if(isTechPass&&isProShows){
      setIsElite(true);
    }
  }, [isTechPass, isProShows, isElite]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Register</h1>
        <br />
        <form
          method="POST"
          name="customerData"
          // action="https://technoways-svce-backend.vercel.app/ccavRequestHandler"
          action="http://localhost:3001/ccavRequestHandler"
          className={styles.eventFormContainer}
        >
          <input type="text" name="billing_name" placeholder="Name" required />
          <input type="text" name="billing_address" placeholder="Address" required />
          <input type="text" name="billing_city" placeholder="City" required />
          <input type="text" name="billing_state" placeholder="State" required />
          <input type="text" name="billing_zip" placeholder="zip" required />
          <input type="text" name="billing_tel" placeholder="Phone No" required />
          <input type="email" name="billing_email" placeholder="Email" required />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            required
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            required
          />
          <input
            type="text"
            name="regNo"
            placeholder="College Register No"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            required
          />
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
          Tech Pass 199 299
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
          Pro Shows 250 
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
          Elite 399 499
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Sponsers;
