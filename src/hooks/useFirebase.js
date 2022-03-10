import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";


firebaseAuthentication()



const useFirebase = () => {
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // signin with Google
    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            });

    }
    return {
        singInUsingGoogle
    }
};

export default useFirebase;