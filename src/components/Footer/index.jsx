import { Detail, GitHubIcon, Link, Text } from "./view";

const Footer = () => {
  return (
    <footer>
      <Detail className="d-flex justify-content-around align-items-center" height={40}>
        <Text>&copy; Copyright 2021, APSignals Inc. Amir Pourhadi, All Rights Reserved.</Text>
        <Text>
          View Source Code on &nbsp;
          <Link href="#" target="/">
            GitLab
            <GitHubIcon />
          </Link>
        </Text>
      </Detail>
    </footer>
  );
};

export default Footer;
