var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

<<<<<<< HEAD
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
=======
function desctructivelyDeleteFromObjectByKey(object, key){
  
>>>>>>> 86d9a41a1684298083d2eb30eac3beac4fdff078
}
