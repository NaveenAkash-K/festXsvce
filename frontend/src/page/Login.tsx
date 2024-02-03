import Header from "../components/Header";
import styles from "../styles/page/auth.module.css";

const Login = () => {
  return (
    <>
      <Header />
      <div className={styles.auth}>
        <div className={styles.authContainer}>
          <h1>Login</h1>
          <p>Email</p>
          <input type="text" className={styles.input} />
          <p>Password</p>
          <input type="text" className={styles.input} />
          <p onClick={() => {}} style={{ cursor: "pointer" }}>
            Forget Password?
          </p>
          <button className={styles.submitButton}>Login</button>
          <hr color="#635047" />
          <button className={styles.redirectButton}>New user? Signin</button>
        </div>
      </div>
    </>
  );
};

export default Login;
