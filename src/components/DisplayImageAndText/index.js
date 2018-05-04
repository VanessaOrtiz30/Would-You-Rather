import React from 'react';

import Center from '../../components/Center';
import ImageWrapper from '../../components/ImageWrapper';
import ImgShow from '../../components/ImgShow';
import ImageText from '../../components/ImageText';
import errorImage from '../../images/errorImage.jpg';

class DisplayImageAndText extends React.Component {

    handleClick = () => {
        this.props.onHandleClick(this.props.textImage, this.props.id);
    }
    //All Images must be Exactly the size of Height=683px, Width=1024px to look proportional OR atleast have left and right images of the same size
    render() {   
    return (
            <ImageWrapper>
                <div onClick = { this.handleClick }>
                    <ImgShow
                        src = {this.props.imageSrc} 
                        onClick= {this.props.handleClick}/>
                    <ImageText>
                        {this.props.textImage}
                    </ImageText>
                </div>
            </ImageWrapper>
        );
    }
}
export default DisplayImageAndText;
