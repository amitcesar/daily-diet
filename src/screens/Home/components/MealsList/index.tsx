import { SectionList, View, TouchableOpacity, Text } from "react-native";
import { MealCard } from "./MealCard";

import { sections } from "./mealsData";
import { ContainerList, SectionHeader } from "./styles";

export function MealsList() {
  return (
    <ContainerList>
      <SectionList
        sections={sections}
        renderItem={({ item, section }) => <MealCard item={item} />}
        renderSectionHeader={({ section }) => (
          <View>
            <SectionHeader>{section.sectionName}</SectionHeader>
          </View>
        )}
      />
    </ContainerList>
  );
}
