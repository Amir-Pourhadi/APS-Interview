import { useRef } from "react";
import PrimaryBtn from "../assets/PrimaryBtn";

const Name = ({ updateUser, userName }) => {
  const inputEl = useRef(userName);

  const handleNameChange = (e) => {
    e.preventDefault();
    updateUser({ name: inputEl.current.value });
  };

  return (
    <div>
      <h1>
        Hello, <span>{userName ? userName : "Enter your name below:"}</span>
      </h1>
      <label htmlFor="name-input">My name is: </label>
      <input id="name-input" type="text" ref={inputEl} value={userName} onChange={handleNameChange} />
      <PrimaryBtn link="/animals" />
    </div>
  );
};

export default Name;
