import Link from 'next/link';
import {
  Confira,
  ConfiraButton,
  ConfiraCat,
  ConfiraCatImg,
  Content,
  ContentContainer,
  FiqueSabendo,
  FiqueSabendoTexto,
  Gato,
  GatoImg,
  Highlight,
  RedeIcone,
  RedeIconeImg,
  Redes,
  Suporte,
  SuporteConteudo,
  SuporteGato,
  SuporteTexto,
  SuporteTitulo,
  Title
} from './Container.styles';
import Products from './Products/Products';

export default function Container() {
  return (
    <ContentContainer>
      <Content>
        <Title>Talvez você esteja procurando:</Title>
        <Products />
        <Confira>
          <Link href="https://romeopetlovers.com.br/">
            <ConfiraButton type="button">Confira a loja completa</ConfiraButton>
          </Link>
          <ConfiraCat href="https://romeopetlovers.com.br/">
            <ConfiraCatImg src="saturno.svg" alt="" draggable="false" />
          </ConfiraCat>
        </Confira>
        <Suporte href="https://wa.me/5512988779760">
          <SuporteConteudo>
            <SuporteTitulo>Suporte</SuporteTitulo>
            <SuporteTexto>
              Tire dúvidas e resolva problemas com nosso atendente Romeozinho
            </SuporteTexto>
          </SuporteConteudo>
          <SuporteGato>
            <img src="suporte.svg" alt="" draggable="false" />
          </SuporteGato>
        </Suporte>
        <Redes>
          <RedeIcone href="https://www.instagram.com/romeopetlovers/">
            <RedeIconeImg src="instagram.svg" alt="" draggable="false" />
          </RedeIcone>
          <RedeIcone href="https://www.tiktok.com/@romeopetlovers">
            <RedeIconeImg src="tiktok.svg" alt="" draggable="false" />
          </RedeIcone>
          <RedeIcone href="mailto:suporte@romeopetlovers.com.br">
            <RedeIconeImg src="email.svg" alt="" draggable="false" />
          </RedeIcone>
        </Redes>
        <FiqueSabendo>
          <Gato>
            <GatoImg src="sabendo.svg" draggable="false" />
          </Gato>
          <FiqueSabendoTexto>
            <span>Fique sabendo das</span>
            <span>
              novas <Highlight>promoções</Highlight>
            </span>
            <span>
              <Highlight>semanais</Highlight>
            </span>
          </FiqueSabendoTexto>
        </FiqueSabendo>
      </Content>
    </ContentContainer>
  );
}
