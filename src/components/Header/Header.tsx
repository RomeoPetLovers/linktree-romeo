import { Head, Logo, LogoImg } from './Header.styles';

export default function Header() {
  return (
    <header>
      <Head>
        <Logo>
          <LogoImg src="/logo.svg" draggable="false" />
        </Logo>
      </Head>
    </header>
  );
}
