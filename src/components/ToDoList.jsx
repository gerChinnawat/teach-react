import { memo } from "react";

const ToDoList = ({list = []}) => {
    console.log("To do list render")
    return (<>
        {list.map(list => {
            return <h3 key={list.id}>{list.title}</h3>
        })}
    </>);
};

export default memo(ToDoList);