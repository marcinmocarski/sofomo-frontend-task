const userLocationInfoReducer = (state = null, action) => {
    switch(action.type) {
        case 'userLocationInfo/set': {
            return action.payload
        }
        default: {
            return state;
        }
    }
};

export default userLocationInfoReducer;