import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: auto;
  width: auto;
  position: relative;
`;

export const Content = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 55vw;
  width: 33.5vw;
  min-width: 33.5vw;
  //border: 1px solid;
  border: none;
  box-shadow: #0000000a 0px 0px 2px 0px;
  border-radius: 2.5vw;
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  padding: 2vw;
  position: relative;
  color: #000000;
  background: #ffffff;
  font-family: 'Nunito', Helvetica, sans-serif;
  font-weight: 600;
`;

export const Discount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.5vw;
  left: 1.5vw;
  height: 3vw;
  width: 15vw;
  background: #00b27a;
  text-align: center;
  color: #ffffff;
  border-radius: 5vw;
  font-size: 1.75vw;
`;

export const Image = styled.img`
  display: flex;
  height: 28vw;
  width: 28vw;
  border: none;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 2vw;
  padding-left: 1vw;
  padding-right: 1vw;
`;

export const Name = styled.div`
  display: flex;
  font-size: 2vw;
`;

export const Discounted = styled.div`
  display: flex;
  font-size: 2vw;
  margin-top: 0.5vw;
  color: #677279;
  text-decoration: line-through;
`;

export const Price = styled.div`
  display: flex;
  font-size: 3vw;
  font-weight: 900;
`;

export const Payment = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 0.5vw;
  display: flex;
  font-size: 1.75vw;
  color: #677279;
`;

export const Highlight = styled.span`
  font-weight: 2vw;
  font-weight: 700;
  color: #000000;
`;
