export function getUserToken() {
    if (window && localStorage.getItem('logAuth')) {
        return JSON.parse(localStorage.getItem('logAuth'))
    }
}

export function saveUserToken(value) {
    window.localStorage.setItem('logAuth', JSON.stringify(value.token))
}
