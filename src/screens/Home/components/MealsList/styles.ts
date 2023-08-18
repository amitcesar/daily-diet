import styled from "styled-components/native";


export const ContainerList = styled.View`

 
  padding: 4px;
`;

export const SectionHeader = styled.Text`

  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.HEADING};
  margin-top: 21px;
`;