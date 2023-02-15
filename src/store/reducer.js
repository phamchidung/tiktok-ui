import { SET_RELOADING_HOME, SET_VIDEO_MODAL_DATA, SET_VIDEO_MODAL_OPEN } from './constant';

const initState = {
    isReloadingHome: false,
    isLogin: true,
    videoModalData: {
        videoImg: undefined,
        videoId: undefined,
        videoUrl: undefined,
        isVideoModalOpen: false,
        isFirstVideo: false,
    },
};

function reducer(state, action) {
    switch (action.type) {
        case SET_RELOADING_HOME:
            return {
                ...state,
                isReloadingHome: action.payload,
            };
        case SET_VIDEO_MODAL_OPEN:
            return {
                ...state,
                videoModalData: {
                    ...state.videoModalData,
                    isVideoModalOpen: action.payload,
                },
            };
        case SET_VIDEO_MODAL_DATA:
            const newState = { ...state };

            Object.keys(action.payload).forEach((key) => {
                newState.videoModalData[key] = action.payload[key];
            });

            return newState;
        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
