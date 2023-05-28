import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import { BiLogIn } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

import FormField from "./FormField";
import { useAuth } from "../hooks/useAuth";
import { logInSchema, signUpSchema } from "../utils/validationScheme.js";

const AuthForm = ({ handleLogin, isLoginForm = false }) => {
  const [error, setError] = useState("");
  const { signUp, signIn } = useAuth();

  const schema = isLoginForm ? logInSchema : signUpSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setError("");
      if (isLoginForm) {
        await signIn(data.email, data.password);
      } else {
        await signUp(data.email, data.password);
      }
    } catch (error) {
      setError(error.message);
    }
    reset();
  };

  return (
    <div className="flex flex-col max-w-screen-sm p-5 rounded-2xl shadow-lg backdrop-blur bg-white/60 xs:w-full w-full">
      <h1 className="font-simpsons text-2xl font-bold text-[#002D74] mb-2 -order-4">
        {isLoginForm ? "Welcome back!" : "Welcome to SpringfieldChat!"}
      </h1>
      {error && <p>{error}</p>}
      <p className="text-xs mb-8 text-[#002D74] -order-3">
        {isLoginForm
          ? "Continue with Google or enter your details."
          : "Create an account to start the conversation"}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mb-6"
      >
        {!isLoginForm && (
          <FormField
            fieldName="name"
            label="Name"
            register={register}
            errors={errors}
          />
        )}

        <FormField
          fieldName="email"
          label="Email"
          register={register}
          errors={errors}
        />

        <FormField
          fieldName="password"
          label="Password"
          register={register}
          errors={errors}
          isConfident
        />

        {!isLoginForm && (
          <FormField
            fieldName="confirmPassword"
            label="Confirm Password"
            register={register}
            errors={errors}
            isConfident
          />
        )}

        <button
          type="submit"
          disabled={!isValid}
          className="flex justify-center items-center gap-x-2 py-2 bg-[#002D74] rounded-xl text-white hover:scale-105 duration-300"
        >
          {isLoginForm ? "Login" : "Sign Up"}
          <BiLogIn />
        </button>
      </form>
      <div
        className={`${
          !isLoginForm && "-order-1"
        } relative mb-4 text-center text-gray-400 
        before:content-[''] before:absolute before:left-0 before:top-2/4 before:h-px before:w-2/5 before:bg-gray-400 before:-translate-y-2/4
        after:content-[''] after:absolute after:right-0 after:top-2/4 after:h-px after:w-2/5 after:bg-gray-400 after:-translate-y-2/4`}
      >
        <span className="text-sm">OR</span>
      </div>
      <button
        className={`${
          !isLoginForm && "-order-2"
        } flex justify-center items-center gap-x-2 w-full py-2 mb-4 text-sm text-[#002D74] bg-white border rounded-xl hover:scale-105 duration-300`}
        onClick={handleLogin}
      >
        <FcGoogle size={18} />
        Login With Google
      </button>

      <div className="text-xs flex justify-between items-center text-[#002D74]">
        <p>
          {isLoginForm
            ? "Don't you have an account?"
            : "Already have an account?"}
        </p>
        <Link
          to={isLoginForm ? "/register" : "/login"}
          className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
        >
          {isLoginForm ? "Sign Up" : "Log in"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
