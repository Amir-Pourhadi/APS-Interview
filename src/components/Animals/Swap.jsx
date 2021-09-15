import { useEffect, useState } from "react";
import { AngleRight, Heading, Text } from "../GlobalStyleComponents";
import Input from "./Input";

const Swap = ({ name, animals, setDone }) => {
  const [seconds, setSeconds] = useState(13);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        !--seconds && clearInterval(interval);
        return seconds;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Heading>Nice Job {name}! Please swap first and last letter of each animal.</Heading>
      <div>
        {animals.map((animal, index) => (
          <Input content={animal} count={index} animals={animals} key={index} />
        ))}
        <button className="btn btn-primary" disabled={seconds} onClick={() => setDone(true)}>
          <Text>{seconds ? `Wait ${seconds} Seconds` : "Continue"}</Text>
          {!seconds && <AngleRight />}
        </button>
      </div>
    </>
  );
};

export default Swap;
