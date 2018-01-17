export default function(state = {}, action = {}) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
            });
        case 'SIGNUP':
            return Object.assign({}, state, {
                isLoggedIn: false,
            });
        default:
            return state;
    }
}