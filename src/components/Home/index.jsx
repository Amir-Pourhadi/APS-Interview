import PrimaryBtn from "../assets/PrimaryBtn";
import { Heading, Main } from "./view";

const Home = () => (
  <Main className="text-center">
    <Heading>Welcome to APSignals English Interview</Heading>
    <p className="py-5 fs-3">
      You are going to answer some easy questions. <br />
      Take a deep breathe and press Continue to start ... <br />
      Please remember do NOT refresh page and complete inputs carefully!
    </p>
    <PrimaryBtn link="/name" />
  </Main>
);

export default Home;
