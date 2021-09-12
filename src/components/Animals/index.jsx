import PrimaryBtn from "../assets/PrimaryBtn";

const Animals = ({ userName }) => {
  return (
    <div>
      <p>
        <span>Well Done {userName} !</span> Enter name of 3 animals separated by comma
      </p>
      <label htmlFor="animal-input">My Animals: </label>
      <input id="animal-input" type="text" />
      <PrimaryBtn link="sort-list" />
    </div>
  );
};

export default Animals;
