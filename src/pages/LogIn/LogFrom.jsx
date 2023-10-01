import React, { useState } from "react";
import { loginFields } from "../../data/data";
import Input from "../../components/Input/Input";
import FormAction from "./FormAction";
import usePostData from "../../hooks/usePostData";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));
function LogFrom() {
  const [loginState, setLoginState] = useState(fieldsState);
  const { postData, isLoading, error, data } = usePostData();
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    const dataToSend = {
      identifier: loginState.email,
      password: loginState.password,
    };
    postData("/auth/local", dataToSend);
    // console.log(isLoading, error, data);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex flex-col items-center gap-3">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
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
      <FormAction handleSubmit={handleSubmit} text="ورود" action="submit" />
    </form>
  );
}

export default LogFrom;
