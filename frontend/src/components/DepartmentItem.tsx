import styles from "../styles/department.module.css";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
const DepartmentItem: React.FC<{
  image: string;
  name: string;
  id: string;
}> = (props) => {
  return (
    <Link to={`/departments/${props.id}`}>
    
    <div
      className={styles.department}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.nameDiv}>
        <p>{props.name}</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
    </Link>
  );
};

export default DepartmentItem;
