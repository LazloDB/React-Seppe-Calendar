import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  background-color: #039be5;
  color: #fff;
  margin: 0;
  padding: 20px 0;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const BackArrow = styled.i`
  cursor: pointer;
  position: absolute;
  left: 20px;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
