import { Head, Logo, LogoImg, LogoLink } from './Header.styles';

export default function Header() {
  return (
    <header>
      <Head>
        <Logo>
          <LogoLink href="https://romeopetlovers.com.br/">
            <LogoImg src="/logo.svg" draggable="false" />
          </LogoLink>
        </Logo>
      </Head>
    </header>
  );
}
