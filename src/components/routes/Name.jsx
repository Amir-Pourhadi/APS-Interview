import greetingTime from "greeting-time";
import { useRef } from "react";
import { BsPersonFill } from "react-icons/bs";
import { useHistory } from "react-router";
import { titleCase } from "title-case";
import { AngleRight, Heading, Main, Text } from "../GlobalStyleComponents";

const Name = ({ updateUser, user: { name } }) => {
  const inputEl = useRef(name);
  const history = useHistory();

  const handleInputChange = () => {
    const name = titleCase(inputEl.current.value.trim());
    updateUser({ name });
  };

  return (
    <Main className="text-center">
      <Heading>
        {greetingTime(new Date())},
        <span> {name ? `${name}!` : "Please enter your name below:"}</span>
      </Heading>
      <form>
        <div className="input-group input-group-lg flex-nowrap w-25 mx-auto my-5">
          <span className="input-group-text">
            <BsPersonFill fontSize="27" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name Here"
            ref={inputEl}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!name}
          onClick={() => history.push("/fruits")}>
          <Text>Continue</Text>
          <AngleRight />
        </button>
      </form>
    </Main>
  );
};

export default Name;
