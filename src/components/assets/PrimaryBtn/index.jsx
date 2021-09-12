import { string } from "prop-types";
import { Link } from "react-router-dom";
import { AngleRight, Text } from "./view";

const PrimaryBtn = ({ link }) => (
  <div>
    <Link className="btn btn-primary" to={link}>
      <Text>Continue</Text>
      <AngleRight />
    </Link>
  </div>
);

PrimaryBtn.propTypes = { link: string };

export default PrimaryBtn;
