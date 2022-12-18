import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Avatar,
  Username,
  Teg,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <Username>{username}</Username>
        <Teg>{'@' + tag}</Teg>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
