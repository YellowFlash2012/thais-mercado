import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserPovider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/product.context";

import "./index.css";
import { CartProvider } from "./contexts/cart.context";
import { stripePromise } from "./utils/stripe/stripe";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <UserPovider>
                <CategoriesProvider>
                    <CartProvider>
                        <Elements stripe={stripePromise}>
                            <App />
                        </Elements>
                    </CartProvider>
                </CategoriesProvider>
            </UserPovider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
