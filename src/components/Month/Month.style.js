import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  height: 97vh;

  @media only screen and (max-width: 376px) {
    overflow-x: hidden;
  }
`;

export const Header = styled.div`
  width: 900px;
  max-width: 900px;
  background-color: #039be5;
  color: #fff;
  margin: 0;
  padding: 20px 0;
  font-size: 24px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media only screen and (max-width: 376px) {
    position: fixed;
    top: 0;
    width: 100vw;
    border-radius: 0;
    z-index: 1;
  }
`;

export const BackArrow = styled.i`
  cursor: pointer;
  position: absolute;
  left: 20px;
`;

export const NextArrow = styled.i`
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

export const Body = styled.div`
  display: grid;
  width: 900px;
  max-width: 900px;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-right: 0;
  border-bottom: 0;

  @media only screen and (max-width: 376px) {
    width: 100vw;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
`;
