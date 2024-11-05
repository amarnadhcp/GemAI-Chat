import React from "react";
import "./signUpPage.css";
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <SignUp path="/sign-up" signInURl="/sign-in" />
    </div>
  );
}

export default SignUpPage;
