import { SET_RELOADING_HOME, SET_VIDEO_MODAL_DATA, SET_VIDEO_MODAL_OPEN } from './constant';

export const setLoadingHome = (payload) => ({
    type: SET_RELOADING_HOME,
    payload,
});

export const setVideoModalOpen = (payload) => ({
    type: SET_VIDEO_MODAL_OPEN,
    payload,
});

export const setVideoModalData = (payload) => ({
    type: SET_VIDEO_MODAL_DATA,
    payload,
});
