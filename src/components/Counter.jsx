import { useState, memo } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log("Counter render");

    const countClick = () => {
    setCount(count + 1)
    };

    return (<>
        <button onClick={countClick}>Click Count</button>
        <p>Count: {count}</p>
    </>);
};

export default memo(Counter);