import dbConnect from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password", placeholder: "Enter Password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await dbConnect("users").findOne({ email });

        if (user && password === user.password) {
          return user;
        }
        return null;
      },
    }),
  ],

  callbacks: {
    // This handles redirect after login
    async redirect({ url, baseUrl }) {
      // always redirect to /products after login
      return `${baseUrl}/products`;
    },
  },

  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
