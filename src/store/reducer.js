import { SET_RELOADING_HOME } from './constant';

const initState = {
    isReloadingHome: false,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_RELOADING_HOME:
            return {
                ...state,
                isReloadingHome: action.payload,
            };
        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
