import styled from 'styled-components';

export const ButtonsBox = styled.div`
  margin-top: 15px;
  display: flex;
  width: 300px;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 5px;
  width: 80px;
  border: none;
  font-weight: 500;
  border-radius: 10px;
  text-transform: capitalize;

  &:hover {
    color: white;
    scale: 1.1;
    cursor: pointer;
    background-color: #234a5c;
    transition: background-color 200ms linear;
    transition: scale 200ms linear;
  }
`;
