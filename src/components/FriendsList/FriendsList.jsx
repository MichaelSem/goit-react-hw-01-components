import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem/FriendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul class="friends-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
