export default function updateUniqueItems(map) {
  if (!(Map.isMap(map))) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
