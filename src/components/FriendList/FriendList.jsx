import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';


export default function FriendList({ friends }) {
  const elements = friends.map(friend => <FriendListItem key={friend.id}
                                                         avatar={friend.avatar}
                                                         name={friend.name}
                                                         isOnline={friend.isOnline} />);
  return (

    <FriendsList className='friend-list'>
      {elements}
    </FriendsList>
  );
}

FriendList.propTypes = {
  stats: PropTypes.array,
};
