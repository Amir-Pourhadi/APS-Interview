import { useRef, useState } from "react";
import Inputs from "./Inputs";
import { Heading, Main } from "./view";

const Animals = ({ user: { name, animals }, updateUser }) => {
  const inputEl = useRef("");
  const [valid, setValid] = useState(true);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const inputValue = inputEl.current.value;
    const commas = inputValue.match(/,/g).length;
    if (!inputValue || commas !== 2) {
      setValid(false);
      return;
    }

    const animals = inputValue.split(",").map((animal) => animal.trim());
    updateUser({ animals });
  };

  return (
    <Main className="text-center">
      {animals.length ? (
        <Inputs name={name} animals={animals} />
      ) : (
        <div>
          <Heading>
            <span>Well Done {name}!</span> <br /> Please Enter name of 3 animals separated by comma
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
