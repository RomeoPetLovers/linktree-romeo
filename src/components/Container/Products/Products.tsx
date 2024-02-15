// import { GraphqlClient } from '@shopify/shopify-api/lib/clients/graphql/graphql_client';
import Product from './Product/Product';
import {
  Arrow,
  Container,
  LeftArrow,
  ProductsContainer,
  RightArrow
} from './Products.styles';

export default function Products() {
  // const session;
  // const client = new GraphqlClient({ session });
  // const response = await client.query({ data: '{your_query}' });

  const productsInfo = {
    0: {
      id: '1',
      url: 'https://romeopetlovers.com.br/collections/alimentacao/products/fonte-eletrica-romeo-clean-fountain',
      image:
        'https://romeopetlovers.com.br/cdn/shop/files/Capa1_0c516dd8-bedc-4dbf-89e2-5f716d312c7d_800x.jpg?v=1691584372',
      name: 'Fonte Elétrica Romeo Clean Fountain',
      price: '367,00',
      discount: '27',
      discounted: '499,90',
      payment1: '37,19',
      payment2: '348,65'
    },
    1: {
      id: '2',
      url: 'https://romeopetlovers.com.br/collections/coleiras/products/coleira-romeo-leather-traditional-para-cachorro',
      image:
        'https://romeopetlovers.com.br/cdn/shop/files/CapaPrincipal_0e48efe0-cae1-499f-96d5-a9171f01f696_800x.jpg?v=1702480996',
      name: 'Coleira Romeo Leather Traditional para Cachorro',
      price: '137',
      discount: '9',
      discounted: '149,90',
      payment1: '13,88',
      payment2: '130,15'
    },
    2: {
      id: '3',
      url: 'https://romeopetlovers.com.br/collections/promocao-de-verao/products/garrafinha-de-passeio-4-em-1-romeo-happy-trip',
      image:
        'https://romeopetlovers.com.br/cdn/shop/products/Rosa300mleCaixadeRacao_1600x.jpg?v=1690386794',
      name: 'Garrafinha de Passeio 4 em 1 Romeo Happy Trip',
      price: '197,00',
      discount: '44',
      discounted: '349,90',
      payment1: '19,96',
      payment2: '187,15'
    },
    3: {
      id: '4',
      url: 'https://romeopetlovers.com.br/collections/promocao-de-verao/products/tapete-gelado-romeo-refreshing',
      image:
        'https://romeopetlovers.com.br/cdn/shop/files/VarianteAzul_webp_800x.jpg?v=1707848787',
      name: 'Tapete Gelado Romeo Refreshing',
      price: '97,00',
      discount: '43',
      discounted: '169,90',
      payment1: '9,83',
      payment2: '92,15'
    }
  };

  function scrollToLeft() {
    const products = document.getElementById('products');

    const elem = products.children[1];
    // console.log(Object.entries(productsInfo));
    if (elem != null) {
      const rect = elem.getBoundingClientRect();
      products.scrollLeft -= rect.width * 2;
    }
  }

  function scrollToRight() {
    const products = document.getElementById('products');

    const elem = products.children[1];

    if (elem != null) {
      const rect = elem.getBoundingClientRect();
      products.scrollLeft += rect.width * 2;
    }
  }

  return (
    <Container>
      <LeftArrow type="button" onClick={() => scrollToLeft()}>
        <Arrow src="left.svg" alt="" draggable="false" />
      </LeftArrow>
      <ProductsContainer id="products">
        {Object.keys(productsInfo).map(n => (
          <Product
            key={n}
            data={productsInfo[n]}
            last={parseInt(n, 10) === Object.keys(productsInfo).length - 1}
          />
        ))}
      </ProductsContainer>
      <RightArrow type="button" onClick={() => scrollToRight()}>
        <Arrow src="right.svg" alt="" draggable="false" />
      </RightArrow>
    </Container>
  );
}
