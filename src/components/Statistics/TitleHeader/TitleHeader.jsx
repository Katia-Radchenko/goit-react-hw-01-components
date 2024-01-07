import PropTypes from 'prop-types';

export default function TitleHeader({ title }) {
  return title &&
    <h2 className='title'>{title}</h2>;
}

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
