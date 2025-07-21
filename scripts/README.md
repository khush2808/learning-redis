# Redis Scripting (Lua)

Redis supports server-side scripting with Lua, allowing you to run complex logic atomically.

## Common Scripting Commands

- `EVAL script numkeys key [key ...] arg [arg ...]` — Run a Lua script
- `EVALSHA sha1 numkeys key [key ...] arg [arg ...]` — Run a cached Lua script
- `SCRIPT LOAD script` — Load a script into the script cache
- `SCRIPT EXISTS sha1 [sha1 ...]` — Check if scripts exist in the cache

## Examples in Node.js

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
const result = await client.eval("return redis.call('set', KEYS[1], ARGV[1])", {
  keys: ["foo"],
  arguments: ["bar"],
});
console.log(result); // OK
await client.quit();
```

See the official [Redis Scripting Commands](https://redis.io/commands/?group=script) for more details.
