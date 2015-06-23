var STORAGE_KEY = 'loginInfo';

function saveToStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

var loginInfo = getStorage(STORAGE_KEY);

if(loginInfo || loginInfo.) {
  
}