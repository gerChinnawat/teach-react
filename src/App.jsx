import { useState, useEffect } from "react"
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect render")
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    setList(preValue => [...preValue, {
      id: list.length + 1,
      title: inputValue,
    }]);
    setInputValue("");
  }

  return (
    <>
    {isLoading
      ? <h1>Loading ...</h1>
      : <div>
          <h1>React Hooks!</h1>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={onSubmit}>Add List</button>
          <ToDoList list={list} />
          <hr/>
          <Counter />
      </div>
    }
    </>
  )
}

export default App
