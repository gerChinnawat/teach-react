import { useEffect, useState } from "react";
import Header from "../components/Header";

const UseEffectScreen = () => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [twoCount, setTwoCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    console.log("useEffect screen render");

    const addOneTimer = () => {
        setTimeout(() => {
                setTimer((preValue) => preValue + 1);
        }, 1000)
    };

    useEffect(() => {
        console.log("useEffect render");
        setTimeout(() => {
            setIsLoading(false);
            addOneTimer()
        }, 1000);
    }, [])

    useEffect(() => {
        setTwoCount(() => count * 2);
    }, [count])

    const onCountHandle = () => {
        setCount(preValue => preValue + 1);
    };

    return (
        <>
            <Header title="useEffect" />
            {isLoading
                ? <h1>Loading ...</h1>
                : <>
                    <h3>Timer: {timer}</h3>
                    <h3>Count: {count}</h3>
                    <button onClick={onCountHandle}>Count +1</button>
                    <h3>TwoCount: {twoCount}</h3>
                </>}
        </>
    );
};

export default UseEffectScreen;