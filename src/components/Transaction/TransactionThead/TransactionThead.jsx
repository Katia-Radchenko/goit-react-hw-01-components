import { Items, Thead } from './TransactionThead.styled';

export default function TransactionThead() {
  return (
    <Thead>
    <tr>
      <Items>Type</Items>
      <Items>Amount</Items>
      <Items>Currency</Items>
    </tr>
    </Thead >
  );
}


