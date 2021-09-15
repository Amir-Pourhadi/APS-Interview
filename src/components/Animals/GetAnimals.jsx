import { useRef, useState } from "react";
import { Heading } from "../GlobalStyleComponents";

const GetAnimals = ({ name, updateUser }) => {
  const inputEl = useRef("");
  const [valid, setValid] = useState(true);

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
    <>
      <Heading>
        <span>Well Done {name}!</span> <br /> Please Enter name of 4 animals separated by comma
      </Heading>
      <form onSubmit={handleUpdateUser}>
        <div className="input-group input-group-lg mb-3 w-50 me-auto ms-auto">
          <input type="text" className="form-control" placeholder="Name of 4 Animals" ref={inputEl} />
          <input className="btn btn-outline-success" type="submit" />
        </div>
        {!valid && (
          <div className="text-danger fs-4">Animals should be only 4 and separated by comma ( , )</div>
        )}
      </form>
    </>
  );
};

export default GetAnimals;
