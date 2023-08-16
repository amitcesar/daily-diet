import { Text, View } from "react-native";
import { Container, Title, Subtitle } from "./styles";

interface StatiticsProps {
  title: string;
  subtitle: string;
}

export function Statitics({ title, subtitle }: StatiticsProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
