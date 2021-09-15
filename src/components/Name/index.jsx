import { useRef } from "react";
import { BsPersonFill } from "react-icons/bs";
import { useHistory } from "react-router";
import { AngleRight, Text } from "../GlobalStyleComponents";
import { Heading, Main } from "./view";

const Name = ({ updateUser, user: { name } }) => {
  const inputEl = useRef(name);
  const history = useHistory();

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
        <span className="input-group-text">
          <BsPersonFill fontSize="27" />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Your Name Here"
          ref={inputEl}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <button className="btn btn-primary" disabled={!name} onClick={() => history.push("/fruits")}>
        <Text>Continue</Text>
        <AngleRight />
      </button>
    </Main>
  );
};

export default Name;
