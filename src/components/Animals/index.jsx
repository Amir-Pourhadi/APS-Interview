import { useRef } from "react";
import Inputs from "./Inputs";
import { Main } from "./view";

const Animals = ({ user: { name, animals }, updateUser }) => {
  const inputEl = useRef("");

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const animals = inputEl.current.value.split(",").map((animal) => animal.trim());
    updateUser({ animals });
  };

  return (
    <Main className="text-center">
      {animals.length ? (
        <Inputs name={name} animals={animals} />
      ) : (
        <div>
          <h1 className="py-5">
            <span>Well Done {name}!</span> Please Enter name of 3 animals separated by comma
          </h1>
          <form onSubmit={handleUpdateUser}>
            <div className="input-group input-group-lg mb-3 w-50 me-auto ms-auto">
              <input className="btn btn-outline-success" type="submit" />
              <input type="text" className="form-control" placeholder="Name of 3 Animals" ref={inputEl} />
            </div>
          </form>
        </div>
      )}
    </Main>
  );
};

export default Animals;
