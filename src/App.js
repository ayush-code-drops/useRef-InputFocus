import { useRef } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef("");
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div className="App">
      <h1>Input Focus</h1>
      <input ref={ref} type="text" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
