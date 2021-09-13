import PrimaryBtn from "../assets/PrimaryBtn";
import { Main } from "./view";

const Home = () => (
  <Main>
    <h1>Welcome to APSignlas English Interview</h1>
    <p>You are going to answer some easy but nice questions 😁</p>
    <p>Take a deep breath and press Continue...</p>
    <PrimaryBtn link="/name" />
  </Main>
);

export default Home;
