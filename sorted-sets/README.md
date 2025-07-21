# Redis Sorted Sets

Redis Sorted Sets are collections of unique strings ordered by a score. Useful for leaderboards, rankings, etc.

## Common Sorted Set Commands

- `ZADD key score member [score member ...]` — Add one or more members to a sorted set, or update its score
- `ZRANGE key start stop [WITHSCORES]` — Get a range of members by index
- `ZREM key member [member ...]` — Remove one or more members from a sorted set
- `ZCARD key` — Get the number of members in a sorted set
- `ZSCORE key member` — Get the score of a member
- `ZREVRANGE key start stop [WITHSCORES]` — Get a range of members in reverse order

## Examples in Node.js

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
await client.zAdd("scores", [
  { score: 100, value: "Alice" },
  { score: 200, value: "Bob" },
]);
const top = await client.zRange("scores", 0, -1, { WITHSCORES: true });
console.log(top); // [ 'Alice', '100', 'Bob', '200' ]
await client.zRem("scores", "Alice");
const count = await client.zCard("scores");
console.log(count); // 1
await client.quit();
```

See the official [Redis Sorted Set Commands](https://redis.io/commands/?group=sorted-set) for more details.
