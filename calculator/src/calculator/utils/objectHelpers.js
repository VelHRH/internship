function arrayFromObject(array) {
  return Object.values(array);
}

function findKeyBySymbol(object, symbol) {
  return Object.keys(object).find(key => object[key].symbol === symbol);
}

export { arrayFromObject, findKeyBySymbol };
