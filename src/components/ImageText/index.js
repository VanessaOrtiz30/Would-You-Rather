import styled, { keyframes } from "styled-components";
import Lato from 'lato-font';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutRight = keyframes`
  from {
    margin-left: 0;
    opacity: 1;
  }
  to {
    margin-left: 100%;
    opacity: 0;
  }
`;

const fadeOutLeft = keyframes`
  from {
    margin-left: 0;
    opacity: 1;
  }
  to {
    margin-left: -100%;
    opacity: 0;
  }
`;

const centerWinnerRight = keyframes`
  from {
    margin-left: 0;
    opacity: 0;
  }
  to {
    margin-left: 55%;
    opacity: 1;
  }
`;
  
const centerWinnerLeft = keyframes`
  from {
    margin-left: 0;
    opacity: 0;
  }
  to {
    margin-left: -55%;
    opacity: 1;
  }
`;

const centerWinnerTopImageMobile = keyframes`
  from {
    margin-top: 0;
    opacity: 0;
  }
  to {
    margin-top: 40%;
    opacity: 1;
  }
`;

const centerWinnerBottomImageMobile = keyframes`
  from {
    margin-top: 0;
    opacity: 0;
  }
  to {
    margin-top: -40%;
    opacity: 1;
  }
`;
  
const imagesTransitions = (props) => {
  return props.desktopFadeOut ? (props.imageId === 1 ? `${fadeOutRight} 0.5s` : `${fadeOutLeft} 0.5s`) : `${fadeIn} 0.5s`
};
  
const winnerTransition = (props) => {
  if (props.winnerDesktopImage) {
    if (props.imageId === 1) {
      return `${centerWinnerLeft} 1s`;
    } else {
      return `${centerWinnerRight} 1s`;
    }
  }
};
  
const winnerCenterImage = (props) => {
  if (props.winnerDesktopImage) {
    if (props.imageId === 1) {
      return 'margin-left: -55%';
    } else { 
      return 'margin-left: 55%'; 
    }  
  }
};
  
const loserTransition = (props) => {
  return props.loserDesktopImage ? (props.imageId === 1 ? `${fadeOutRight} 0.5s` : `${fadeOutLeft} 0.5s`) : ``
}

const winnerTransitionMobile = (props) => {
  if (props.winnerDesktopImage) {
    if (props.imageId === 1) {
      return `${centerWinnerBottomImageMobile} 1s`;
    } else {
      return `${centerWinnerTopImageMobile} 1s`;
    }
  }
};
  
const winnerCenterImageMobile = (props) => {
  if (props.winnerDesktopImage) {
    if (props.imageId === 1) {
      return 'margin-top: -40%';
    } else { 
      return 'margin-top: 40%'; 
    }  
  }
};

const borderWidth = 3.5;

const ImageText = styled.div`
  font-size: 22px;
  font-family: Lato;
  position: absolute; /* Position absolute to move 3.5 pixels from the bottom of the parent divs */
  bottom: ${borderWidth}px;
  display: flex;
  justify-content: center;
  color: white;
  background: rgba(72, 72, 72, 0.4);
  padding: 15px;
  height: auto;
  cursor: pointer;
  width: calc(100% - 7px);
  box-sizing: border-box;
  right: ${borderWidth}px;
  left: ${borderWidth}px;
  animation: ${props => props.winnerDesktopImage ?  ( props.winnerDesktopImage ? winnerTransition : loserTransition ) : imagesTransitions};
  ${winnerCenterImage};
  opacity: ${props => props.loserDesktopImage ? 0 : 1};  

@media only screen 
and (min-device-width: 275px) 
and (max-device-width: 667px) 
  {
    font-size: 20px;
    animation: ${props => props.winnerDesktopImage ?  ( props.winnerDesktopImage ? winnerTransitionMobile : loserTransition ) : imagesTransitions};
    margin-left: auto;
    margin-right: auto;
    ${winnerCenterImageMobile};
  }
`;

export default ImageText;
