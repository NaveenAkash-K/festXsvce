import styles from "../styles/event.module.css";
import Header from "../components/Header";
import DepartmentItem from "../components/DepartmentItem";
import departments from "../data/departments";

const DepartmentsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.event}>
        <h1 className={styles.heading}>Departments</h1>
        <div className={styles.departmentGrid}>
          {departments.map((ele) => (
            <DepartmentItem
              image={ele.img}
              name={ele.name}
              key={ele.id}
              id={ele.id}
            />
          ))}
        </div>

        {/* < className={styles.contactContainer}>
          <div className={styles.wrapper}>
            <div className={styles.media}>
              <p>A national level Technical Fest</p>
            </div>
            <div className={styles.menuContainer}>
              <h2 className={styles.header}>Menu</h2>
              {menu.map((data, index) => (
                <div className={styles.menu} key={index}>
                  <a
                    href={data.link}
                    style={{ margin: "3% 0", textAlign: "left" }}
                  >
                    {data.name}
                  </a>
                </div>
              ))}
            </div>
            <div className={styles.contact}>
              <h2 className={styles.header}>Contact Us</h2>
              <div className={styles.address}>
                <p>Mail: xyz@svce.ac.in</p>
                <p>Number: 9999999999</p>
                <p>
                  Address: Sri Venkateswara College Of Engineering,Post Bag
                  No.1,Pennalur Village Chennai - Bengaluru High Road
                  Sriperumbudur Tk,Tamil Nadu 602117
                </p>
              </div>
            </div>
          </div>
          {/* <p>Copyright &copy; 2024 All Rights Reserved</p> */}
      </div>
    </>
  );
};

export default DepartmentsPage;
