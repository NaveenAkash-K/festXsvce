import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/page/eventForm.module.css";
import IIM from "../assets/images/2IIM.png";
const Sponsers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sponsors | Technoways";
  }, []);

  const [isTechPass, setIsTechPass] = useState<boolean>(false);
  const [isProShows, setIsProShows] = useState<boolean>(false);

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
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="phNo" placeholder="Phone No" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="text"
            name="college"
            placeholder="College Name"
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
            value={"Tech Pass"}
            checked={isTechPass}
            onChange={(value) => {
              setIsTechPass(value.target.checked);
            }}
          />
          Tech Pass
          <input
            type="checkbox"
            name="proshows"
            id="proshows"
            value={"Pro Shows"}
            checked={isProShows}
            onChange={(value) => {
              setIsProShows(value.target.checked);
            }}
          />
          Pro Shows
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Sponsers;
