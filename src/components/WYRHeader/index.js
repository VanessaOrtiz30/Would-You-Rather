import styled from 'styled-components';
import Lato from 'lato-font';

const WYRHeader = styled.h2`
  font-family: 'Lato';
  text-align: center;
  font-style: regular;
  font-size: 3em;
  color: #35C4FC;
  margin-top: 5px;
  margin-bottom: 5px;

@media only screen 
  and (min-device-width: 275px) 
  and (max-device-width: 667px) 
  {
    font-size: 1.2em;
    letter-spacing: -1.3px;
    padding-top: 4.2px;
  }
`;

export default WYRHeader;
