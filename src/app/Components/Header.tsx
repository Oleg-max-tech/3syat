"use client";

import React from "react";
import Link from "next/link"; // Використовуємо Link з Next.js

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-yellow-400 text-white p-4 shadow-lg">
      <img
        src="../Components/img/logo.png"
        alt="logo company"
        className="w-24 h-auto"
      />
      <div className="flex gap-6 text-lg font-bold">
        <Link href="/page1" className="hover:text-yellow-600">
          Послуги
        </Link>
        <Link href="/page2" className="hover:text-yellow-600">
          Розробка
        </Link>
        <Link href="/page3" className="hover:text-yellow-600">
          Корпоративний сайт
        </Link>
      </div>
    </div>
  );
};

export default Header;
