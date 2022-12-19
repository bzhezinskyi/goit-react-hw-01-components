import {
  Item,
  StatusOnline,
  StatusNotOnline,
  Avatar,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      {isOnline ? <StatusOnline /> : <StatusNotOnline />}

      <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
      <Name>{name}</Name>
    </Item>
  );
};
