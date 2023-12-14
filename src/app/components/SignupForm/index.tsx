"use client";

import { useRef } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function SignupForm() {
  const signupForm = useRef(null);

  async function handleOnSubmit(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      // TODO adicionar toast para informar erro de preenchimento do formulário.
      console.log("🚀 ~ Todos os campos são obrigatórios");
      return;
    }

    // TODO lógica para realizar o login do usuário.
    console.log(
      "🚀 ~ file: index.tsx:12 ~ handleOnSubmit ~ email ~ password:",
      name,
      " - ",
      email,
      " - ",
      password
    );
  }
  return (
    <form
      className="w-[90%] flex flex-col"
      action={handleOnSubmit}
      ref={signupForm}
    >
      <Input type="text" name="name" placeholder="Nome da empresa" />
      <Input type="email" name="email" placeholder="Digite seu email" />
      <Input type="password" name="password" placeholder="Digite sua senha" />
      <Button type="submit" secondary loading={false}>
        Cadastrar
      </Button>
    </form>
  );
}
