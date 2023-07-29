import React from "react";
import { validateEmail, validatePassword } from "./helper";
import { APIService } from "../../Services/APIService";
import { useNavigate } from "react-router-dom";


const useLoginHook = () => {
  const [email, setEmail] = React.useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = React.useState({
    value: "",
    error: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail({ ...email, value });
    } else {
      setPassword({ ...password, value });
    }
  };

  const handleOnBlur = (e) => {
    const { name } = e.target;
    if (name === "email") {
      setEmail({
        ...email,
        error: validateEmail(email.value) ? "" : "Incorrect Email format",
      });
    } else {
      setPassword({
        ...password,
        error: validatePassword(password.value) ? "" : "Incorrect Password",
      });
    }
  };

  const handleSubmit = async () => {
    if (!validateEmail(email.value)) {
      setEmail({ ...email, error: "Incorrect Email format" });
      return;
    }
    if (!validatePassword(password.value)) {
      setPassword({ ...password, error: "Incorrect Password" });
      return;
    }
    setIsLoading(true);

    const apiService = new APIService();
    try {
      const token = await apiService.post("/api/auth/login", {
        email,
        password,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return {
    email,
    password,
    isLoading,
    handleOnChange,
    handleOnBlur,
    handleSubmit,
  };
};
export default useLoginHook;
