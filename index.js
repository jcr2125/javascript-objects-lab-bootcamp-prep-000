var recipes = {eggs: 3, chocolate: "1 cup"};

function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj, {key: value});
  return newObj;
}