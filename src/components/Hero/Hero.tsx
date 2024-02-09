import { Bold, Cat, CatImg, Container, HeroText } from './Hero.styles';

export default function Hero() {
  return (
    <Container>
      <HeroText>
        <span>Um e-commerce especializado em</span>
        <span>
          todo <Bold>cuidado, segurança, diversão</Bold>
        </span>
        <span>
          <Bold>e amor</Bold> que seu pet merece!
        </span>
      </HeroText>
      <Cat>
        <CatImg src="/cego.svg" draggable="false" alt="" />
      </Cat>
    </Container>
  );
}
