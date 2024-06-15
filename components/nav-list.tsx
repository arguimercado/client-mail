"use client"

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { NavItems } from "@/models/commons/nav-items";

interface IProps {
   isCollapse?: boolean;
   links: NavItems[];
}

const NavList = ({ links, isCollapse }: IProps) => {
   return (
      <div className="group flex flex-col gap-4 py-2">
         <nav className="grid gap-1 px-2 ">
            {links.map((link, index) => (
               <Link
                  key={index}
                  href="#"
                  className={cn(
                     buttonVariants({ variant: link.variant, size: "sm" }),
                     link.variant === "default" &&
                        "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                     "justify-start"
                  )}
               >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.title}
                  {link.label && (
                     <span
                        className={cn(
                           "ml-auto",
                           link.variant === "default" &&
                              "text-background dark:text-white"
                        )}
                     >
                        {link.label}
                     </span>
                  )}
               </Link>
            ))}
         </nav>
      </div>
   );
};

export default NavList;
