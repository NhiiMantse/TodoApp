function BottonComponent({ data }) {
    return (
        <div className="second">
            {
                data.map(item => {
                    return <div className="todo-item"> 
                        <input type= "checkbox" name="" id=""/>
                        <p>{item.task}</p>
                        <p>{item.time}</p>
                        <span>del</span>


                    </div>
                })
            }
        </div>
    )
}
export default BottonComponent