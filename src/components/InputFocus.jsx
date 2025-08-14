import { useRef } from "react";

const InputFocus = () => {
    const inputElement = useRef();

    const onFocusHandle = () => {
        inputElement.current.focus();
    };

    return (<>
        <input type="text" ref={inputElement}/>
        <button onClick={onFocusHandle}>Focus</button>
    </>);
};

export default InputFocus;