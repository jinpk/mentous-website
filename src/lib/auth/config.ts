import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { createUser, getUser, User } from '@/lib/user'

export const authConfig = {
    pages: {
        signIn: '/signup',
    },
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub,
                },
            }
        },
    },
    providers: [
        Credentials({
            credentials: {
                displayName: {},
                phoneNumber: {},
            },
            authorize: async (credentials) => {
                let user: User | null = null

                user = await getUser({
                    phoneNumber: credentials.phoneNumber as string,
                })

                if (!user) {
                    user = await createUser({
                        phoneNumber: credentials.phoneNumber as string,
                        displayName: credentials.displayName as string,
                    })
                }

                return {
                    name: user.displayName,
                    id: user.id,
                }
            },
        }),
    ],
} as NextAuthConfig

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
})
