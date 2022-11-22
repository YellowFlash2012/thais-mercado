import {getRedirectResult} from "firebase/auth"
import { useEffect } from "react";
import Signup from "../components/Signup";

import { auth, newUser, signInWithGooglePopup, signInWithGoogleRedirect } from "../utils/firebase/firebase";

const Login = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();

        const userDocRef = await newUser(user);
    }

    // useEffect(() => {
    //     const getRed = async () => {
    //         const res = await getRedirectResult(auth);
            
    //         if (res) {
    //             const userDocRef = await newUser(res.user);
    //         }
    //     }

    //     getRed()
    // },[])
    
    
    return (
        <div>
            Login
            <button onClick={logGoogleUser}>Login with Google</button>
            <Signup/>
        </div>
    );
};
export default Login;
