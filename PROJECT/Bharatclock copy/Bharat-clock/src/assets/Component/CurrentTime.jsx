import { useEffect, useState } from "react";

let CurrentTime=()=>{
  const [time,settime] =useState(new Date());
    useEffect(()=>{
        const intervalid=setInterval(()=>{
            settime(new Date())
        },1000);
        return ()=>{
            //ye method use hota jo defined hai already
            clearInterval(intervalid);
            
        }
    },[]);
    // ye advace use effect ka use hai 
    return <p class="lead">
        This is the current time:  {time.toLocaleDateString()} -{" "}{time.toLocaleTimeString()}

    </p>
}
export default CurrentTime;