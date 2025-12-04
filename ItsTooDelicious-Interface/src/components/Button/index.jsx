import PropTypes from 'prop-types';
import { StylesButton } from './styles';

export function Button({ children, ...props }) {
  return <StylesButton {...props}>{children}</StylesButton>;
}

Button.propTypes = {
  children: PropTypes.string,
};
