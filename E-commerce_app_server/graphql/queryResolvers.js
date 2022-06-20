const firebaseAuth = require('../firebase/firebaseConfig.js').firebaseAuth
const fireStore = require('../firebase/firebaseConfig.js').fireStore
const firebaseStorage = require('../firebase/firebaseConfig.js').firebaseStorage
const { UserInputError } = require('apollo-server')



// Query resolver
let Query = {
    GetCurrentLoggedInUser: async function ( parent, args, ctx, info ) {
        try{
            let currentUser = await firebaseAuth.currentUser
            if( currentUser ) {
                return `you are currently logged in as ${ currentUser.email }`
            }
            else {
                return 'no user is logged in currently'
            }
        }
        catch ( error ) {
            // return `failed to get details of logged in user due to error. ${ error.code }: ${ error.message }`
            throw new UserInputError(`failed to get details of logged in user due to error. ${ error.code }: ${ error.message }`)
        }

    }, // end of get current user.


    CheckUserVerifiedStatus: async function( parent, args, ctx, info ) {
        try {
            let currentUser = await firebaseAuth.currentUser
            if( currentUser ) {
                if( currentUser.emailVerified === true ) {
                    return 'user is verified....'
                }
                else {
                    return 'user is currently not verified....'
                }
            } 
            else {
                return 'there is no current user...'
            }
        }
        catch( error ) {
            return `failed to check user verified status due to error: ${ error.code }: ${ error.message }`
        }

    }, // end of check verified status.


    FetchCurrentUserDetails: async function( parent, args, ctx, info ) {
        try {
            let currentUser = await firebaseAuth.currentUser
            if( currentUser ) {
                let currentUserDetails = {
                    username: currentUser.email,
                    email: currentUser.email,
                    profilePhotoUrl: currentUser.photoUrl,
                    createdAt: new Date().toLocaleTimeString()
                }
                return currentUserDetails
            }
            else {
                return null
            }
        }
        catch ( error ) {
            return `failed to fetch user details due to error: ${ error.code }: ${ error.message }`
        }

    }

 

  
}




module.exports = Query