import PropTypes from 'prop-types';
import TitleHeader from './TitleHeader/TitleHeader';
import StatList from './StatList/StatList';
import { StatisticsSection } from './Statistics.styled';

export default function Statistics({ stats }) {
  return (
    <StatisticsSection >
      <TitleHeader title='Upload stats'></TitleHeader>
      <StatList stats={stats}
      />
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array,
};
