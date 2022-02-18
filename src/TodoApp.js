import './TodoApp.css';
import TopBar from './Components/TopComponent'
import BottonComponent from './Components/BottonComponent';
import { useState } from 'react';
function TodoApp() {
    const [todoState, setTodoState] = useState([])
    return (

        <div className="container">
            <div className="row">

                <TopBar oldata={todoState} updateTodo = {setTodoState} />
                {/* <BottonComponent /> */}
                <BottonComponent data={todoState} />
            </div>
        </div>
    )
}

export default TodoApp