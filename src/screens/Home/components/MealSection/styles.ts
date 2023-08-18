import styled from "styled-components/native";


export const Container = styled.View`
  margin-top: 24px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  padding: 4px;
`;

export const NewMealButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};

  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  `;

  export const TitleButton = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    padding-left: 10px;
  `;

  

