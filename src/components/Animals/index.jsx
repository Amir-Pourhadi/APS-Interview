import { useRef } from "react";
import PrimaryBtn from "../assets/PrimaryBtn";

const Animals = ({ user: { name, animals }, updateUser }) => {
  const inputEl = useRef("");

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const animals = inputEl.current.value.split(",").map((animal) => animal.trim());
    updateUser({ animals });
  };

  return (
    <div>
      <p>
        <span>Well Done {name} !</span> Enter name of 3 animals separated by comma
      </p>
      <form onSubmit={handleUpdateUser}>
        <label htmlFor="animal-input">My Animals: </label>
        <input id="animal-input" type="text" ref={inputEl} />
        <input type="submit" className="btn btn-success" />
      </form>
      <PrimaryBtn link="sort-list" />
    </div>
  );
};

export default Animals;
