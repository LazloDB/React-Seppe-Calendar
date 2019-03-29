import styled from 'styled-components';

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 5px;

  ${props => props.type === 'Petri' && 'background-color: #ff0000;'};
  ${props => props.type === 'Sick' && 'background-color: #00ff00;'};
`;
