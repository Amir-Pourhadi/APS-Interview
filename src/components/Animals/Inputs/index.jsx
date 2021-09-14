import { useState } from "react";
import { useHistory } from "react-router";
import Input from "../Input";
import { AngleRight, Heading, Text } from "./view";

const Inputs = ({ name, animals }) => {
  const [done, setDone] = useState(false);
  const history = useHistory();

  return (
    <>
      {done ? (
        <>
          <Heading>
            Great {name}! <br /> Please explain what do you know about one of the animals in one sentence.
          </Heading>
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
          <Heading>Nice Job {name}! Please swap first and last letter of each animal.</Heading>
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
