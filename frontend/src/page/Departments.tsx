import styles from "../styles/page/departments.module.css";
import Header from "../components/Header";
import DepartmentItem from "../components/DepartmentItem";
import departmentsData from "../data/departmentsData";

const DepartmentsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.event} id="departments">
        <h1 className={styles.heading}>Events</h1>
        <div className={styles.departmentGrid}>
          {departmentsData.map((ele) => (
            <DepartmentItem
              image={ele.img}
              name={ele.name}
              key={ele.id}
              id={ele.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DepartmentsPage;
