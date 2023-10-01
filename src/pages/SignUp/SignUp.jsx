import React from "react";
import SignUpForm from "./SignUpForm";
import AuthHeader from "../../components/AuthHeader/AuthHeader";

function SignUp() {
  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <AuthHeader
          heading="برای ایجاد حساب ثبت نام کنید"
          paragraph="قبلا ثبت نام کرده اید؟ "
          linkName="ورود"
          linkUrl="/login"
        />
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
