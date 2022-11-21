import { newUser, signInWithGooglePopup } from "../utils/firebase/firebase";

const Login = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();

        const userDocRef = await newUser(user);
    }
    return (
        <div>
            Login
            <button onClick={logGoogleUser}>Login with Google</button>
        </div>
    );
};
export default Login;
