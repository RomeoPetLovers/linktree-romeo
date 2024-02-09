import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vw;
`;

export const LeftArrow = styled.button`
  margin-left: 2vw;
  height: 10vw;
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  user-select: none;

  img {
    transform: rotate(180deg);
  }
`;

export const RightArrow = styled.button`
  margin-right: 2vw;
  height: 10vw;
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  user-select: none;
`;

export const Arrow = styled.img`
  height: 100%;
  width: 100%;
  user-select: none;
`;
export const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80vw;
  height: 100%;
  overflow-x: auto;
  touch-action: pan-x;
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
`;
