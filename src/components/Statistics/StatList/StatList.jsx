import PropTypes from 'prop-types';
import StatsListItem from './StatsListItem/StatsListItem';
import {StatsList} from './StatList.styled';

export default function StatList({ stats = [] }) {
  const listElements = stats.map(stat => <StatsListItem key={stat.id} label={stat.label}
                                                        percentage={stat.percentage} />);

  return (
    <StatsList className='stat-list'>
      {listElements}
    </StatsList>
  );
}