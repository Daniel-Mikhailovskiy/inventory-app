import {
    LucideIcon,
  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";
import { Icon } from 'lucide-react';
import { burger } from '@lucide/lab';
  
  interface SidebarLinksProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
  }
  
  const SidebarLink = ({ href, icon, label, isCollapsed }: SidebarLinksProps) => {
  
    const pathname = usePathname()
    const isActive = pathname === href || (pathname === '/' && href === "/dashboard")
  
    return (
      <Link href={href}>
        <div
          className={`cursor-pointer flex items-center ${
            isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          }
          hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
            isActive ? "bg-blue-200 text-white" : ""
          }
        }`}
        >
          <Icon iconNode={burger} className="w-6 h-6 !text-gray-700" />
          <span
            className={`${
              isCollapsed ? "hidden" : "block"
            } font-medium text-gray-700`}
          >
            {label}
          </span>
        </div>
      </Link>
    )
  }
  
export default SidebarLink