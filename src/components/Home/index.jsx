import PrimaryBtn from "../assets/PrimaryBtn";
import { Heading, Main } from "./view";

const Home = () => (
  <Main className="text-center">
    <Heading>Welcome to APSignals English Interview</Heading>
    <p className="py-5 fs-3">
      You are going to answer a few simple questions. <br />
      Take a deep breath and click on Continue to start ... <br />
      Refreshing the page is not necessary, and fill the inputs carefully! <br />
      Good Luck!
    </p>
    <PrimaryBtn link="/name" />
  </Main>
);

export default Home;
