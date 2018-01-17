export function getUserToken() {
    if (window && localStorage.getItem('logAuth')) {
        return JSON.parse(localStorage.getItem('logAuth'))
    }
    return false;
}

export function getCardId() {
    if (window && localStorage.getItem('cardId')) {
        return JSON.parse(localStorage.getItem('cardId'))
    }
    return false;
}

export function saveCardId(value) {
    window.localStorage.setItem('cardId', JSON.stringify(value))
}

export function saveUserToken(value) {
    window.localStorage.setItem('logAuth', JSON.stringify(value.token))
}
