import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AngleRight, Text } from "../GlobalStyleComponents";
import { Heading, Main } from "./view";

const Home = () => {
  const [seconds, setSeconds] = useState(13);
  const history = useHistory();

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
    <Main className="text-center">
      <Heading>Welcome to APSignals English Interview</Heading>
      <p className="py-5 fs-3">
        You are going to answer a few simple questions. <br />
        Refreshing the page is not necessary! <br />
        Take a deep breath and click on Continue to start ... <br />
        Good Luck!
      </p>
      <button className="btn btn-primary" disabled={seconds} onClick={() => history.push("/name")}>
        <Text>{seconds ? `Wait ${seconds} Seconds` : "Continue"}</Text>
        {!seconds && <AngleRight />}
      </button>
    </Main>
  );
};
export default Home;
