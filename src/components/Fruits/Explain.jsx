import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Heading } from "../GlobalStyleComponents";

const Explain = ({ name, fruit }) => {
  const history = useHistory();
  const inputEl = useRef("");
  const [isEnough, setIsEnough] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = () => {
    setIsEnough(inputEl.current.value.length > 5);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    done ? history.push("/sort-list") : setDone(true);
    inputEl.current.value = "";
  };

  return (
    <>
      <Heading>
        {done
          ? `Great ${name}! Please explain why do you like ${fruit} in one sentence.`
          : `Please join your first name and ${fruit}`}
      </Heading>
      <form onSubmit={handleSubmit}>
        <div className="input-group input-group-lg mb-3 w-50 me-auto ms-auto">
          <input
            type="text"
            className="form-control"
            placeholder={done ? "A Simple Sentence" : "Your Answer"}
            ref={inputEl}
            onChange={handleChange}
          />
          <input className="btn btn-outline-success" type="submit" disabled={!isEnough} />
        </div>
      </form>
    </>
  );
};

export default Explain;
