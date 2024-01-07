import PropTypes from 'prop-types';
import { Header } from './TitleHeader.styled';

export default function TitleHeader({ title }) {
  return title &&
    <Header className='title'>{title}</Header>;
}

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
