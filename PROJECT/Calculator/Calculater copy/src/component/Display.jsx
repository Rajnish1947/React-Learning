
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return <input className={styles.display} type="text" value={displayValue} readOnly placeholder="0"/>;
};

export default Display;