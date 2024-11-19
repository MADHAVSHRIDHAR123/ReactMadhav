import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Counter from "./useState";
import reportWebVitals from "./reportWebVitals";
// import UseEffectComponent from "./useEffectPract";
import Login from "./login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffectComponent /> */}
    <Login
      title="Welcome Back!"
      description="Log in to your account to continue."
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
