import PropTypes from 'prop-types';
import css from './friends-list.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
