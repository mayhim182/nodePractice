import {serve} from 'bun';

serve({
    fetch(request){
        const url = new URL(request.url);
        if (url.pathname == '/') {
            return new Response('Hello Ice Tea',{status:201})
        }
    },
        port:3000,
        hostname:'127.0.0.1'
})