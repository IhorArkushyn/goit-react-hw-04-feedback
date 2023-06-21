import PropTypes from 'prop-types';
import * as S from './Notification.styled';

export const Notification = ({ message }) => {
  return <S.Message>{message}</S.Message>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
