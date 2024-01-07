import PropTypes from 'prop-types';
import StatsListItem from './StatsListItem/StatsListItem';

export default function StatList({ stats = [] }) {
  const listElements = stats.map(stat => <StatsListItem key={stat.id} label={stat.label}
                                                        percentage={stat.percentage} />);

  return (
    <ul className='stat-list'>
      {listElements}
    </ul>
  );
}
