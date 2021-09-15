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

    const fruits = inputValue.split(",").map((fruit) => fruit.trim());
    updateUser({ fruits });
  };

  return (
    <>
      <Heading>
        <span>Well Done {name}!</span> Please name four of your favorite fruits separated by comma
      </Heading>
      <form onSubmit={handleUpdateUser}>
        <div className="input-group input-group-lg mb-3 w-50 me-auto ms-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Name of 4 Fruits"
            ref={inputEl}
          />
          <input className="btn btn-outline-success" type="submit" />
        </div>
        {!valid && (
          <div className="text-danger fs-4">
            Fruits should be only 4 and separated by comma ( , )
          </div>
        )}
      </form>
    </>
  );
};

export default GetAnimals;
