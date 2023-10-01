import React, { useState } from "react";
import { signupFields } from "../../data/data";
import Input from "../../components/Input/Input";
import FormAction from "../LogIn/FormAction";
import usePostData from "../../hooks/usePostData";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function SignUpForm() {
  const [signupState, setSignupState] = useState(fieldsState);
  const { postData, isLoading, error, data } = usePostData();
  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    console.log(signupState);
    postData("/auth/local/register", signupState);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex flex-col items-center gap-3">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormAction handleSubmit={handleSubmit} text="ثبت نام" action="submit" />
    </form>
  );
}

export default SignUpForm;
