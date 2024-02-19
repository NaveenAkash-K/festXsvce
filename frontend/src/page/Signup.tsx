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
import Footer from "../components/Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [regNo, setRegNo] = useState<string>("");
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
      return toast("Username must be atleast 3 characters");
    }
    if (!isEmail(email)) {
      return toast("Invalid Email");
    }
    if (!isPhoneNumber(phoneNo)) {
      return toast("Phone number must contain only 10 digit");
    }
    if (college.trim().length === 0) {
      return toast("Please enter your college name");
    }
    if (regNo.trim().length === 0) {
      return toast("Please enter your registration number");
    }
    if (department.trim().length === 0) {
      return toast("Please enter your department");
    }
    if (!isPassword(password)) {
      return toast("Password must be atleast 6 characters");
    }
    if (password !== confirmPassword) {
      return toast("Passwords don't match");
    }

    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/auth/signup", {
        email,
        username,
        phoneNo,
        college,
        regNo,
        department,
        password,
        confirmPassword,
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
          <div className={styles.inputSection}>
            <section>
              <p className={styles.label}>Username</p>
              <input
                type="text"
                className={styles.input}
                onChange={(username) => {
                  setUsername(username.target.value);
                }}
              />
              <p className={styles.label}>Email</p>
              <input
                type="email"
                className={styles.input}
                onChange={(email) => {
                  setEmail(email.target.value);
                }}
              />
              <p className={styles.label}>Phone Number</p>
              <input
                type="text"
                className={styles.input}
                onChange={(phoneNo) => {
                  setPhoneNo(phoneNo.target.value);
                }}
              />
              <p className={styles.label}>College Name</p>
              <input
                type="text"
                className={styles.input}
                onChange={(college) => {
                  setCollege(college.target.value);
                }}
              />
            </section>
            <section>
              <p className={styles.label}>Registration Number</p>
              <input
                type="text"
                className={styles.input}
                onChange={(regNo) => {
                  setRegNo(regNo.target.value);
                }}
              />
              <p className={styles.label}>Department</p>
              <input
                type="text"
                className={styles.input}
                onChange={(dept) => {
                  setDepartment(dept.target.value);
                }}
              />
              <p className={styles.label}>Password</p>
              <input
                type="password"
                className={styles.input}
                onChange={(password) => {
                  setPassword(password.target.value);
                }}
              />
              <p className={styles.label}>Confirm Password</p>
              <input
                type="password"
                className={styles.input}
                onChange={(confirmPassword) => {
                  setConfirmPassword(confirmPassword.target.value);
                }}
              />
            </section>
          </div>
          <br />
          <button className={styles.submitButton} onClick={handleSignup}>
            Signup
          </button>
          <hr color="#635047" />
          <Link to="/login">
            <button className={styles.redirectButton}>
              Already a user? Login
            </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Signup;
