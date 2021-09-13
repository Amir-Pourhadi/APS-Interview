import { useRef } from "react";
import PrimaryBtn from "../assets/PrimaryBtn";
import { Main } from "./view";

const Name = ({ updateUser, user: { name, animals } }) => {
  const inputEl = useRef(name);

  const handleNameChange = (e) => {
    e.preventDefault();
    updateUser({ name: inputEl.current.value });
  };

  return (
    <Main className="text-center">
      <h1 className="py-5">
        Hello, <span>{name ? `${name}!` : "Please Enter your name below:"}</span>
      </h1>
      <div class="input-group flex-nowrap w-25">
        <span class="input-group-text">
          @
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Your Name Here"
          ref={inputEl}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <PrimaryBtn link="/animals" />
    </Main>
  );
};

export default Name;
