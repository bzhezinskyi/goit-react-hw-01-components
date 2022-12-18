import PropTypes from 'prop-types';

import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      <Status
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></Status>
      <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
