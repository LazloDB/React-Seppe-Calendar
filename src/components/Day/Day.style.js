import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100px;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  ${props => props.isFree && 'background-color: rgba(179, 229, 252, 0.507)'};

  ${props =>
    props.isToday &&
    'background-color: #01579B; color: white; box-shadow: 0px 3px 25px 0px rgba(0,0,0,0.59);'};

  ${props =>
    props.type &&
    props.type.length > 0 &&
    props.type[0].type === 'Petri' &&
    'background-color: #ff0000; color: white;'};

  &:hover {
    cursor: pointer;
    background-color: rgb(41, 114, 170);
    color: white;
  }

  @media only screen and (max-width: 767px) {
    min-height: 100px;
  }
`;
