import { useRef, useState } from "react";

const Input = ({ content, count }) => {
  const [input, setInput] = useState(content);
  const inputEl = useRef("");

  const handleChange = () => {
    setInput(inputEl.current.value);
  };

  return (
    <div className="input-group input-group-lg w-50 me-auto ms-auto py-3">
      <span className="input-group-text">{`#${count + 1}`}</span>
      <input type="text" className="form-control" value={input} ref={inputEl} onChange={handleChange} />
    </div>
  );
};

export default Input;
