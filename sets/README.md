# Redis Sets

Redis Sets are unordered collections of unique strings. They are useful for storing unique items and performing set operations.

## Common Set Commands

- `SADD key member [member ...]` — Add one or more members to a set
- `SREM key member [member ...]` — Remove one or more members from a set
- `SMEMBERS key` — Get all members in a set
- `SISMEMBER key member` — Determine if a value is a member of a set
- `SCARD key` — Get the number of members in a set
- `SUNION key [key ...]` — Get the union of multiple sets
- `SINTER key [key ...]` — Get the intersection of multiple sets

## Examples in Node.js

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
await client.sAdd("fruits", "apple", "banana", "orange");
const fruits = await client.sMembers("fruits");
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
const isApple = await client.sIsMember("fruits", "apple");
console.log(isApple); // 1 (true)
await client.sRem("fruits", "banana");
const count = await client.sCard("fruits");
console.log(count); // 2
await client.quit();
```

See the official [Redis Set Commands](https://redis.io/commands/?group=set) for more details.
