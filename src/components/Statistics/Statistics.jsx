import TitleHeader from './TitleHeader/TitleHeader';
import StatList from './StatList/StatList';

export default function Statistics({ stats }) {
  return (
    <section className='statistics'>
      <TitleHeader title='Upload stats'></TitleHeader>
      <StatList stats={stats}
      />
    </section>
  );
}

