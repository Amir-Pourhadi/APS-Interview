import PrimaryBtn from "../../assets/PrimaryBtn";
import Input from "../Input";

const Inputs = ({ name, animals }) => {
  return (
    <>
      <h1 className="py-5">Nice Job {name}! Please swap first and last letter of each animal.</h1>
      <div>
        {animals.map((animal, index) => (
          <Input content={animal} count={index} animals={animals} key={index} />
        ))}
        <PrimaryBtn link="sort-list" />
      </div>
    </>
  );
};

export default Inputs;
