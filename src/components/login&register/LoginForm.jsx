import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../hooks/useAuthContext";
import InputField from "./InputField";

const LoginForm = () => {
  const { loginWithEmailAndPassword } = useAuthContext();
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [errorState, setErrorState] = useState({
    emailError: "",
    loginError: "",
  });
  const navigate = useNavigate();

  const handleUserInputOnChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      const emailInputValue = e.target.value;
      const emailRegEx =
        /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
      if (!emailRegEx.test(emailInputValue)) {
        setErrorState({
          ...errorState,
          emailError: "Please provide a valid email.",
        });
        return;
      }
    }
    setErrorState({
      ...errorState,
      emailError: "",
    });
  };

  const handleLoginOnSubmit = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(userInput.email, userInput.password)
      .then((result) => {
        if (result) {
          toast.success("login successful");
          navigate("/");
        }
      })
      .catch((err) => toast.error(err.code));
  };
  return (
    <>
      <form
        noValidate=""
        action=""
        className="space-y-6"
        onSubmit={handleLoginOnSubmit}
      >
        <div className="space-y-1 text-sm">
          <InputField label={"Email"} error={errorState.emailError}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              onChange={handleUserInputOnChange}
            />
          </InputField>
        </div>
        <div className="space-y-1 text-sm">
          <InputField
            label={"Password"}
            error={errorState.passwordError}
            passwordToggle={passwordToggle}
            setPasswordToggle={setPasswordToggle}
          >
            <input
              type={!passwordToggle ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              onChange={handleUserInputOnChange}
            />
          </InputField>
        </div>
        <button
          className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
