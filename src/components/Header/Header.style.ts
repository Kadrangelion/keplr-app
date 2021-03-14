import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  height: 5vh;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.header};
  transition: background 1s;
  color: white;
`;

export const HeaderReturn = styled.div`
  display: flex;
  width: 24px;
  align-items: center;
  cursor: pointer;
`;

export const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weigth: bold;
`;