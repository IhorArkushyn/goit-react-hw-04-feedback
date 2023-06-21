import PropTypes from 'prop-types';

import * as S from './Section.styled.jsx';

export const Section = ({ title, children }) => (
  <S.Container>
    <S.SectionTitle>{title}</S.SectionTitle>
    <>{children}</>
  </S.Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
