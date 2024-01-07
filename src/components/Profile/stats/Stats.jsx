import PropTypes from 'prop-types';
import { StatLabel, StatQuantity, StatsItem, StatsList } from './Stats.styled';

export default function Stats({ followers, views, likes }) {
  return (
    <StatsList>
      <StatsItem>
        <StatLabel >Followers</StatLabel>
        <StatQuantity >{followers}</StatQuantity>
      </StatsItem>
      <StatsItem>
        <StatLabel >Views</StatLabel>
        <StatQuantity>{views}</StatQuantity>
      </StatsItem>
      <StatsItem>
        <StatLabel>Likes</StatLabel>
        <StatQuantity>{likes}</StatQuantity>
      </StatsItem>
    </StatsList>
  );
}

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

