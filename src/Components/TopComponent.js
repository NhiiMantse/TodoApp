import { useState } from "react";

function TopBar({oldata, updateTodo }) {
    const [task, setTask] = useState("")
    const [time, setTime] = useState("")

    function updateInputs(e) {
        if (e.target.type === "text") {
            setTask(e.target.value);
        } else {
            setTime(e.target.value);
        }
    }
    
    function handleSubmit() {
        if (task && time) {
            updateTodo([...oldata, {task: task, time: time, completed: false}])
        }
    }
    return (
        <div className="first">
            <input type="text" value={task} onChange={(e) => updateInputs(e)} />
            <input type="time" value={time} onChange={(e) => updateInputs(e)} />
            <button onClick={handleSubmit}>+</button>
        </div>
    )

}

export default TopBar;