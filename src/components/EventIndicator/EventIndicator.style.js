import styled from 'styled-components';

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 0px;
  margin-bottom: 5px;

  ${props => props.type === 'Petri' && 'background-color: #ef5350;'};
  ${props => props.type === 'Sick' && 'background-color: #66bb6a;'};
  ${props => props.type === 'Vacation' && 'background-color: #ffee58;'};
  ${props => props.type === 'Shift' && 'background-color: #ab47bc;'};
  ${props => props.type === 'Birthday' && 'background-color: #ffa726;'};
  ${props => props.type === '' && 'background-color: #bdbdbd;'};

  @media only screen and (max-width: 767px) {
    margin-left: 5px;
    margin-bottom: 0px;
  }
`;
