import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/logo-pizzaria.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image src={logoImg} alt={"Logo project pizzaria"} />
      <div className="w-[37.5rem] sm:w-[90%] mt-8 flex flex-col items-center justify-center py-8 px-6">
        <LoginForm />
        <Link className="mt-4 hover:cursor-pointer" href={"/signup"}>
          Não possui conta? cadastre-se
        </Link>
      </div>
    </main>
  );
}
