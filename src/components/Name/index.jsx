import { useRef } from "react";
import PrimaryBtn from "../assets/PrimaryBtn";
import { Heading, Main } from "./view";

const Name = ({ updateUser, user: { name, animals } }) => {
  const inputEl = useRef(name);

  const handleNameChange = (e) => {
    e.preventDefault();
    updateUser({ name: inputEl.current.value });
  };

  return (
    <Main className="text-center">
      <Heading>
        Hello, <span>{name ? `${name}!` : "Please Enter your name below:"}</span>
      </Heading>
      <div className="input-group input-group-lg flex-nowrap w-25 mx-auto my-5">
        <span className="input-group-text">@</span>
        <input
          type="text"
          className="form-control"
          placeholder="Your Name Here"
          ref={inputEl}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      {name && <PrimaryBtn link="/animals" />}
    </Main>
  );
};

export default Name;
