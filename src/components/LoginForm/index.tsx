"use client";

import { useRef } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function LoginForm() {
  const loginFormRef = useRef<HTMLFormElement>(null);

  async function handleOnSubmit(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      // TODO adicionar toast para informar erro de preenchimento do formulário.
      console.log("🚀 ~ Todos os campos são obrigatórios");
      return;
    }

    // TODO lógica para realizar o login do usuário.
    console.log(
      "🚀 ~ file: index.tsx:12 ~ handleOnSubmit ~ email ~ password:",
      email,
      " - ",
      password
    );
  }

  return (
    <form
      className="w-[90%] flex flex-col"
      action={handleOnSubmit}
      ref={loginFormRef}
    >
      <Input type="email" name="email" placeholder="Digite seu email" />
      <Input type="password" name="password" placeholder="Digite sua senha" />
      <Button type="submit" secondary loading={false} disabled>
        Acessar
      </Button>
    </form>
  );
}
