import PropTypes from 'prop-types';
import TransactionThead from './TransactionThead/TransactionThead';
import TransactionBody from './TransactionBody/TransactionBody';
import { Table } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TransactionThead />
      <TransactionBody items={items} />
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
