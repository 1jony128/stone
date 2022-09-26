import React from "react";
import {FC,useState} from "react"
import classes from "./Counter.module.scss"


interface CounterProps {
    
}
 
const Counter: FC<CounterProps> = () => {

    const [count, setCount] = useState(0)

    return ( 
    <div className={classes.buld}>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div> 
    );
}
 
export default Counter;