"use client";
import CreateTripForm from "@/components/CreateTripForm";
import "./globals.css";
import { DiAtom } from "react-icons/di";
import { usePathname, useRouter } from "next/navigation";
import Navbar, { links } from "../components/Navbar";

export default function Home() {
  const currentPath = usePathname();

  return (
    <main className="md:flex w-screen h-screen md:overflow-hidden">
      <Navbar />
      <div className="sidebar basis-[15%] bg-blue-600 px-3 py-5 hidden md:block">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-semibold text-white font"
        >
          <DiAtom className="w-8 h-8" />
          Dispatcher.ca
        </a>
        <div className="flex flex-col mt-10 text-white ">
          {links.map((item) => (
            <a
              href={item.url}
              key={item.url}
              className={`py-2 px-3 ${
                currentPath === item.url ? "bg-blue-800" : "" // Conditional bg color
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className=" md:basis-[85%] overflow-auto">
        <CreateTripForm />
      </div>
    </main>
  );
}
