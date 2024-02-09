import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-left: 10vw;
  padding-right: 10vw;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6vw;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2vw;
  text-align: center;
  font-weight: 400;
  font-family: 'Segoe UI', Arial, sans-serif;

  span {
    text-align: center;
    font-weight: 600;
    font-family: 'Fredoka', Arial, sans-serif;
    font-size: 5vw;
  }
`;

export const Highlight = styled.span`
  color: #ffffff;
  font-weight: 600;
  font-family: 'Fredoka', Arial, sans-serif;
  font-size: 5vw;
`;

export const Heart = styled.img`
  color: #ffffff;
  display: inline;
  position: relative;
  top: 0.5vw;
  height: 3.5vw;
  width: 3.5vw;
  user-select: none;
`;

export const EmailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 8vw;
`;

export const Email = styled.input`
  width: 100%;
  height: 10vw;
  padding: 2vw;
  padding-left: 5vw;
  padding-right: 5vw;
  border: 0;
  border-radius: 2.5vw;
  font-size: 3.5vw;
  margin-bottom: 1vw;
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 3.5vw;
    user-select: none;
  }
`;

export const Enter = styled.button`
  position: absolute;
  width: 10vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  border: none;
  background: none;
  cursor: pointer;
  user-select: none;
`;

export const Arrow = styled.img`
  height: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
