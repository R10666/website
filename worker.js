const KV_NAMESPACE = "PINS_KV"; // Replace with your KV namespace binding

addEventListener('fetch', event => {
    const { request } = event;
    if (request.method === 'POST' && new URL(request.url).pathname === '/api/savePin') {
        return event.respondWith(handlePostRequest(request));
    } else if (request.method === 'GET' && new URL(request.url).pathname === '/api/getPins') {
        return event.respondWith(handleGetRequest());
    }
});

async function handlePostRequest(request) {
    const data = await request.json();
    const pins = await PINS_KV.get('pins', { type: 'json' }) || [];
    pins.push(data);
    await PINS_KV.put('pins', JSON.stringify(pins));
    return new Response('Pin saved', { status: 200 });
}

async function handleGetRequest() {
    const pins = await PINS_KV.get('pins', { type: 'json' }) || [];
    return new Response(JSON.stringify(pins), { status: 200 });
}
