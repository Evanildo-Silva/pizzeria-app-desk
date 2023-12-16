"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function LoginForm() {
  const loginFormRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function handleOnSubmit(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      // TODO adicionar toast para informar erro de preenchimento do formulário.
      console.log("🚀 ~ Todos os campos são obrigatórios");
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      return;
    }

    // TODO criar tela dashboard
    router.replace("/dashboard");
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
