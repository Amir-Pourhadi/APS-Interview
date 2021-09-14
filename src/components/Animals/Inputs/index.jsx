import { useState } from "react";
import { useHistory } from "react-router";
import Input from "../Input";
import { AngleRight, Text } from "./view";

const Inputs = ({ name, animals }) => {
  const [done, setDone] = useState(false);
  const history = useHistory();

  return (
    <>
      {done ? (
        <>
          <h1 className="py-5">Great {name}! Please Explain about one of animals in one sentence.</h1>
          <form
            onSubmit={() => {
              history.push("/sort-list");
            }}>
            <div className="input-group input-group-lg mb-3 w-50 me-auto ms-auto">
              <input type="text" className="form-control" placeholder="A Simple Sentence" />
              <input className="btn btn-outline-success" type="submit" />
            </div>
          </form>
        </>
      ) : (
        <>
          <h1 className="py-5">Nice Job {name}! Please swap first and last letter of each animal.</h1>
          <div>
            {animals.map((animal, index) => (
              <Input content={animal} count={index} animals={animals} key={index} />
            ))}
            <button className="btn btn-primary" onClick={() => setDone(true)}>
              <Text>Continue</Text>
              <AngleRight />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Inputs;
