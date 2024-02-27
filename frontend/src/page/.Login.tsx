// import Header from "../components/Header";
// import styles from "../styles/page/auth.module.css";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { isEmail, isPassword } from "../utils/validators";
// import axios from "axios";
// import Footer from "../components/Footer";

// const Login = () => {
//   const navigate = useNavigate();


//   const token: string | null = localStorage.getItem("token");

//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [confirmPassword, setConfirmPassword] = useState<string>("");

//   const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
//   const [isOtp, setIsOtp] = useState<boolean>(false);
//   const [otp, setOtp] = useState<string>("");

//   useEffect(() => {
//     if (token) {
//       axios
//         .get(process.env.REACT_APP_API_BASE_URL + "/auth/checkAuth", {
//           headers: { Authorization: token },
//         })
//         .then(() => {
//           return navigate("/");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   });

//   const loginHandle = () => {
//     if (!isEmail(email)) {
//       return toast("Invalid Email");
//     }

//     if (!isPassword(password)) {
//       return toast("Password must be atleast 6 characters");
//     }

//     axios
//       .post(process.env.REACT_APP_API_BASE_URL + "/auth/login", {
//         email: email,
//         password: password,
//       })
//       .then((result) => {
//         localStorage.setItem("token", result.data.token);
//         localStorage.setItem("user", JSON.stringify(result.data.user));
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log(error);
//         toast(error.response.data.message);
//       });
//   };

//   const forgotPasswordHandle = () => {
//     if (!isEmail(email)) {
//       toast("Please provide valid email");
//       return;
//     }
//     setConfirmPassword("");
//     setPassword("");
//     setOtp("");

//     axios
//       .post(process.env.REACT_APP_API_BASE_URL + "/reset/forgotPassword", {
//         email: email,
//       })
//       .then(() => {
//         setIsOtp(true);
//         setIsForgotPassword(false);
//       })
//       .catch((error) => {
//         toast(error.response.data.message);
//       });
//   };

//   const verifyOtp = () => {
//     if (otp.trim().length !== 6) {
//       return toast("OTP must be 6 digits");
//     }

//     axios
//       .post(process.env.REACT_APP_API_BASE_URL + "/reset/verifyOtp", {
//         email: email,
//         otp: otp.trim(),
//       })
//       .then((result) => {
//         toast(result.data.message);
//         setIsOtp(false);
//         setIsForgotPassword(true);
//       })
//       .catch((error) => {
//         toast(error.response.data.message);
//       });
//   };

//   const resetPassword = () => {
//     console.log(password);
//     if (!isPassword(password)) {
//       return toast("Password must be atleast 6 characters");
//     }

//     if (password !== confirmPassword) {
//       return toast("Passwords dont match");
//     }

//     axios
//       .post(process.env.REACT_APP_API_BASE_URL + "/reset/resetPassword", {
//         email: email,
//         otp: otp,
//         password: password,
//       })
//       .then((result) => {
//         toast(result.data.message);
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//         setOtp("");
//         setIsOtp(false);
//         setIsForgotPassword(false);
//         navigate("/login");
//       })
//       .catch((error) => {
//         toast(error.response.data.message);
//       });
//   };

//   return (
//     <>
//       <Header />
//       <div className={styles.auth}>
//         <div className={styles.authContainer}>
//           {isForgotPassword ? (
//             <>
//               <h1>Reset Password</h1>
//               <p>New Password</p>
//               <input
//                 value={password}
//                 type="password"
//                 className={styles.input}
//                 onChange={(password) => {
//                   setPassword(password.target.value);
//                 }}
//               />
//               <p>Confirm Password</p>
//               <input
//                 value={confirmPassword}
//                 type="password"
//                 className={styles.input}
//                 onChange={(confirmPassword) => {
//                   setConfirmPassword(confirmPassword.target.value);
//                 }}
//               />
//               <br />
//               <button className={styles.submitButton} onClick={resetPassword}>
//                 Reset
//               </button>
//             </>
//           ) : isOtp ? (
//             <>
//               <h1>Enter the OTP</h1>
//               <p>OTP is sent to your email address</p>
//               <input
//                 value={otp}
//                 type="text"
//                 className={styles.input}
//                 onChange={(otp) => {
//                   setOtp(otp.target.value);
//                 }}
//               />
//               <br />
//               <button className={styles.submitButton} onClick={verifyOtp}>
//                 Submit
//               </button>
//             </>
//           ) : (
//             <>
//               <h1>Login</h1>
//               <p>Email</p>
//               <input
//                 value={email}
//                 type="text"
//                 className={styles.input}
//                 onChange={(email) => {
//                   setEmail(email.target.value);
//                 }}
//               />
//               <p>Password</p>
//               <input
//                 value={password}
//                 type="password"
//                 className={styles.input}
//                 onChange={(password) => {
//                   setPassword(password.target.value);
//                 }}
//               />
//               <p
//                 onClick={forgotPasswordHandle}
//                 style={{ textDecoration: "underline", cursor:"pointer" }}
//               >
//                 Forgot Password?
//               </p>
//               <button className={styles.submitButton} onClick={loginHandle}>
//                 Login
//               </button>
//               <hr color="#635047" />
//               <Link to="/signup">
//                 <button className={styles.redirectButton}>
//                   New user? Signin
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Login;
