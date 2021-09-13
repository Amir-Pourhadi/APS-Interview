import { useRef, useState } from "react";

const Input = ({ content, count }) => {
  const [input, setInput] = useState(content);
  const inputEl = useRef("");

  const handleChange = () => {
    setInput(inputEl.current.value);
  };

  return (
    <>
      <label htmlFor={`animal${count}`}>{`animal ${count}`}</label>
      <input id={`animal${count}`} type="text" value={input} ref={inputEl} onChange={handleChange} />
    </>
  );
};

export default Input;
