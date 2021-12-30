
import initializeFirebase from "../Components/Login/Firebase/firebase.init";

import { useState } from "react";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    updateProfile,
    signOut,

} from "firebase/auth";
import { useEffect } from "react";

// Initialize Firebase App
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //
    const registerUser = (email, password, name) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                //send name to firebase after creation
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {

                    })
                    .catch((error) => {

                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ..
            });
    }
    //
    const logInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // ...
            })
            .catch((error) => {
                // const errorMessage = error.message;
            });
    }
    //GOOGLE login
    // const signInUsingGoogle = () => {

    //     //=====
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             console.log(result)
    //             const user = result.user;

    //         })
    //         .catch(error => {

    //         })
    // }

    //=========== Observed User state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                // User is signed out
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth]);

    //===========
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }

    return {
        user,
        registerUser,
        logInUser,
        // signInUsingGoogle,
        logOut
    }
};

export default useFirebase;