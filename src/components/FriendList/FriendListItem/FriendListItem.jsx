import PropTypes from 'prop-types';
import {
  FriendsItem,
  SpanAvatar,
  SpanStatus,
  Name,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendsItem>
      <SpanStatus isOnline={isOnline}></SpanStatus>
      <SpanAvatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
