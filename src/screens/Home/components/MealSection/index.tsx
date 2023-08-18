import { SectionList, Text, TouchableOpacity, View } from "react-native";
import { Container, Title, NewMealButton, TitleButton } from "./styles";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import { MealsList } from "../MealsList";

export function MealSection() {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Title>Refeições</Title>
      <NewMealButton>
        <Plus size={18} color={COLORS.WHITE} />
        <TitleButton>Nova refeição</TitleButton>
      </NewMealButton>

      <MealsList />
    </Container>
  );
}
