import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET
})