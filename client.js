import { Redis } from 'ioredis';

const client = new Redis({
    host: 'localhost',
    port: 6379,
    password: 'mypassword'
});

client.set('key', 'value');

client.get('key',(err,value)=>{
    if(err){
        console.error(err);
    }else{
        console.log(value);
    }
});
export default client;

