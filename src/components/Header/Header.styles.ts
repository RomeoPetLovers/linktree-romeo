import Link from 'next/link';
import styled from 'styled-components';

export const Head = styled.div`
  width: 100%;
  height: 18vw;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vw;
  padding-left: 10vw;
  display: flex;
  align-items: center;
  user-select: none;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  user-select: none;
  height: 100%;
`;

export const LogoImg = styled.img`
  width: auto;
  height: 100%;
  max-height: 12vw;
  user-select: none;
`;
