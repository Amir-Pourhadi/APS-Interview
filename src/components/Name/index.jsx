import PrimaryBtn from "../assets/PrimaryBtn";

const Name = () => {
  return (
    <div>
      Hello, Enter your name below:
      <form>
        <label htmlFor="name-input">My name is: </label>
        <input id="name-input" type="text" />
        <PrimaryBtn link="/animals" />
      </form>
    </div>
  );
};

export default Name;
