import PropTypes from 'prop-types';
import * as S from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <S.ButtonsBox>
      {options.map(option => (
        <S.Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </S.Button>
      ))}
    </S.ButtonsBox>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
