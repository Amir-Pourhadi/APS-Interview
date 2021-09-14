import { Detail, GitHubIcon, Link, Text } from "./view";

const Footer = () => {
  return (
    <footer>
      <Detail className="d-flex justify-content-around align-items-center" height={40}>
        <Text>
          Developed by
          <Link href="https://www.linkedin.com/in/amirpourhadi" target="/">
            &nbsp;Amir Pourhadi&nbsp;
          </Link>
          with Respect and Honor
        </Text>
        <Text>
          View Source Code on &nbsp;
          <Link href="https://github.com/Amir-Pourhadi/APS-Interview" target="/">
            GitHub
            <GitHubIcon />
          </Link>
        </Text>
      </Detail>
    </footer>
  );
};

export default Footer;