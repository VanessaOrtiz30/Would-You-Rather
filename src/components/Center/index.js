import styled from 'styled-components';

const Center = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 100%;

@media only screen 
  and (min-device-width: 275px) 
  and (max-device-width: 667px) 
  {
    display: flex;
    flex-direction: column;
  }
`;

export default Center;
