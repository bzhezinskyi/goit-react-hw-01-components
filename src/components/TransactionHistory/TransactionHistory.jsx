import PropTypes from 'prop-types';
import { Container, Thead, Tbody, Th } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <Tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Th>{type}</Th>
              <Th>{amount}</Th>
              <Th>{currency}</Th>
            </tr>
          );
        })}
      </Tbody>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
