const searchListReducer = (state = [], action) => {
    switch(action.type) {
        case 'searchList/added': {
            return [
                ...state,
                action.payload
            ]
        }
        default: {
            return state;
        }
    }
};

export default searchListReducer;