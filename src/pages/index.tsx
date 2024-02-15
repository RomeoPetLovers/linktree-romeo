import Head from 'next/head';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Romeo Pet Lovers</title>
        <meta name="description" content="" />
      </Head>
      <header>
        <h1>{}</h1>
      </header>
      <main>
        <div className="container">
          <Header />
          <Hero />
          <Container />
          <Footer />
        </div>
      </main>
      <footer>
        <div>
          <p />
        </div>
      </footer>
    </div>
  );
}
