import PrimaryBtn from "../assets/PrimaryBtn";

const button = {
  content: "Continue",
  link: "/name",
};

const Home = () => (
  <main>
    <h1>Welcome to APSignlas English Interview</h1>
    <p>You are going to answer some easy but nice questions 😁</p>
    <p>Take a deep breath and press Continue...</p>
    <PrimaryBtn button={button} />
  </main>
);

export default Home;
