import {
  Container,
  TitleContent,
  DataContainer,
  Title,
  Subtitle,
  InfoContainer,
  SuccessOrFailedContainer,
} from "./styles";

export function Content() {
  return (
    <Container>
      <TitleContent>Estatisticas gerais</TitleContent>
      <DataContainer>
        <Title>22</Title>
        <Subtitle>melhor sequencia de pratos dentro da dieta</Subtitle>
      </DataContainer>
      <DataContainer>
        <Title>109</Title>
        <Subtitle>refeiçoes registradas</Subtitle>
      </DataContainer>
      <InfoContainer>
        <SuccessOrFailedContainer>
          <Title>99</Title>
          <Subtitle>refeições dentro da dieta</Subtitle>
        </SuccessOrFailedContainer>
        <SuccessOrFailedContainer>
          <Title>10</Title>
          <Subtitle>refeições fora da dieta</Subtitle>
        </SuccessOrFailedContainer>
      </InfoContainer>
    </Container>
  );
}
