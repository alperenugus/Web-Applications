const isLoggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN-IN':
            return state = true;
        case 'SIGN-OUT':
            return state = false;
        default:
            return state;
    }
}

export default isLoggedReducer;