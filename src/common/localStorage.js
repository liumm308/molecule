
let LocalStorage = new Object({
    inItemByKey(key,item){
      if(!isJsonStr(item)){
        localStorage.setItem(key,JSON.stringify(item));
      } else {
        localStorage.setItem(key,item);
      }
    },
    outItemBykey(key){
      return JSON.parse(localStorage.getItem(key));
    },
    clearItem(){
      localStorage.clear();
    }
  });

function isJsonStr(str) {
  try {
    if (typeof JSON.parse(str) === "object") {
      return true;
    }
  } catch(e) {
  }
  return false;
}

export default LocalStorage
