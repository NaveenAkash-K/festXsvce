import Header from "../components/Header";
import styles from "../styles/page/auth.module.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isEmail, isPassword } from "../utils/validators";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const token: string | null = localStorage.getItem("token");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (token) {
      axios
        .get(process.env.REACT_APP_API_BASE_URL + "/auth/checkAuth", {
          headers: { Authorization: token },
        })
        .then(() => {
          return navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  const loginHandle = () => {
    if (!isEmail(email)) {
      return toast("Invalid Email");
    }
    if (!isPassword(password)) {
      return toast(
        "Password must be atleast greater than 5 characters"
      );
    }

    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/auth/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        navigate("/");
      })
      .catch((error) => {
        toast(error.response.data.error);
      });
  };

  return (
    <>
      <Header />
      <div className={styles.auth}>
        <div className={styles.authContainer}>
          <h1>Login</h1>
          <p>Email</p>
          <input
            type="text"
            className={styles.input}
            onChange={(email) => {
              setEmail(email.target.value);
            }}
          />
          <p>Password</p>
          <input
            type="text"
            className={styles.input}
            onChange={(password) => {
              setPassword(password.target.value);
            }}
          />
          <p onClick={() => {}} style={{ cursor: "pointer" }}>
            Forget Password?
          </p>
          <button className={styles.submitButton} onClick={loginHandle}>
            Login
          </button>
          <hr color="#635047" />
          <Link to="/signup">
            <button className={styles.redirectButton}>New user? Signin</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
