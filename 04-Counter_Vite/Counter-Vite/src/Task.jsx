import { useState } from "react";

function Task() {
    const [val, setVal] = useState(0);

    const addVal = () => {
        if(val >= 20){
            setVal(val);
        } else {
            setVal(val + 1)
        }
    }

    const decVal = () => {
        if(val <= 0){
            setVal(val)
        } else {
            setVal(val - 1)
        }
    }
    return(
        <div style={{border: "2px solid black", margin:"20px", padding: "10px", width: "max-content"}}>
            <h1>Task</h1>

            <p><pre>The task is to not let the value increment after 20 and decrease below 0</pre></p>

            <h3>Counter Value: {val}</h3>
            <button onClick={addVal}>Add Value</button>
            <button onClick={decVal}>Decrease Value</button>
        </div>
    )
}

export default Task;