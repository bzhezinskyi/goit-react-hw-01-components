import PropTypes from 'prop-types';

import getRandomHexColor from 'components/getRandomHexColor';
import {
  Container,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

const StatItem = stats => {
  return stats.map(({ id, label, percentage }) => {
    return (
      <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
        <Label>{label}</Label>
        <Percentage>{percentage + '%'}</Percentage>
      </Item>
    );
  });
};

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <StatList>{StatItem(stats)}</StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
