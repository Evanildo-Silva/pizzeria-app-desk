"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import logoImg from "../../../../public/logo-pizzaria.png";

export default function Header() {
  return (
    <header className="h-20">
      <div className="max-w-[70rem] h-20 mx-auto px-8 flex items-center justify-between">
        <Link href="/dashboard">
          <Image src={logoImg} alt={"Logo project pizzaria"} height={60} />
        </Link>
        <nav className="flex items-center gap-x-8">
          <Link className="hover:text-btn-secondary" href="/category">
            Categoria
          </Link>
          <Link className="hover:text-btn-secondary" href="/product">
            Cardápio
          </Link>

          <button
            className="hover:text-btn-secondary hover:scale-125"
            onClick={() => signOut}
          >
            <FiLogOut size={22} />
          </button>
        </nav>
      </div>
    </header>
  );
}
