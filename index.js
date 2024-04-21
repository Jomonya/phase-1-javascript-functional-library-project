const customFunctions = {
    myEach: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else {
        for (const key in collection) {
          callback(collection[key]);
        }
      }
      return collection;
    },
  
    myMap: function(collection, callback) {
      const result = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          result.push(callback(collection[i]));
        }
      } else {
        for (const key in collection) {
          result.push(callback(collection[key]));
        }
      }
      return result;
    },
  
    myReduce: function(collection, callback, initialValue) {
      let accumulator = initialValue === undefined ? 0 : initialValue;
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          accumulator = callback(accumulator, collection[i]);
        }
      } else {
        for (const key in collection) {
          accumulator = callback(accumulator, collection[key]);
        }
      }
      return accumulator;
    },
  
    myFind: function(collection, predicate) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            return collection[i];
          }
        }
      } else {
        for (const key in collection) {
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
      return undefined;
    },
  
    myFilter: function(collection, predicate) {
      const result = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            result.push(collection[i]);
          }
        }
      } else {
        for (const key in collection) {
          if (predicate(collection[key])) {
            result.push(collection[key]);
          }
        }
      }
      return result;
    },
  
    mySize: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },
  
    myFirst: function(collection, n = 1) {
      return collection.slice(0, n);
    },
  
    myLast: function(collection, n = 1) {
      return collection.slice(-n);
    },
  
    myKeys: function(collection) {
      return Object.keys(collection);
    },
  
    myValues: function(collection) {
      return Object.values(collection);
    }
  };
  
  module.exports = customFunctions;
  