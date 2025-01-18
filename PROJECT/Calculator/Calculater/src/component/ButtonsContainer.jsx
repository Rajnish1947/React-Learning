import styles from "./ButtonContrainer.module.css";
function ButtonContainer() {
  const buttonNames=['c','1','2','+','3','4','-','5','6','*','7','8','/','9','0']
  return (
    <div className={styles["button-container"]}>
      {buttonNames.map((buttonNames)=>( <button className={styles.button}>{buttonNames}</button>))}

      
    </div>
  );

};

export default ButtonContainer;
