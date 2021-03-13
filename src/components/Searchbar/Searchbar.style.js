import styled from 'styled-components';

export const StyledInput = styled.input`
  position: relative;
  border: none;
  padding: 8px;
  width: 100%;
  &:focus{
    outline:none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
`;

export const InputClearIcon = styled.div`
  flex: 0 0;
  &:hover{
    cursor:pointer;
  }
`;