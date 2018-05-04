import styled from 'styled-components';

const winnerImageHideBorder = (props) => {
  return props.winnerDesktopImage ? 'hidden' : 'solid';
}

const pointerOrArrow = (props) => {
  if (props.loserDesktopImage && props.winnerDesktopImage) {
    return 'arrow'
  } else {
    return 'pointer'
  }
}

const ImageWrapper = styled.div`
  box-sizing: border-box;
  width: 45%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  cursor: ${pointerOrArrow};
  pointer-events: ${props => !props.loserDesktopImage ? 'auto' : 'none'};    
  //Need: pointer-events: ${props => !props.imageStatus ? 'auto' : 'none'};
  //for when we have an image error, to disable the clicks
        
&:hover { 
  outline: ${winnerImageHideBorder} 4px #35C4FC;
  outline-offset: -4px;
  opacity: ${props => !props.loserDesktopImage ? 0.87 : 0};
}

@media only screen 
  and (min-device-width: 275px) 
  and (max-device-width: 667px) 
  {
    width: 100%;
  }
`;

export default ImageWrapper;
