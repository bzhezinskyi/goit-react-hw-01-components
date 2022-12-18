import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Container } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(friend => {
        return FriendListItem(friend);
      })}
    </Container>
  );
};
