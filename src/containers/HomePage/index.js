import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { getImages, getImagesSuccess, getImagesFailure, changeImageAction, changeImage, imageSlideAnimationAction, saveDecisionAction } from './actions';
import {remainingImages, leftImageObj } from './reducer';
import Center from '../../components/Center';
import DisplayImageAndText from '../../components/DisplayImageAndText';
import coderGif from '../../images/coder.gif';
import { SAVE_DECISION } from './constants';

export class HomePage extends React.PureComponent {

  componentDidMount = () => {
    this.props.dispatch(getImages());
  }

  whenClicked = (text, id) => {
    const { remainingImages, rightImageObj, leftImageObj } = this.props;
    const choice = id === 0 ? leftImageObj : rightImageObj;
    const disliked = id === 0 ? rightImageObj : leftImageObj;
    
    this.props.dispatch(changeImageAction(id, remainingImages, rightImageObj, leftImageObj));
    this.props.dispatch(saveDecisionAction(choice, disliked));

  }

  render() {
    const { wouldYouRatherData, leftImageObj, rightImageObj } = this.props;
    let leftImageUrl, rightImageUrl, leftImageText, rightImageText;

    if (wouldYouRatherData) {
      leftImageUrl = leftImageObj.url;
      rightImageUrl = rightImageObj.url;
      leftImageText = leftImageObj.headline;
      rightImageText = rightImageObj.headline;
    }

    return (
      <Center>
        <DisplayImageAndText 
            imageSrc = {leftImageUrl}
            textImage = {leftImageText}
            id = {0}
            onHandleClick = { this.whenClicked }
        />
        <DisplayImageAndText 
            imageSrc = {rightImageUrl}
            textImage = {rightImageText}
            id = {1}
            onHandleClick = { this.whenClicked }
        /> 
      </Center>
    )
  }
}

HomePage.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  images: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
   wouldYouRatherData: state.get('wouldYouRatherData'),
   loading: state.get('loading'),
   leftImageObj: state.get('leftImageObj'),
   rightImageObj: state.get('rightImageObj'),
   remainingImages: state.get('remainingImages'),
   decision: state.get('decision'),
   disliked: state.get('disliked'),
  }
}
  
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const App = connect(mapStateToProps, mapDispatchToProps);

// Connected Component
export default compose(
  App,
)(HomePage)
