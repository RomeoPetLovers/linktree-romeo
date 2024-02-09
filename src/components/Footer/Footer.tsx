import {
  Arrow,
  Container,
  Email,
  EmailContainer,
  Enter,
  Heart,
  Highlight,
  Title
} from './Footer.styles';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Title>
          <span>
            <Highlight>Junte-se ao nosso clube de</Highlight>
          </span>
          <span>
            apaixonados por pets <Heart src="heart.svg" draggable="false" />
          </span>
        </Title>
        <EmailContainer>
          <Email type="input" placeholder="Seu email favorito" />
          <Enter>
            <Arrow src="arrow.svg" alt="" />
          </Enter>
        </EmailContainer>
      </Container>
    </footer>
  );
}
