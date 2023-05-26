import { Prisma } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'



export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async (request) => {
    const memories = await prisma.memory.findMany({
        orderBy: {
            createdAt: 'asc',
        },
    })
    
    return memories
  })
  app.get('/memories/:id', async (request) => {
    const users = await prisma.user.findMany()
    
    return users
  })

  app.put('/memories/:id', async (request) => {
    const users = await prisma.user.findMany()
    
    return users
  })

  app.delete('/memories/:id', async (request) => {
    const users = await prisma.user.findMany()
    
    return users
  })
}