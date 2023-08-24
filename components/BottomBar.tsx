"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <footer className="bottombar">
      <ul className="bottombar_container">
        {sidebarLinks.map(({ imgURL, route, label }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;
          return (
            <li key={label}>
              <Link
                href={route}
                className={`bottombar_link ${isActive && "bg-primary-500"}`}
              >
                <Image src={imgURL} alt={label} width={24} height={24} />
                <p className="text-subtle-medium text-light-1 max-sm:hidden">
                  {label.split(/\s+/)[0]}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default BottomBar;
