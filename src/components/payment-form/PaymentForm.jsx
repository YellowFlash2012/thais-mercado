import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";

import {toast} from "react-toastify"
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const { cartTotal } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true)

        const res = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify({amount:cartTotal})
        }).then(res => res.json())
        
        console.log(res);

        const { paymentIntent: { client_secret } } = res;

        const paymentRes = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser?currentUser.displayName: "Guest"
                }
            }
        });

        setIsProcessingPayment(false)

        if (paymentRes.error) {
            toast.error(paymentRes.error);
        } else {
            if (paymentRes.paymentIntent.status==="succeeded") {
                toast.success("Payment was successful!")
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />

                <Button disabled={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
                    Pay Now
                </Button>
            </FormContainer>
        </PaymentFormContainer>
    );
};
export default PaymentForm;
