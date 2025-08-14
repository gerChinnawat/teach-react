import { useRef, useState, useEffect } from "react";

const CountRanderInput = () => {
    const [inputValue, setInputValue] = useState("");
        const count = useRef(1);
    
    useEffect(() => {
        count.current += 1;
    }, [inputValue])

    return (
        <>
            <input
                name="firstname"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h3>Count Render: {count.current}</h3>
        </>
    );
};

export default CountRanderInput;