import client from './client.js';

async function init(){
    await client.set("msg:6","Hey from Nodejs");
    const result = await client.get("msg:6");
    console.log(result);
}

init();



