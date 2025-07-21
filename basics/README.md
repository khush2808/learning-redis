# Redis Basics

Welcome to Redis! This section covers the fundamentals you need to get started.

## What is Redis?

Redis (REmote DIctionary Server) is an open-source, in-memory data structure store, used as a database, cache, and message broker. It is known for its speed and versatility.

## Installation

- **On Windows:** Use [Memurai](https://www.memurai.com/) or [Redis for Windows](https://github.com/microsoftarchive/redis/releases)
- **On macOS:** `brew install redis`
- **On Linux:** `sudo apt-get install redis-server`
- **Docker:** `docker run --name redis -p 6379:6379 -d redis`

## Starting Redis

- Run `redis-server` to start the server
- Use `redis-cli` to open the command-line interface

## First Commands

```
SET mykey "Hello, Redis!"
GET mykey
DEL mykey
```

## Connecting from Node.js

Install the Redis client:

```
npm install redis
```

Example code:

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
await client.set("mykey", "Hello, Redis!");
const value = await client.get("mykey");
console.log(value); // Hello, Redis!
await client.quit();
```

Continue to the next sections to learn about each data type and command in detail!
