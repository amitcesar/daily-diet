import styled from "styled-components/native";


export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  margin-top: 32px;
  
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.HEADING};
  
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const IconWrapper = styled.View`
  flex-direction: column;
  align-self: flex-end;
  padding: 6px;
 
`;

export const ContentWrapper = styled.View`
  align-items: center;
  padding-bottom: 21px;
`;