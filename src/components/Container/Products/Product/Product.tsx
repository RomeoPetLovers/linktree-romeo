import {
  Container,
  Content,
  Discount,
  Discounted,
  Highlight,
  Image,
  Name,
  Payment,
  Price,
  Text
} from './Product.styles';

export default function Product({ data, last }) {
  return (
    <Container id={data.id}>
      <Content href={data.url} style={{ marginRight: last ? '0' : '2.5vw' }}>
        <Discount>{data.discount}% OFF</Discount>
        <Image src={data.image} />
        <Text>
          <Name>{data.name}</Name>
          <Discounted>R$ {data.discounted}</Discounted>
          <Price>R$ {data.price}</Price>
          <Payment>
            <span>
              em <Highlight>12x</Highlight> de{' '}
              <Highlight>R$ {data.payment1}</Highlight>
            </span>
            <span>
              ou <Highlight>R$ {data.payment2}</Highlight> via pix
            </span>
          </Payment>
        </Text>
      </Content>
    </Container>
  );
}
