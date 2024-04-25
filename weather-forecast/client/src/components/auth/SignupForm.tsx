"use client";

import AuthForm from "@/components/auth/AuthForm";
import useSignUp from "@/hooks/useSignUp";

const SignupForm = () => {
  const signUpUser = useSignUp();

  return <AuthForm onSubmit={signUpUser} />;
};

export default SignupForm;
