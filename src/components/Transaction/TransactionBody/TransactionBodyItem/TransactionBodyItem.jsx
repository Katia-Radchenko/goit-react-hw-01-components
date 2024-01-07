import PropTypes from 'prop-types';
import { TRow,Items } from './TransactionBodyItem.styled';



export default function TransactionBodyItem({ type,amount,currency  }) {
  return ( <TRow>
    <Items>{type}</Items>
    <Items>{amount}</Items>
    <Items>{currency}</Items>
  </TRow>
)
}

TransactionBodyItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}
