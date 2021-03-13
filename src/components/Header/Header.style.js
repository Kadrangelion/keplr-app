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

export const HeaderTitle = styled.h2`
`;
