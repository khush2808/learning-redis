# Redis Lists

Redis Lists are ordered collections of strings. You can add elements to the head or tail, and retrieve ranges or individual elements.

## Common List Commands

- `LPUSH key value [value ...]` — Add one or more values to the head of a list
- `RPUSH key value [value ...]` — Add one or more values to the tail of a list
- `LPOP key` — Remove and get the first element in a list
- `RPOP key` — Remove and get the last element in a list
- `LRANGE key start stop` — Get a range of elements from a list
- `LLEN key` — Get the length of a list

## Examples in Node.js

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
await client.lPush("tasks", "task1", "task2");
await client.rPush("tasks", "task3");
const allTasks = await client.lRange("tasks", 0, -1);
console.log(allTasks); // [ 'task2', 'task1', 'task3' ]
const first = await client.lPop("tasks");
console.log(first); // 'task2'
const last = await client.rPop("tasks");
console.log(last); // 'task3'
await client.quit();
```

See the official [Redis List Commands](https://redis.io/commands/?group=list) for more details.
