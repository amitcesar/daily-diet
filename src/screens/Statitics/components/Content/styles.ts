import styled from "styled-components/native";

export const Container = styled.View`
 
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 32px;
`;

export const TitleContent = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100 };
  font-size: ${({theme}) => theme.FONT_SIZE.SM }px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-weight: bold;
  padding-bottom: 21px;
`;

export const DataContainer = styled.View`
  height: 89px;
  width: 100%;
  background-color: ${({theme})=> theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  border-radius: 8px;

 
  margin: 8px;
 
`;

export const Title = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
  font-weight: bold;
  padding: 6px;
`;

export const Subtitle = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_200};
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  
`;

export const InfoContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;

height: 107px;
  width: 50%;



`;

export const SuccessOrFailedContainer = styled.View`
  height: 89px;
  width: 100%;
  background-color: ${({theme})=> theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  margin: 6px;
  
`;


