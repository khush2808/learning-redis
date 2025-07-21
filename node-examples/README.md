# Node.js Redis Examples

This section provides a quick reference for using Redis with Node.js, with links to detailed examples for each data type and feature.

## Setup

Install the Redis client for Node.js:

```
npm install redis
```

## Connecting to Redis

```js
import { createClient } from "redis";
const client = createClient();
await client.connect();
// ... use Redis commands ...
await client.quit();
```

## Quick Links to Examples

- [Strings](../strings/README.md)
- [Lists](../lists/README.md)
- [Sets](../sets/README.md)
- [Hashes](../hashes/README.md)
- [Sorted Sets](../sorted-sets/README.md)
- [Pub/Sub](../pubsub/README.md)
- [Transactions](../transactions/README.md)
- [Streams](../streams/README.md)
- [Scripting](../scripts/README.md)

Each section contains detailed Node.js code samples and explanations for the corresponding Redis feature.
