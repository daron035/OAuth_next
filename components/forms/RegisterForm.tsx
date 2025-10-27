"use client";

import { useRegister } from "@/hooks";
import { Form } from "@/components/forms";

export default function RegisterForm() {
  const { username, mail, password, isLoading, onChange, onSubmit } =
    useRegister();

  const config = [
    {
      labelText: "Username",
      labelId: "username",
      type: "text",
      value: username,
      required: true,
    },
    {
      labelText: "Email address",
      labelId: "mail",
      type: "email",
      value: mail,
      required: true,
    },
    {
      labelText: "Password",
      labelId: "password",
      type: "password",
      value: password,
      link: {
        linkText: "Forgot password?",
        linkUrl: "#",
      },
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Sign up"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
