import PropTypes from 'prop-types';
import StatList from './StatList/StatList';
import { StatisticsSection } from './Statistics.styled';

export default function Statistics({ stats }) {
  return (
    <StatisticsSection>
      <StatList title="Upload stats" stats={stats} />
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
