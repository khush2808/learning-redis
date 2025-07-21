# Redis Streams

Redis Streams are a powerful data structure for managing data logs, event sourcing, and real-time messaging.

## Common Stream Commands

- `XADD key * field value [field value ...]` — Add an entry to a stream
- `XRANGE key start end [COUNT count]` — Read a range of entries from a stream
- `XREAD COUNT count STREAMS key id [key id ...]` — Read data from one or more streams
- `XDEL key id [id ...]` — Delete entries from a stream
- `XLEN key` — Get the length of a stream

## Examples in Node.js

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
await client.xAdd("mystream", "*", { user: "alice", message: "Hello!" });
const entries = await client.xRange("mystream", "-", "+");
console.log(entries); // Array of stream entries
await client.quit();
```

See the official [Redis Stream Commands](https://redis.io/commands/?group=stream) for more details.
