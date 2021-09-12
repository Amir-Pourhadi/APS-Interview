import { exact, string } from "prop-types";
import { Link } from "react-router-dom";
import { AngleRight, Text } from "./view";

const PrimaryBtn = ({ button: { content, link } }) => (
  <div>
    <Link className="btn btn-primary" to={link}>
      <Text>{content}</Text>
      <AngleRight />
    </Link>
  </div>
);

PrimaryBtn.propTypes = { button: exact({ content: string, link: string }) };

export default PrimaryBtn;
