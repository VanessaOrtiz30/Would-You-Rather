import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { getImages, getImagesSuccess, getImagesFailure } from './actions';
import { GET_IMAGES_REQUEST, IMAGES_API_URL, GET_IMAGES } from './constants';

export function* getImagesData() {
    try {
        const images = yield call(getImagesDataAPI, {});
        yield put(getImagesSuccess(images));
    } catch (err) {
        yield put(getImagesFailure(err));
    }
}

const getImagesDataAPI = () => fetch(IMAGES_API_URL)
    .then((response) => response.json());

export default function* imagesData() {
   yield takeLatest(GET_IMAGES, getImagesData);
} 
