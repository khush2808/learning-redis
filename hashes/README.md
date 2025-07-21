# Redis Hashes

Redis Hashes are maps between string field and string values, ideal for representing objects.

## Common Hash Commands

- `HSET key field value [field value ...]` — Set the value of a field in a hash
- `HGET key field` — Get the value of a field in a hash
- `HGETALL key` — Get all fields and values in a hash
- `HDEL key field [field ...]` — Delete one or more fields from a hash
- `HEXISTS key field` — Determine if a field exists in a hash
- `HLEN key` — Get the number of fields in a hash

## Examples in Node.js

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
await client.hSet("user:1", "name", "Alice", "age", "30");
const name = await client.hGet("user:1", "name");
console.log(name); // Alice
const user = await client.hGetAll("user:1");
console.log(user); // { name: 'Alice', age: '30' }
await client.hDel("user:1", "age");
const exists = await client.hExists("user:1", "name");
console.log(exists); // 1 (true)
await client.quit();
```

See the official [Redis Hash Commands](https://redis.io/commands/?group=hash) for more details.
