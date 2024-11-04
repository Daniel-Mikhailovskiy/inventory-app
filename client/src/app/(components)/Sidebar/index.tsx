'use client'

import {
    Archive,
    CircleDollarSign,
    Clipboard,
    Layout,
    LucideIcon,
    Menu,
    SlidersHorizontal,
    User,
  } from "lucide-react";

import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";


const Sidebar = () => {
    return (
        <div>
            {/* TOP LOGO */}
            <div
                className="flex gap-3 justify-between md:justify-normal items-center pt-8 px-5 px-8"
            >
                <div>Image</div>
                <h1
                    className="font-extrabold text-2xl"
                >
                    EDSTOCK
                </h1>

                <button
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                    onClick={() => { }}
                >
                    <Menu className="w-4 h-4" />
                </button>
            </div>

            {/* LINKS */}
            <div className="flex-grow mt-8">
            </div>

            {/* FOOTER */}
            <div className="mb-10">
                <p className="text-center text-xs text-gray-500">&copy; 2024 DanStock</p>
            </div>
        </div>
    );
};

export default Sidebar;