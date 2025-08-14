import { useState } from "react";
import Header from "../components/Header";

const UseStateScreen = () => {
    const [result, setResult] = useState(0);
    console.log("Result render");

    const addOneResult = () => {
        setResult(preValue => preValue + 1);
    };

    const minusOneResult = () => {
        setResult(preValue => preValue - 1);
    };

    const multipyResultWithTwo = () => {
        setResult(preValue => preValue * 2);
    };

    const dividedResultByTwo = () => {
        setResult(preValue => preValue / 2);
    };

    return (<>
        <Header title="useState"/>
        <button onClick={addOneResult}>+1</button>
        <button onClick={minusOneResult}>-1</button>
        <button onClick={multipyResultWithTwo}>x2</button>
        <button onClick={dividedResultByTwo}>/2</button>
        <p>Result: {result}</p>
    </>);
}

export default UseStateScreen;
