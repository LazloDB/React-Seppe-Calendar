import styled from 'styled-components';

export const Form = styled.form`
  height: 300px;
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: calc(50% - 20px);
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

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
