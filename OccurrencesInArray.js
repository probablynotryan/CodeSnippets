const arr = ['a', 'a', 'b', 'c', 'b', 'c', 'e'];

const occurrences = arr.reduce((map, item) => {
  if (map.has(item)){ // If we have already encountered this item
    map.set(item, map.get(item) + 1); // Increment the count
  } else { // If this is the first time encountering the item
    map.set(item, 1); // Set the count to 1
  }
  return map;
}, new Map());

console.log(occurrences);

