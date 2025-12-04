import { CategoriesCarousel, OffersCarousel } from '../../components';
import { BottomBackground, Container, TopBackground } from './styles';

export function Home() {
  return (
    <Container>
      <TopBackground>
        <h1>Bem-Vindo!</h1>
      </TopBackground>
      <BottomBackground>
        <CategoriesCarousel />
        <OffersCarousel />
      </BottomBackground>
    </Container>
  );
}
