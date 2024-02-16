import styles from "../styles/components/departmentItem.module.css";
import arrow from "../assets/images/icons/arrow.png";
import { Link } from "react-router-dom";
const DepartmentItem: React.FC<{
  image: string;
  name: string;
  id: string;
  setBG: (bg: string) => void;
}> = (props) => {
  return (
    <Link to={`/departments/${props.id}`}>
      <div
        className={styles.department}
        onMouseEnter={()=>props.setBG(props.image)}
        onMouseLeave={()=>props.setBG("")}
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
