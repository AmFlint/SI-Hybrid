export function login() {
    return async function(dispatch) {
        dispatch({
            type: 'LOGIN',
            payload: {}
        });
    };
}
