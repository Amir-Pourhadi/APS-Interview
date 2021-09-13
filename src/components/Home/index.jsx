import PrimaryBtn from "../assets/PrimaryBtn";
import { Main } from "./view";

const Home = () => (
  <Main className="text-center">
    <h1 className="py-5">Welcome to APSignlas English Interview</h1>
    <p className="py-5 fs-3">
      You are going to answer some easy but nice questions. <br />
      Take a deep breath and press Continue to start...
    </p>
    <PrimaryBtn link="/name" />
  </Main>
);

export default Home;
