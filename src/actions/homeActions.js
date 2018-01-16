import * as HomeActions from '../action-types/homeActionTypes'

export function hello() {
    return async function (dispatch) {
        await dispatch({
            type : HomeActions.HELLO,
            payload : 'Hello Mamène'
        })
    }
}