import PropTypes from 'prop-types';
import { ListItem, SpanLabel, SpanPercentage } from './StatsListItem.styled';

export default function StatsListItem({ label,percentage }) {
 return ( <ListItem>
    <SpanLabel>{label}</SpanLabel>
    <SpanPercentage>{percentage}</SpanPercentage>
  </ListItem>)
}

StatsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}
