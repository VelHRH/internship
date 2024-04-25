"use client";

import AuthForm from "@/components/auth/AuthForm";
import useLogin from "@/hooks/useLogin";

const LoginForm = () => {
  const loginUser = useLogin();

  return <AuthForm onSubmit={loginUser} />;
};

export default LoginForm;
