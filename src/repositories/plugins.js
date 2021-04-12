import { Notify, Loading, LoadingBar, LocalStorage } from 'quasar'

const snackbar = (type, message, position='top-left') => {
    Notify.create({
        type: type,
        message: message,
        position: position,
    })
}

const showLoading = (message) => {
    Loading.show({
        message: message
    });
}

const hideLoading = () => {
    Loading.hide();
}


const showLoadingBar = () => {
    LoadingBar.start();
}
const hideLoadingBar = () => {
    LoadingBar.stop()
}
const setData = (key, value) => {
    LocalStorage.set(key, value);
}

const getData = (key) => {
    LocalStorage.getItem(key);
}



export {
    snackbar,
    showLoading,
    hideLoading,
    showLoadingBar,
    hideLoadingBar,
    setData,
    getData,
}