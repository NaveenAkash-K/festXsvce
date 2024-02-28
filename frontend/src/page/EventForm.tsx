import { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/eventForm.module.css";

const EventForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div></div>
      </div>
    </>
  );
};

export default EventForm;
