import Header from "../components/Header";
import styles from "../styles/page/auth.module.css";

const Signup = () => {
  return (
    <>
      <Header />
      <div className={styles.auth}>
        <div className={styles.authContainer}>
          <h1>Signup</h1>
          <p>Username</p>
          <input type="text" className={styles.input} />
          <p>Phone Number</p>
          <input type="text" className={styles.input} prefix="+91" />
          <p>Email</p>
          <input type="email" className={styles.input} />
          <p>Password</p>
          <input type="text" className={styles.input} />
          <br />
          <button className={styles.submitButton}>Signup</button>
          <hr color="#635047" />
          <button className={styles.redirectButton}>
            Already a user? Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
