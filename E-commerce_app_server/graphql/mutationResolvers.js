const { UserInputError } = require('apollo-server')
const firebaseAuth = require('../firebase/firebaseConfig.js').firebaseAuth
const fireStore = require('../firebase/firebaseConfig.js').fireStore
const firebaseStorage = require('../firebase/firebaseConfig.js').firebaseStorage





// Mutation resolver.
let Mutation = {
    RegisterNewUser: async function ( parent, args, ctx, info) {
        try {
            let newUser = await firebaseAuth.createUserWithEmailAndPassword( args.registerNewUserInput.email, args.registerNewUserInput.password )
            let newlyAddedUser = {
                username: args.registerNewUserInput.username,
                email: newUser.user.email,
                createdAt: new Date().toLocaleDateString() + ' @ ' + new Date().toLocaleTimeString()
            }
            return newlyAddedUser
           
        }
        catch ( error ) {
            // console.log(`failed to create new user due to error: ${ error }`)
            throw new UserInputError(`failed to create new user due to error: ${ error }`)
        }

    }, // end of register new user.


    SignInUser: async function( parent, args, ctx, info ) {
        try {
            let signedInUser = await firebaseAuth.signInWithEmailAndPassword( args.email, args.password )
            return `user signed in with email ${ signedInUser.user.email }`

        }
        catch( error ) {
            throw new UserInputError(`failed to sign in user due to error: ${ error.code } : ${ error.message }`)
        }

    }, //end of sign in.


    Logout: async function( parent, args, ctx, info ) {
        try {
            let currentUser = await firebaseAuth.currentUser
            if( currentUser ) {
                firebaseAuth.signOut()
                return 'you have signed out successfully'    
            }
            else {
                return 'no user is currently logged in'
            }
        }
        catch( error ) {
            return `failed to sign out user due to error: ${ error.code } : ${ error.message }`
        }

    }, // end of logout


    VerifyUserViaEmail: async function( parent, args, ctx, info ) {
        try {
            let currentUser = await firebaseAuth.currentUser
            if( currentUser ){
                await currentUser.sendEmailVerification()
                return `verification link sent to ${ currentUser.email }`
                
            }
            else {
                return `failed to send verification link as there is no current user`
            }
        }
        catch ( error ) {
            return `failed to send verification link user due to error: ${ error.code } : ${ error.message }`
        }

    }, // end of verify user email.


    UpdateUserEmail: async function ( parent, args, ctx, info ) {
        try {
            let currentUser = await firebaseAuth.currentUser
            if ( currentUser ) {
                let oldEmail = currentUser.email
                await currentUser.updateEmail( args.newEmail )
                return `user email updated successfully from ${ oldEmail } to ${ args.newEmail }`
            }
            else {
                return 'there is no current user'
            }
        }
        catch ( error ) {
            throw new UserInputError(`failed to update user email due to error: ${ error.code }: ${ error.message }`)
        }

    }, //


    UpdateUserPassword: async function ( parent, args, ctx, info ) {
        try {
            let currentUser = await firebaseAuth.currentUser
            if ( currentUser ) {
                await currentUser.updatePassword( args.newPassword )
                return `user password updated successfully to ${ args.newPassword }`
            }
            else {
                return 'there is no current user'
            }
        }
        catch ( error ) {
            return `failed to update user password due to error: ${ error.code }: ${ error.message }`
        }

    }, // end of update password.


    UpdateUserProfile: async function (parent, args, ctx, info) {
        try {
            let currentUser = await firebaseAuth.currentUser
            if( currentUser ) {
                await currentUser.updateProfile({
                    displayName: args.displayName,
                    photoUrl: args.photoUrl
                })
                return `user profile updated successfully.....`
            }
            else {
                return 'failed to update user profile'
            }

        }
        catch ( error ) {
            throw new UserInputError(`failed to update user password due to error: ${ error.code }: ${ error.message }`)
        }

    }





}


module.exports = Mutation