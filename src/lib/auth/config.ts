import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import Kakao from 'next-auth/providers/kakao'

export const authConfig = {
    pages: {
        signIn: '/signup',
    },
    providers: [Kakao],
} as NextAuthConfig

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
})
