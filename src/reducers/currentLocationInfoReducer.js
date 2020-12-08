const currentLocationInfoReducer = (state = {}, action) => {
    switch(action.type) {
        case 'currentLocationInfo/set': {
            return action.payload
        }
        default: {
            return state;
        }
    }
};

export default currentLocationInfoReducer;