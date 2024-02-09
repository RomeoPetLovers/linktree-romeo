import Link from 'next/link';
import { lighten } from 'polished';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => lighten(0.155, theme.colors.secondary)};
  height: auto;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  height: 20vw;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  padding: 5vw;
  font-family: 'Fredoka', Helvetica, sans-serif;
  font-weight: 600;
`;

export const Confira = styled.div`
  width: 100%;
  height: 100%;
  padding: 11vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
`;

export const ConfiraButton = styled.button`
  width: 70%;
  height: 12.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 10vw;
  border: 0;
  background-color: ${({ theme }) => lighten(0.155, theme.colors.secondary)};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4.5vw;
  cursor: pointer;
  right: 0;
  top: 0;
  margin-right: 10vw;
  font-family: 'Fredoka', Helvetica, sans-serif;
  font-weight: 600;
  user-select: none;
`;

export const ConfiraCat = styled(Link)`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 10vw;
  bottom: 5.5vw;
  cursor: pointer;
`;

export const ConfiraCatImg = styled.img`
  width: 20vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Suporte = styled(Link)`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 4vw;
  padding-bottom: 4vw;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10vw;
  color: #ffffff;
  font-family: 'Nunito', Helvetica, sans-serif;
  font-weight: 600;
  font-size: 2vw;
  margin-left: 10vw;
  margin-right: 10vw;
`;

export const SuporteConteudo = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-family: 'Nunito', Helvetica, sans-serif;
  font-weight: 600;
  font-size: 2vw;
  user-select: none;
`;

export const SuporteTitulo = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #feaa62;
  font-family: 'Fredoka', Helvetica, sans-serif;
  font-weight: 600;
  font-size: 9vw;
`;

export const SuporteTexto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-family: 'Nunito', Helvetica, sans-serif;
  font-weight: 600;
  padding-right: 4vw;
  font-size: 3vw;
`;

export const SuporteGato = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-family: 'Nunito', Helvetica, sans-serif;
  font-weight: 600;
  font-size: 2vw;
  user-select: none;
`;

export const Redes = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vw;
  margin-bottom: 10vw;
  user-select: none;
`;

export const RedeIcone = styled(Link)`
  width: 20vw;
  height: 100%;
  margin-left: 3vw;
  margin-right: 3vw;
  user-select: none;
`;

export const RedeIconeImg = styled.img`
  width: 100%;
  height: 100%;
  user-select: none;
`;

export const FiqueSabendo = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FiqueSabendoTexto = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  font-size: 5.5vw;

  span {
    font-family: 'Nunito', Helvetica, sans-serif;
    font-weight: 600;
    font-weight: 700;
    font-size: 5.5vw;
  }
`;

export const Highlight = styled.span`
  font-family: 'Nunito', Helvetica, sans-serif;
  font-weight: 900;
  font-size: 5.5vw;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Gato = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  user-select: none;
`;

export const GatoImg = styled.img`
  position: absolute;
  width: auto;
  height: 52.5vw;
  display: flex;
  left: 0;
  bottom: -12vw;
  user-select: none;
`;
