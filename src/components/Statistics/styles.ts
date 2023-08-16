import styled from "styled-components/native";


export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.GREEN_MID};
  height: 100px;
  border-radius: 8px;
  margin-top: 36px;
  
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.HEADING};
  
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}
`;