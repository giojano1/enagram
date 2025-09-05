import React from "react";
import { NavLinks } from "../../../../constants";
import { NavLink } from "react-router-dom";
import { cn } from "../../../../lib/utils";

export default function Navbar() {
  return (
    <ul className="pl-3 mt-10">
      {NavLinks.map((link) => (
        <li key={link.id} className="h-[52px]">
          <NavLink
            className={({ isActive }) =>
              cn(
                "text-body font-medium leading-[150%] h-full rounded-tl-full  rounded-bl-full flex items-center pl-2.5 gap-2.5 ",
                isActive ? "text-[#132450] bg-white" : "text-white"
              )
            }
            to={link.href}
          >
            {({ isActive }) => (
              <>
                <link.icon
                  width={24}
                  height={24}
                  className={cn(isActive ? "text-[#132450]" : "text-white")}
                />
                <span
                  className={cn("text-[14px]", isActive && "font-semibold")}
                >
                  {link.name}
                </span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
