const HashMap = () => {
  const initialBucketSize = 10000;

  let buckets = Array(initialBucketSize);

  let occupiedBuckets = 0;

  const node = (key, value) => {
    return { key, value };
  };

  const hash = (key) => {
    key = String(key);

    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  };

  const set = (key, value) => {
    key = String(key);

    const hashCode = hash(key);
    if (buckets[hashCode] == null) {
      console.log('added');
      buckets[hashCode] = node(key, value);
      occupiedBuckets++;
    } else if (buckets[hashCode].key == key) {
      console.log('has key already');
      buckets[hashCode] = node(key, value);
    }

    console.log('done');

    // !!!!!! TO DO, grow buckets when there is collison. If I do set up a linked list in the bucket, then I will need to modify all the functions below
  };

  const get = (key) => {
    key = String(key);

    const bucketAtIndex = buckets[hash(key)];

    if (bucketAtIndex && bucketAtIndex.key == key) {
      return bucketAtIndex.value;
    }
    return null;
  };

  const has = (key) => {
    key = String(key);

    const bucketAtIndex = buckets[hash(key)];

    return bucketAtIndex && bucketAtIndex.key == key;
  };

  const remove = (key) => {
    key = String(key);

    const bucketAtIndex = buckets[hash(key)];

    if (!bucketAtIndex || bucketAtIndex.key != key) return false;

    bucketAtIndex = null;
    occupiedBuckets--;
    return true;
  };

  const length = () => {
    return occupiedBuckets;
  };

  const clear = () => {
    buckets = Array(initialBucketSize);
    occupiedBuckets = 0;
  };

  const keys = () => {
    const bucketKeys = [];

    for (const bucketItem of buckets) {
      if (bucketItem) {
        bucketKeys.push(bucketItem.key);
      }
    }
    return bucketKeys;
  };

  const values = () => {
    const bucketValues = [];

    for (const bucketItem of buckets) {
      if (bucketItem) {
        bucketValues.push(bucketItem.value);
      }
    }
    return bucketValues;
  };

  const entries = () => {
    const storedPairs = [];

    for (const bucketItem of buckets) {
      if (bucketItem) {
        storedPairs.push([bucketItem.key, bucketItem.value]);
      }
    }
    return storedPairs;
  };

  return { set, get, has, remove, length, clear, keys, values, entries };
};
