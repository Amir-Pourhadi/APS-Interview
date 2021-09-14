import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { AngleRight, Heading, Main, Text } from "../GlobalStyleComponents";
import Input from "./Input";

const Animals = ({ user: { name, animals }, updateUser }) => {
  const inputEl = useRef("");
  const [valid, setValid] = useState(true);
  const [done, setDone] = useState(false);
  const history = useHistory();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const inputValue = inputEl.current.value;
    const commas = (inputValue.match(/,/g) || []).length;
    if (!inputValue || commas !== 3) {
      setValid(false);
      return;
    }

    const animals = inputValue.split(",").map((animal) => animal.trim());
    updateUser({ animals });
  };

  return (
    <Main className="text-center">
      {animals.length ? (
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
      ) : (
        <div>
          <Heading>
            <span>Well Done {name}!</span> <br /> Please Enter name of 4 animals separated by comma
          </Heading>
          <form onSubmit={handleUpdateUser}>
            <div className="input-group input-group-lg mb-3 w-50 me-auto ms-auto">
              <input type="text" className="form-control" placeholder="Name of 3 Animals" ref={inputEl} />
              <input className="btn btn-outline-success" type="submit" />
            </div>
            {!valid && (
              <div className="text-danger fs-4">Animals should be only 3 and separated by comma ( , )</div>
            )}
          </form>
        </div>
      )}
    </Main>
  );
};

export default Animals;
