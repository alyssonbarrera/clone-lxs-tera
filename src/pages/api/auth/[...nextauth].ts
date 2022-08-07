import { query } from "faunadb"
import { fauna } from "../../../services/faunadb"
import { GetCoursesByAcronymDocument } from "../../../graphql/generated"

import client from "../../../services/apollo"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "openid email profile"
                }
            }
        })
    ],
    callbacks: {
        async signIn({ profile }) {

            const { name, email } = profile

            try {

                const data = await client.query({
                    query: GetCoursesByAcronymDocument,
                    variables: {
                        acronym: "dfs"
                    }
                })

                await fauna.query(
                    query.If(
                        query.Not(
                            query.Exists(
                                query.Match(
                                    query.Index("user_by_email"),
                                    query.Casefold(email)
                                )
                            )
                        ),
                        query.Create(query.Collection("users"), {
                            data: {
                                name,
                                email,
                                courses: data.data.courses
                            }
                        }
                    ),
                    query.Get(
                        query.Match(
                            query.Index("user_by_email"),
                            query.Casefold(email)
                        )
                    )
                )
            )
            return true
        } catch {
            return false
        }
    }},
    secret: process.env.SECRET
})