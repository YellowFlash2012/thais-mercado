import { useState } from "react";

import {updateProfile} from 'firebase/auth'
import {toast} from "react-toastify"

import { newUser, newUserWithEmailPw } from "../utils/firebase/firebase";

import FormInput from "./form-input/FormInput";
import Button from "./button/Button";

import "./signup.scss"


const defaultFormFields = {
    displayName:"",
    email: "",
    pw: "",
    cpw:""
}

const Signup = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);


    const { displayName, email, pw, cpw } = formFields;


    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormFields({...formFields, [id]: value});
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        if (pw !== cpw) {
            alert("Passwords don't match!")
            return;
        }

        try {
            const { user } = await newUserWithEmailPw(email, pw);
            
            console.log(user);

            await updateProfile(user, { displayName: displayName });
    
            await newUser(user, { displayName });

            toast.success(`Welcome, ${user.displayName}`);

            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("User with that email already exists");

                return;
            }

            if (error.code === "auth/weak-password") {
                alert("Password should be at least 6 characters")
            }

            console.error(error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>

            <form action="" onSubmit={submitHandler}>
                <FormInput
                    label="Username"
                    type="text"
                    id="displayName"
                    required
                    value={displayName}
                    onChange={handleChange}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    id="cpw"
                    required
                    value={cpw}
                    onChange={handleChange}
                />

                <Button>Sign up</Button>
            </form>
        </div>
    );
};
export default Signup;
