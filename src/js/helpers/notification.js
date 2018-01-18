export function saveNotification(value) {
    window.localStorage.setItem('notification', value);
}

export function deleteNotification() {
    window.localStorage.removeItem('notification');
}

export function getNotification() {
    const notification = window.localStorage.notification;
    return notification ? notification : false;
}

export function showNotification(message, actionText, timeout = 1000) {
    var snackbarContainer = document.querySelector('#demo-snackbar-example');
    var showSnackbarButton = document.querySelector('#demo-show-snackbar');
    var handler = function(event) {
    //   showSnackbarButton.style.backgroundColor = '';
    };
    //   showSnackbarButton.style.backgroundColor = '#' +
          Math.floor(Math.random() * 0xFFFFFF).toString(16);
      var data = {
        message,
        timeout,
        actionHandler: handler,
        actionText
      };
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
}