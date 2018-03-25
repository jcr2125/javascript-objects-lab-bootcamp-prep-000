var recipes = {eggs: 3, chocolate: "1 cup"};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return Object.assign(obj, { [key]: value});
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}