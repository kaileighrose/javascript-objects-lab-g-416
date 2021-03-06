var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  // returns a clone of `object` by adding `key` and `value` (it is non-destructive)
  return Object.assign(object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // updates `object` with the given `key` and `value` (it is destructive)
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  // deletes `key` from a clone of object and returns the new object (it is non-destructive)
  var clone = Object.assign({}, object);
  delete clone[key]
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  // deletes `key` from object and returns object
  delete object[key];
  return object;
}