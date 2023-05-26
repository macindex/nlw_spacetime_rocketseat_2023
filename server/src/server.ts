import 'dotenv/config'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
// const nome: string = 'Claudio Marcio'

// console.log(nome)

const app = fastify()
app.register(cors, {
    origin: true,
})


app.register(authRoutes)
app.register(memoriesRoutes)

const prisma = new PrismaClient()

app.get('/users', async () => {
    const users = await prisma.user.findMany()

    return users
})

// app.get('/hello', () => {
//     return 'Helo world!'
// })
app.listen({
    port: 3333,
}).then(()=>{
    console.log('HTTP server running on http://localhost:3333')
})
