import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAILURE,
    CHANGE_IMAGE_ACTION,
    CHANGE_IMAGE,
    IMAGE_SLIDE_ANIMATION,
    SAVE_DECISION,
  } from './constants';


export function getImages() {
    return {
        type: GET_IMAGES,
    };
}

export function changeImage(){
    return {
        type: CHANGE_IMAGE,
    };
}

/**
 * Load the images, this action starts the request saga
 * 
 * @param {array} images The images data from the API
 * @return {object} An action object with a type of images
 */ 

// Images parameter has the actual images
export function getImagesSuccess(images) {
    return {
        type: GET_IMAGES_SUCCESS,
        images,
    };
}

export function getImagesFailure() {
    return {
        type: GET_IMAGES_FAILURE,
    };
}

export function changeImageAction(id, remainingImages, rightImageObj, leftImageObj) {
    return {
        type: CHANGE_IMAGE_ACTION,
        id,
        remainingImages,
        rightImageObj,
        leftImageObj,
    };
}

export function imageSlideAnimationAction() {
    return {
        type: IMAGE_SLIDE_ANIMATION,
    };
}

export function saveDecisionAction(choice, disliked) {
    return {
        type: SAVE_DECISION,
        choice,
        disliked,
    };
}
