import Header from "../components/Header";
import styles from "../styles/page/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import {
  isEmail,
  isPassword,
  isUsername,
  isPhoneNumber,
} from "../utils/validators";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(process.env.REACT_APP_API_BASE_URL + "/auth/checkAuth", {
          headers: { Authorization: token },
        })
        .then(() => {
          return navigate("/");
        })
        .catch((error) => {});
    }
  }, []);

  const handleSignup = async () => {
    if (!isUsername(username)) {
      if (username.length > 2) {
        return toast("Username should not contain space");
      }
      return toast("Username should contain grater than 3 characters");
    }
    if (!isEmail(email)) {
      return toast("Invalid Email");
    }
    if (!isPhoneNumber(phoneNo)) {
      return toast("Phone number must contain only 10 digit");
    }
    if (!isPassword(password)) {
      return toast("Password must be atleast greater than 5 characters");
    }
    if (password !== confirmPassword) {
      return toast("Passwords don't match");
    }

    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/auth/signup", {
        email: email,
        username: username,
        phoneNo: phoneNo,
        password: password,
        confirmPassword: confirmPassword,
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
          <h1>Signup</h1>
          <p>Username</p>
          <input
            type="text"
            className={styles.input}
            onChange={(username) => {
              setUsername(username.target.value);
            }}
          />
          <p>Email</p>
          <input
            type="email"
            className={styles.input}
            onChange={(email) => {
              setEmail(email.target.value);
            }}
          />
          <p>Phone Number</p>
          <input
            type="text"
            className={styles.input}
            onChange={(phoneNo) => {
              setPhoneNo(phoneNo.target.value);
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
          <p>Confirm Password</p>
          <input
            type="text"
            className={styles.input}
            onChange={(confirmPassword) => {
              setConfirmPassword(confirmPassword.target.value);
            }}
          />
          <br />
          <button className={styles.submitButton} onClick={handleSignup}>Signup</button>
          <hr color="#635047" />
          <Link to="/login">
            <button className={styles.redirectButton}>
              Already a user? Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
