import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import { Container, Thead, Tbody } from './TransactionHistory.styled';

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
        {items.map(item => {
          return TransactionHistoryItem(item);
        })}
      </Tbody>
    </Container>
  );
};
