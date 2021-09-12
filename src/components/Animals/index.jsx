import PrimaryBtn from "../assets/PrimaryBtn";

const Animals = () => {
  return (
    <div>
      <p>Enter name of 3 animals separated by comma</p>
      <form>
        <label htmlFor="animal-input">My Animals: </label>
        <input id="animal-input" type="text" />
        <PrimaryBtn link="sort-list" />
      </form>
    </div>
  );
};

export default Animals;
