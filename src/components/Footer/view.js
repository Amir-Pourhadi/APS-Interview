import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const Detail = styled.div({
  height: 40,
  backgroundColor: "#161E2CCC",
});

export const Text = styled.p(({ isMobile }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: isMobile ? "4vw" : 22,
  color: "white",
  margin: 0,
}));

export const Link = styled.a({
  "&:hover": {
    color: "#FF9900",
  },
});

export const GitHubIcon = styled(FaGithub)({
  verticalAlign: "top",
  fontSize: 28,
  marginLeft: 12,
});
