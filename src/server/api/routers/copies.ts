import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const copiesRouter = createTRPCRouter({
    getCopyboardCopies: publicProcedure
        .input(z.object({
            copyboardCode: z.string(),
        }))
        .query(({ input, ctx }) => {
            return ctx.prisma.copyboard.findUnique({
                where: {
                    code: input.copyboardCode,
                },
                include: {
                    copies: true,
                },
            })
        }),
    addCopy: publicProcedure
        .input(z.object({
            content: z.string(),
            copyboardCode: z.string()
        }))
        .mutation(({ input, ctx }) => {
            return ctx.prisma.copy.create({
                data: {
                    content: input.content,
                    copyboard: {
                        connect: {
                            code: input.copyboardCode
                        },
                    },
                },
            })
        })
})
