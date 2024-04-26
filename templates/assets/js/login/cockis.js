function crateLocal(id, username) {
    localStorage.setItem('id', id);
    localStorage.setItem('flag', flag);
    localStorage.setItem('username', username);
}
function checkLocalStorageFlag() {
    return localStorage.getItem('flag') !== null;
}

function getLocal() {
    var id = localStorage.getItem('id');
    var username = localStorage.getItem('username');
    var flag = localStorage.getItem('flag');
    return { id: id, username: username , flag:flag };
}
function clearLocal() {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('flag');

}

function checkLocalStorageFlag() {
    return localStorage.getItem('flag') !== null;
}


