import {
  CardContainer,
  TitleContainer,
  HourCard,
  DivisorText,
  TitleCard,
  Status,
} from "./styles";

export function MealCard({ item }: any) {
  const { Hora, name, isDiet } = item;

  return (
    <CardContainer>
      <TitleContainer>
        <HourCard>{Hora}</HourCard>
        <DivisorText> |</DivisorText>
        <TitleCard>{name}</TitleCard>
      </TitleContainer>
      <Status type={isDiet} />
    </CardContainer>
  );
}
