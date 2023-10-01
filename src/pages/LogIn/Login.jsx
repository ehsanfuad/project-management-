import React from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import LogFrom from "./LogFrom";

function Login() {
  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <AuthHeader
          heading="ورود به حساب کاربری"
          paragraph="حساب کاربری ندارید؟ "
          linkName="ثبت نام"
          linkUrl="/signup"
        />
        <LogFrom />
      </div>
    </div>
  );
}

export default Login;
