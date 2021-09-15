import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Heading } from "../GlobalStyleComponents";

const Explain = ({ name }) => {
  const history = useHistory();
  const inputEl = useRef("");
  const [isEnough, setIsEnough] = useState(false);

  const handleChange = () => {
    setIsEnough(inputEl.current.value.length > 5);
  };

  return (
    <>
      <Heading>
        Great {name}! <br /> Please explain what do you know about one of the animals in one sentence.
      </Heading>
      <form
        onSubmit={() => {
          history.push("/sort-list");
        }}>
        <div className="input-group input-group-lg mb-3 w-50 me-auto ms-auto">
          <input
            type="text"
            className="form-control"
            placeholder="A Simple Sentence"
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
