import styled, { keyframes } from "styled-components"

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
    margin-top: 30%;
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
      return 'margin-top: 30%'; 
    }  
  }
};

const loserTransition = (props) => {
  return props.loserDesktopImage ? (props.imageId === 1 ? `${fadeOutRight} 0.5s` : `${fadeOutLeft} 0.5s`) : ``
}

const ImgShow = styled.img`
  margin: auto;
  width: 100%;
  height: auto;
  cursor: pointer;
  box-sizing: border-box; /* Works to make the border the image be counted as part of the 100% */;
  animation: ${props => props.winnerDesktopImage ?  ( props.winnerDesktopImage ? winnerTransition : loserTransition ) : imagesTransitions};
  ${winnerCenterImage};
  border: ${props => props.active && !props.winnerDesktopImage ? 'solid 3.5px #41F926' : 'solid 3.5px white'};
  display: block;
  opacity: ${props => props.loserDesktopImage ? 0 : 1};


  @media only screen 
  and (min-device-width: 275px) 
  and (max-device-width: 667px) 
  {
    animation: ${props => props.winnerDesktopImage ?  ( props.winnerDesktopImage ? winnerTransitionMobile : loserTransition ) : imagesTransitions};
    margin-left: auto;
    margin-right: auto;
    ${winnerCenterImageMobile};
  }

`;




export default ImgShow;