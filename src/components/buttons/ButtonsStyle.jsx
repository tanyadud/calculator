import styled from 'styled-components';

export const BoxButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ButtonsStyle = styled.button`
  height: 50px;
  margin: 5px;
  font-size: 24px;
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
`;
