import PropTypes from 'prop-types';
import TransactionBodyItem from './TransactionBodyItem/TransactionBodyItem';
import { TBody } from './TransactionBody.styled';


export default function TransactionBody({ items }) {
  const transactionElem = items.map(item => <TransactionBodyItem key={item.id}
                                                                 type={item.type}
                                                                 amount={item.amount}
                                                                 currency={item.currency} />);
  return (
    <TBody>
      {transactionElem}
    </TBody>
  );
}

TransactionBody.propTypes = {
  stats: PropTypes.array,
};
