import { useEffect, useState } from "react";

export default function Home() {
    //init state current time
    const [currentTime, setCurrentTime]=useState(new Date().toLocaleTimeString());
    const timerChange=()=>{
        setCurrentTime(new Date().toLocaleTimeString())
    };

    useEffect(() => {
        console.log("Effect invoke!!!!");
        setInterval(timerChange,1000);
    },[]);

    return (
        <>
            <div className="textInfo">
                <h2>Welcam home</h2>
            </div>
            <div>
                {/* <h3>{new Date().toLocaleTimeString()}</h3> */}
                <h3>{currentTime}</h3>
            </div>
        </>
    );
}