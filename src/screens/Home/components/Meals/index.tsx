import { Container, Title, NewMealButton, TitleButton } from "./styles";

export function Meals() {
  return (
    <Container>
      <Title>Refeições</Title>
      <NewMealButton>
        <TitleButton>+ Nova refeição</TitleButton>
      </NewMealButton>
    </Container>
  );
}
