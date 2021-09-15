import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

export const Main = styled.main({
  height: "calc(100vh - 100px)",
});

export const Heading = styled.h1({
  width: "70%",
  padding: "8% 0 30px",
  margin: "0 auto",
});

export const Text = styled.span({ fontSize: 20 });

export const AngleRight = styled(FaAngleRight)({
  fontSize: 25,
  marginLeft: 12,
});
