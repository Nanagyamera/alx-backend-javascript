export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const { protocol, name } = endpoint;
  const key = `${protocol}-${name}`;

  if (!weakMap.has(key)) {
    weakMap.set(key, 0);
  }

  const queryCount = weakMap.get(key);
  weakMap.set(key, queryCount + 1);

  if (queryCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Rest of the logic for querying the API
  // ...

  // Example return statement
  return `API query successful for ${protocol}-${name}`;
}

export { weakMap, queryAPI };
