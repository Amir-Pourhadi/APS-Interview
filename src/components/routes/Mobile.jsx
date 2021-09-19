import styled from "styled-components";
import { Main } from "../GlobalStyleComponents";

const Mobile = () => {
  return (
    <Main>
      <Gif />
      <p className="text-center px-1 fs-4">
        Oh! You should open this website on your laptop or desktop computer!
      </p>
    </Main>
  );
};

const Gif = styled.div({
  backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
  height: "80%",
  backgroundPosition: "center",
});

export default Mobile;
