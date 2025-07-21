# Redis Transactions

Redis Transactions allow you to execute a group of commands atomically using `MULTI` and `EXEC`.

## Common Transaction Commands

- `MULTI` — Start a transaction block
- `EXEC` — Execute all commands issued after MULTI
- `DISCARD` — Discard all commands issued after MULTI
- `WATCH key [key ...]` — Watch keys for conditional execution

## Examples in Node.js

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();

const multi = client.multi();
multi.set("foo", "bar");
multi.incr("counter");
const results = await multi.exec();
console.log(results); // [ 'OK', 1 ]

await client.quit();
```

See the official [Redis Transaction Commands](https://redis.io/commands/?group=transaction) for more details.
