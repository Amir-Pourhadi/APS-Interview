import { useRef, useState } from "react";

const Input = ({ content, count }) => {
  const [input, setInput] = useState(content);
  const inputEl = useRef("");

  const handleChange = () => {
    setInput(inputEl.current.value);
  };

  return (
    <div class="input-group input-group-lg w-50 me-auto ms-auto py-3">
      <span class="input-group-text">{`Animal #${count + 1}`}</span>
      <input type="text" class="form-control" value={input} ref={inputEl} onChange={handleChange} />
    </div>
  );
};

export default Input;
