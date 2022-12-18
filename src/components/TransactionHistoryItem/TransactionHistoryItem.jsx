import PropTypes from 'prop-types';

import { Th } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <Th>{type}</Th>
      <Th>{amount}</Th>
      <Th>{currency}</Th>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
