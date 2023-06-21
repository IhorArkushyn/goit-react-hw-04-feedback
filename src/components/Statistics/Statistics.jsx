import PropTypes from 'prop-types';
import * as S from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <S.StatsList>
      <S.StatItem>Good: {good}</S.StatItem>
      <S.StatItem>Neutral: {neutral} </S.StatItem>
      <S.StatItem>Bad: {bad} </S.StatItem>
      <S.StatItem>Total: {total}</S.StatItem>
      <S.StatItem>Positive feedback: {positivePercentage}%</S.StatItem>
    </S.StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
