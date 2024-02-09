import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => lighten(0.155, theme.colors.secondary)};
  height: 30vw;
`;

export const HeroText = styled.div`
  display: inline;
  width: 100%;
  height: 30vw;
  display: flex;
  justify-content: left;
  padding-left: 10vw;
  align-content: center;
  font-size: 4vw;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Nunito', Helvetica, sans-serif;
  flex-wrap: wrap;

  span {
    font-size: 4vw;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Nunito', Helvetica, sans-serif;
  }
`;

export const Bold = styled.span`
  display: inline;
  font-size: 4vw;
  font-family: 'Nunito', Helvetica, sans-serif;
  font-weight: 800;
`;

export const Cat = styled.div`
  position: relative;
  width: 100%;
  user-select: none;
`;

export const CatImg = styled.img`
  position: absolute;
  height: 40vw;
  width: auto;
  right: 0px;
  bottom: -2vw;
  user-select: none;
`;
