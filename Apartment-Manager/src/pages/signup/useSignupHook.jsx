import React from "react";
import { validateEmail, validatePassword } from "../../utils/validator";
import { validateAge, validateConfirmPassword } from "./helper";

const useSignupHook = () => {
  const [email, setEmail] = React.useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = React.useState({
    value: "",
    error: "",
  });
  const [age, setAge] = React.useState({
    value: "",
    error: "",
  });
  const [confirmPassword, setConfirmPassword] = React.useState({
    value: "",
    error: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail({ ...email, value });
    } else if (name === "password") {
      setPassword({ ...password, value });
    } else if (name === "age") {
      setAge({ ...age, value });
    } else if (name === "confirmPassword") {
      setConfirmPassword({ ...confirmPassword, value });
    }
  };

  const handleOnBlur = (e) => {
    const { name } = e.target;
    if (name === "email") {
      setEmail({
        ...email,
        error: validateEmail(email.value) ? "" : "Incorrect Email format",
      });
    } else if (name === "password") {
      setPassword({
        ...password,
        error: validatePassword(password.value)
          ? ""
          : "The Password must be at least 8 characters long, contain at least one number, one special character and have a mixture of uppercase and lowercase letters.",
      });
    } else if (name === "age") {
      setAge({
        ...age,
        error: validateAge(age.value) ? "" : "Invalid Age",
      });
    } else if (name === "confirmPassword") {
      setConfirmPassword({
        ...confirmPassword,
        error: validateConfirmPassword(confirmPassword.value, password.value)
          ? ""
          : "Passwords do not match",
      });
    }

  };

  return {
    email,
    age,
    password,
    confirmPassword,
    handleOnChange,
    handleOnBlur,
  };
};
export default useSignupHook;
