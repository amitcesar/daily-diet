import { View } from "react-native";
import styled, {css} from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    border: 1px solid ${({theme})=> theme.COLORS.GRAY_500};
    border-radius: 6px;
    width: 100%;
    height: 49px;

  
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;
    margin-bottom: 2px;
    padding: 8px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HourCard = styled.Text`
  font-weight: bold;
  font-size: ${({theme})=> theme.FONT_SIZE.XS}px;
`;

export const DivisorText = styled.Text`
 color: ${({theme}) => theme.COLORS.GRAY_400};
`;

export const TitleCard = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  padding: 6px;
`;


export type StatusStyleProps = 'yes' | 'no'
type Props = {
  type: StatusStyleProps
}

export const Status = styled(View)<Props>`
background: ${({theme, type})=> type === 'yes' 
  ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

width: 14px;
height: 14px;
border-radius: 10px;
margin-right: 8px;
`;

