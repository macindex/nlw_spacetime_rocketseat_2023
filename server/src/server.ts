import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
    // origin: ['http://localhost:3000', 'http://localhost:3000'], //All url's from Frontend can access the backend
    origin: true,
})

app.register(memoriesRoutes)
app.register(authRoutes)

app.listen({
    port: 3333,
}).then(()=>{
    console.log('HTTP server running on http://localhost:3333')
})
