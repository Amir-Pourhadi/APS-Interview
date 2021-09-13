import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const Detail = styled.div({
  minHeight: 40,
  backgroundColor: "#161E2CCC",
});

export const Text = styled.p({
  display: "flex",
  alignItems: "center",
  fontSize: 20,
  color: "white",
  margin: 0,
});

export const Link = styled.a({
  "&:hover": {
    color: "#FF9900",
  },
});

export const GitHubIcon = styled(FaGithub)({
  verticalAlign: "top",
  fontSize: 28,
  marginLeft: 12,
  color: "white",
});
