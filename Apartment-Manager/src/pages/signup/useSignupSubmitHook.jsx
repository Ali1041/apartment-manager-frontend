import React from "react";
import { useNavigate } from "react-router-dom";

import { APIService } from "../../Services/APIService";

const useSignupSubmitHook = (email, password, age) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState({
    value: "",
    error: false,
  });

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    if (email.error || password.error || age.error) {
      setMessage({
        value: "Please fill all the fields correctly",
        error: true,
      });
      return;
    }
    setIsLoading(true);
    const apiService = new APIService();
    try {
      await apiService.post("/api/auth/signup", {
        email: email.value,
        password: password.value,
        age: age.value,
      });
      setMessage({
        value: "Signup Successful",
        error: false,
      });
      navigate("/login");
    } catch (error) {
      setMessage({
        value: "Something went wrong. Please Try again later!!",
        error: true,
      });
      setTimeout(() => {
        setIsLoading(false);
        setMessage({
          value: "",
          error: false,
        });
      }, 3000);
    }
  };

  return {
    isLoading,
    message,
    handleOnSubmit,
  };
};
export default useSignupSubmitHook;
