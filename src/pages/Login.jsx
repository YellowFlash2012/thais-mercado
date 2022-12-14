import {getRedirectResult} from "firebase/auth"
import { useState } from "react";
import {toast} from "react-toastify"

import Button, {BUTTON_TYPE_CLASSES} from "../components/button/Button";
import FormInput from "../components/form-input/FormInput";
import Signup from "../components/Signup";

import { auth, LoginWithEmailPw, newUser, signInWithGooglePopup, signInWithGoogleRedirect } from "../utils/firebase/firebase";

import "../components/signup.scss"


const defaultFormFields = {
    email: "",
    pw: "",
};

const Login = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, pw } = formFields;

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();

        toast.success(`Welcome back, ${user.displayName}`);
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

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormFields({ ...formFields, [id]: value });
    };
    
    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const {user} = await LoginWithEmailPw(email, pw);

            toast.success(`Welcome back, ${user.displayName}`)
            
            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                alert("User with that email doesn't exist");

                return;
            }

            if (error.code === "auth/wrong-password") {
                alert("Invalid credentials");
            }

            console.error(error);
        }
    }
    
    return (
        <div className="auth-container">
            <div className="sign-up-container">
                <h2>Already have an account?</h2>
                <span>Login with email and password</span>

                <form action="" onSubmit={submitHandler}>
                    <FormInput
                        label="Email"
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        id="pw"
                        required
                        value={pw}
                        onChange={handleChange}
                    />

                    <div className="buttons-container">
                        <Button>Login</Button>

                        <Button
                            type="button"
                            onClick={logGoogleUser}
                            buttonType={BUTTON_TYPE_CLASSES.google}
                        >
                            Google Login
                        </Button>
                    </div>
                </form>
            </div>
            <Signup />
        </div>
    );
};
export default Login;
