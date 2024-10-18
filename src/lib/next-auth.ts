import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { googleClientId, googleClientSecret } from '@/config/env'

export const { signOut, auth, signIn, handlers } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  events: {
    signIn: ({ account }) => {
      console.log('signIn', account)
    },
    session: ({ session, token }) => {
      console.log('session', session)
    },
    createUser: ({ user }) => {
      console.log('createUser', user)
    },
    signOut: (message) => {
    },
  },
})
