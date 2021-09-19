import { useEffect, useState } from "react";
import { AngleRight, Heading, Text } from "../../GlobalStyleComponents";
import Input from "./Input";

const Swap = ({ name, fruits, setDone }) => {
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
      <Heading>
        Nice Job {name}! For each fruit, please replace the first letter with the third one (third
        letter)
      </Heading>
      <div>
        {fruits.map((fruit, index) => (
          <Input content={fruit} count={index} key={index} />
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
