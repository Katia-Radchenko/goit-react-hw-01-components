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
  stats: PropTypes.array,
};
