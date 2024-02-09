import { GraphqlClient } from '@shopify/shopify-api/lib/clients/graphql/graphql_client';
import Product from './Product/Product';
import {
  Container,
  LeftArrow,
  ProductsContainer,
  RightArrow
} from './Products.styles';

export default function Products() {
  const session;
  const client async = new GraphqlClient({ session });
  const response = await client.query({ data: '{your_query}' });

  const productsInfo = {
    0: {
      id: 'd1',
      url: 'https://romeopetlovers.com.br/collections/tudo/products/guia-de-cintura-romeo-double-running-para-cachorro',
      image:
        'https://romeopetlovers.com.br/cdn/shop/files/S8e564f8cf2d04175b00c785b805783e9b_3f2d35a5-4929-454f-9c89-d85898319db4_300x.webp?v=1702507044',
      name: 'Guia de Cintura Romeo Double Running para Cachorro',
      price: '199,90',
      discount: '29',
      discounted: '279,90',
      payment1: '19,96',
      payment2: '189,91'
    },
    1: {
      id: 'd2',
      url: 'https://romeopetlovers.com.br/collections/tudo/products/caminha-romeo-comfort-plus-para-gatos',
      image:
        'https://romeopetlovers.com.br/cdn/shop/files/Verde_4f1b1eb1-7a87-44bf-b31a-dddc4d54cd1e_400x.jpg?v=1698412410',
      name: 'Caminha Romeo Comfort Plus para Gatos',
      price: '219,90',
      discount: '27',
      discounted: '299,00',
      payment1: '21,95',
      payment2: '208,91'
    },
    2: {
      id: 'd3',
      url: '',
      image: '',
      name: 'd1',
      price: '100',
      discount: '',
      discounted: '100',
      payment1: '',
      payment2: ''
    },
    3: {
      id: 'd4',
      url: '',
      image: '',
      name: 'd1',
      price: '100',
      discount: '',
      discounted: '100',
      payment1: '',
      payment2: ''
    },
    4: {
      id: 'd5',
      url: '',
      image: '',
      name: 'd1',
      price: '100',
      discount: '',
      discounted: '100',
      payment1: '',
      payment2: ''
    },
    5: {
      id: 'd6',
      url: '',
      image: '',
      name: 'd1',
      price: '100',
      discount: '',
      discounted: '100',
      payment1: '',
      payment2: ''
    }
  };

  function scrollToLeft() {
    const products = document.getElementById('products');

    const elem = products.children[1];
    console.log(Object.entries(productsInfo));
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
        <img src="left.svg" alt="" draggable="false" />
      </LeftArrow>
      <ProductsContainer id="products">
        {Object.keys(productsInfo).map(n => (
          <Product data={productsInfo[n]} />
        ))}
      </ProductsContainer>
      <RightArrow type="button" onClick={() => scrollToRight()}>
        <img src="right.svg" alt="" draggable="false" />
      </RightArrow>
    </Container>
  );
}
