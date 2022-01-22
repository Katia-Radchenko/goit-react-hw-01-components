import PropTypes from "prop-types";
import { DescriptionWrap, Image, Name, Tag, Location } from "./Descriptions";

const Description = ({ avatar, userName, tag, location }) => {
  return (
    <DescriptionWrap>
      <Image src={avatar} alt={userName} />
      <Name>{userName}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionWrap>
  );
};

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
