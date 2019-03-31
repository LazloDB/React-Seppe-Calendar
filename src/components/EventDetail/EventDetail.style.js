import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  ${props => `background-color: ${props.type};`};
  margin-right: 20px;
`;

export const TextWrapper = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Name = styled.div`
  text-align: center;
`;

export const Type = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
`;
