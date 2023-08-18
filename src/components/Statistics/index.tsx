import {
  Container,
  Title,
  Subtitle,
  IconWrapper,
  ContentWrapper,
} from "./styles";
import { ArrowUpRight } from "phosphor-react-native";

interface StatiticsProps {
  title: string;
  subtitle: string;
}

export function Statitics({ title, subtitle }: StatiticsProps) {
  return (
    <Container>
      <IconWrapper>
        <ArrowUpRight size={24} />
      </IconWrapper>

      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentWrapper>
    </Container>
  );
}
