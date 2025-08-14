import { useEffect, useState } from "react";
import Header from "../components/Header";

const UseEffectScreen = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimer((preValue) => preValue + 1);
        }, 1000);
    })

    return (
        <>
            <Header title="useEffect" />
            <h3>Timer: {timer}</h3>
        </>
    );
};

export default UseEffectScreen;