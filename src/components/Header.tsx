import Image from "next/image";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black">
      <div className="flex row gap-2">
        <Image
          src="/human-resources.svg"
          alt="HR-logo"
          width={50}
          height={50}
          priority
          className="rounded-xl"
        />
        <h2 className="self-center text-xl">HR-APP</h2>
      </div>
      <Menu />
    </header>
  );
}
