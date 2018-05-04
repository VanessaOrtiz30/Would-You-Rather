import { fromJS } from 'immutable';

import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  CHANGE_IMAGE_ACTION,
  CHANGE_IMAGE,
  IMAGE_SLIDE_ANIMATION,
  SAVE_DECISION,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: true,
  fadeSlideImage: null,
});

function homeReducer(state = initialState, action) {
    switch (action.type) {
      case GET_IMAGES_SUCCESS:
        let response = action.images;
        let imagesArray = [];
        let leftImageObj, rightImageObj, dataClone, initialLeftImage, initialRightImage;
        
        imagesArray = response.data.map((tout) => {
          return {
            headline: tout.name,
            url: tout.image,
          }
        });

        dataClone = imagesArray.slice();
        initialLeftImage = dataClone.shift();
        initialRightImage = dataClone.shift();
        
        return state
          .set('wouldYouRatherData', imagesArray)
          .set('loading:', false)
          .set('leftImageObj', initialLeftImage)
          .set('rightImageObj', initialRightImage)
          .set('remainingImages', dataClone)

      case CHANGE_IMAGE_ACTION:
        let id = action.id;
        let remainingImages = action.remainingImages;
        let newRightImage = action.rightImageObj;
        let newLeftImage = action.leftImageObj;
        let count = action.count;
        let newImage;

        if (remainingImages.length) {
          newImage = remainingImages.shift();
          newRightImage = id === 0 ? newImage : newRightImage;
          newLeftImage = id === 1 ? newImage :  newLeftImage;
        }

        if (remainingImages.length >= 1) {
          return state
            .set('leftImageObj', newLeftImage)
            .set('rightImageObj', newRightImage)
            .set('remainingImages', action.remainingImages)

        } else if ((remainingImages.length === 0)) { 
          return state
            .set('leftImageObj', newLeftImage)
            .set('rightImageObj', newRightImage)
        }
      
      case IMAGE_SLIDE_ANIMATION:
        return state
          .set('fadeSlideImage', false);

      case SAVE_DECISION:
        let decision = action.choice;
        let disliked = action.disliked;
        console.log(`You prefer ${decision.headline}`);
        console.log(`over ${disliked.headline}`);

       fetch(`http://localhost:3000`)
        .then((response) => response.json())
        .then((response) => { 
          const newChoice = {
            choices: {
              decision, 
              disliked,
            },
          };
          fetch(`http://localhost:3000/posts`, {
            "body": JSON.stringify(newChoice),
            "headers": { 
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            "method": "PUT" 
          }).then((response) => response.json());
        });
          
        return state
          .set('decision', decision)
          .set('disliked', disliked)

      default:
        return state;
      }
}

export default homeReducer;
