import PropTypes from 'prop-types';
import { Container, Images, Name, Tag, Location } from './Description.styled';

export default function Description({ username, tag, location, avatar }) {
  return (
    <Container>
      <Images src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Container>
  );
}
Description.ProtoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
