// the dependencies.
const { ApolloServer, gql } =  require('apollo-server')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
// import { firebaseAuth, fireStore, firebaseStorage } from './firebase/firebaseConfig.js'


// relative imports.
const Query = require('./graphql/queryResolvers.js')
const Mutation = require('./graphql/mutationResolvers.js')



// the type definitions.
const typeDefs = gql `


    # custom types.
    type User {
        username: String!
        email: String!
        createdAt: String!
        profilePhotoUrl: String!
    
    }


    # inputs
    input registerNewUserInputType {
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
    }



    # Queries.
    type Query {
        FetchAllUsers: [User]
        FetchParticularUser( email: String! ): User
        GetCurrentLoggedInUser: String!
        CheckUserVerifiedStatus: String!
        FetchCurrentUserDetails: User

    }


    # Mutations.
    type Mutation {
        RegisterNewUser( registerNewUserInput: registerNewUserInputType ): User!
        SignInUser( email: String!, password: String! ): String!
        Logout: String!
        VerifyUserViaEmail: String!
        UpdateUserEmail( newEmail: String! ): String!
        UpdateUserPassword( newPassword: String! ): String!
        UpdateUserProfile( displayName: String!, photoUrl: String! ): String!

    }


`


// resolvers.
const resolvers = {
    Query,
    Mutation

}


// initializing the graphql server.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    introspection: true,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    debug: true // include stacktrace while in development.
})


server.listen({ port: process.env.PORT || 8000 })
.then( result => console.log(`graphql server running on port ${ result.url }........`))
.catch( error => console.log(`failed to start graphql server due to error: ${ error }`))




/* git hub repo
https://github.com/larryking01/Restaurant_Food_Delivery.git 
*/

