function checkLocalStorageFlag() {
    return localStorage.getItem('flag') !== null;
}


if (checkLocalStorageFlag())
{
  window.location.href = "http://127.0.0.1:8000/home";
}
console.log(checkLocalStorageFlag())