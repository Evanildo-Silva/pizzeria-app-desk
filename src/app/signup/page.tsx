import SignupForm from "@/components/SignupForm";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo-pizzaria.png";

export default function Signup() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image src={logoImg} alt={"Logo project pizzaria"} />
      <div className="w-[37.5rem] sm:w-[90%] mt-8 flex flex-col items-center justify-center py-8 px-6">
        <SignupForm />
        <Link className="mt-4 hover:cursor-pointer" href={"/"}>
          Já possuo uma conta
        </Link>
      </div>
    </main>
  );
}
