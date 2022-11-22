import { useState } from "react";

import {updateProfile} from 'firebase/auth'


import { newUser, newUserWithEmailPw } from "../utils/firebase/firebase";

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
        <div>
            <h1>Sign up with email and password</h1>

            <form action="" onSubmit={submitHandler}>
                <label htmlFor="displayName">Username</label>
                <input
                    type="text"
                    id="displayName"
                    required
                    value={displayName}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={handleChange}
                />

                <label htmlFor="pw">Password</label>
                <input
                    type="password"
                    id="pw"
                    required
                    value={pw}
                    onChange={handleChange}
                />

                <label htmlFor="cpw">Confirm Password</label>
                <input
                    type="password"
                    id="cpw"
                    required
                    value={cpw}
                    onChange={handleChange}
                />

                <button>Sign Up</button>
            </form>
        </div>
    );
};
export default Signup;
