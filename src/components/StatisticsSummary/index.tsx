import {
  Container,
  Title,
  Subtitle,
  IconWrapper,
  ContentWrapper,
} from "./styles";
import { ArrowUpRight } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

interface StatiticsProps {
  title: string;
  subtitle: string;
}

export function StatiticsSummary({ title, subtitle }: StatiticsProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleUserToStatiticsScreen() {
    navigation.navigate("statitics");
  }

  return (
    <Container onPress={handleUserToStatiticsScreen}>
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
