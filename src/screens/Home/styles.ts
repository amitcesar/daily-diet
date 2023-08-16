import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 0 24px;
`;


export const Header = styled.View`
  margin-top: 64px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
`;

