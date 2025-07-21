import client from './client.js';

async function init(){
    await client.expire("msg:6","Hey from Nodejs");
    const result = await client.get("msg:6");
    console.log(result);
}

init();



