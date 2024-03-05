import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SvceEmailForm from "./SvceEmailForm";
import OtherEmailForm from "./OtherEmailForm";
import styles from "../styles/page/getpass.module.css";

const GetPass: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    collegeMail: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const renderForm = () => {
    if (formData.collegeMail.endsWith("svce.ac.in")) {
      return <SvceEmailForm formData={formData} />;
    } else {
      return <OtherEmailForm formData={formData} />;
    }
  };

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          <h1>Get Passes</h1>
        </div>
      </div>
      <div className={styles.formSection}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              ID Number:
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              College mail-id:
              <input
                type="text"
                name="collegeMail"
                value={formData.collegeMail}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        {renderForm()}
      </div>
      <Footer />
    </>
  );
};

export default GetPass;
