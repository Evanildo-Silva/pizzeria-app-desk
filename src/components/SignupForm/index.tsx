"use client";

import { fetchWrapper } from "@/services/api";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function SignupForm() {
  const signupForm = useRef(null);
  const router = useRouter();

  async function handleOnSubmit(formData: FormData) {
    debugger;
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      // TODO adicionar toast para informar erro de preenchimento do formulário.
      return;
    }

    await fetchWrapper("users/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => {
        // TODO adicionar toast para informar sucesso no cadastro de usuário.
        router.replace("/");
      })
      .catch((error) => {
        // TODO adicionar toast para informar erro no cadastro de usuário.
      });
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
