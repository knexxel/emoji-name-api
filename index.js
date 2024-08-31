import { Hono } from 'hono'
import * as emojis from 'node-emoji'
const app = new Hono()

app.get('/', (ctx) => { 
    return ctx.html(`
    how to use it -
    <pre><a href =/emoji/🐲>${ctx.req.url}emoji/🐲</a></pre>`)
})

app.get('/emoji/:emoji',(ctx) => {
    return ctx.json({
        emoji: emojis.which(ctx.req.param('emoji'))
    })
})

export default app