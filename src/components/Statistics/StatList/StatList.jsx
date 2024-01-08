import PropTypes from 'prop-types';
import StatsListItem from './StatsListItem/StatsListItem';
import { StatsList, Header } from './StatList.styled';

export default function StatList({ title, stats = [] }) {
  const listElements = stats.map(stat => (
    <StatsListItem
      key={stat.id}
      label={stat.label}
      percentage={stat.percentage}
    />
  ));

  return (
    <>
      {title && <Header>{title}</Header>}
      <StatsList>{listElements}</StatsList>
    </>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
