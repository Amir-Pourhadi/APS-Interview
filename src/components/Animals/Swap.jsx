import { AngleRight, Heading, Text } from "../GlobalStyleComponents";
import Input from "./Input";

const Swap = ({ name, animals, setDone }) => {
  return (
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
  );
};

export default Swap;
