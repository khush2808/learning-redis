# Redis Pub/Sub

Redis Pub/Sub (Publish/Subscribe) is a messaging paradigm where senders (publishers) send messages to channels, and receivers (subscribers) listen for messages on those channels.

## Common Pub/Sub Commands

- `PUBLISH channel message` — Publish a message to a channel
- `SUBSCRIBE channel [channel ...]` — Listen for messages on one or more channels
- `UNSUBSCRIBE [channel ...]` — Stop listening to channels

## Examples in Node.js

```js
import { createClient } from "redis";
const publisher = createClient();
const subscriber = createClient();
await publisher.connect();
await subscriber.connect();

subscriber.subscribe("news", (message) => {
  console.log(`Received: ${message}`);
});

await publisher.publish("news", "Hello, subscribers!");

// Clean up after a short delay
setTimeout(async () => {
  await publisher.quit();
  await subscriber.quit();
}, 1000);
```

See the official [Redis Pub/Sub Commands](https://redis.io/commands/?group=pubsub) for more details.
