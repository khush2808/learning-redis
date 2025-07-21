# Redis Strings

Strings are the most basic Redis data type. They can store any data, such as text or numbers (up to 512MB).

## Common String Commands

- `SET key value` — Set the value of a key
- `GET key` — Get the value of a key
- `DEL key` — Delete a key
- `INCR key` — Increment the integer value of a key
- `DECR key` — Decrement the integer value of a key
- `APPEND key value` — Append a value to a key
- `MGET key1 key2 ...` — Get the values of multiple keys

## Examples in Node.js

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
await client.set("counter", 10);
await client.incr("counter"); // 11
await client.decr("counter"); // 10
await client.append("greeting", "Hello");
await client.append("greeting", ", World!");
const greet = await client.get("greeting");
console.log(greet); // Hello, World!
await client.quit();
```

See the official [Redis String Commands](https://redis.io/commands/?group=string) for more details.
