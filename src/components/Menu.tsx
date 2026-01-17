"use client";

import { MenuItem } from "./MenuItem";
import { MENU } from "./menu.data";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 ">
      {MENU.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          menuItem={menuItem}
          isActive={pathname === menuItem.href}
        />
      ))}
    </nav>
  );
}
