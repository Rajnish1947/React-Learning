import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonsContainer";

function App() {
  return <center>
    <div className={styles.calculator}>
   <Display></Display>
      <ButtonContainer />
    </div>
 
  </center>
}

export default App;
