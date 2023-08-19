import { Image } from "react-native";
import { Container, Header } from "./styles";
import DailyDietLogo from "@assets/Logo.png";
import AvatarImage from "@assets/Ellipse.png";
import { StatiticsSummary } from "@components/Statistics";
import { MealSection } from "./components/MealSection";

export function Home() {
  return (
    <Container>
      <Header>
        <Image source={DailyDietLogo} />
        <Image source={AvatarImage} />
      </Header>
      <StatiticsSummary
        title="90,86%"
        subtitle="das refeições dentro da dieta"
      />
      <MealSection />
    </Container>
  );
}
