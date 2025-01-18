import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonsContainer";
import { useState } from "react";
function App() {
const [calVal, setCalVal] = useState("");
  const onButtonClick=(buttonText)=>{
  if (buttonText==="C"){
    setCalVal("");
  }else if(buttonText==="="){
    const result=eval(calVal);
    setCalVal(result);
  }else{
    const newDispayValue=calVal+buttonText;
    setCalVal(newDispayValue);
  }
};
  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer
          onButtonClick={onButtonClick}
        ></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
