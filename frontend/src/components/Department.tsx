import styles from "../styles/department.module.css";
import arrow from "../assets/arrow.png";
const Department: React.FC<{
  image: string;
  name: string;
}> = (props) => {
  return (
    <div
      className={styles.department}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.nameDiv}>
        <p>{props.name}</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Department;
