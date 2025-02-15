import React from "react";

import Image from "next/image";
import image5 from "../Components/img/image 5.png";

const PageOne = () => {
  return (
    <div className="bg-white h-screen">
      {/* Контент для заголовка */}
      <div className="pl-10 pt-5 pb-10">
        <p className="font-bold text-2xl  text-black">Наші послуги</p>
        <p className="text-xl text-gray-700 ">
          Заповніть форму і наш менеджер зв’яжеться з вами
        </p>
      </div>

      {/* Контейнер для картинки і списку */}
      <div className="flex flex-row gap-10">
        {/* Картинка зліва */}
        <div className="flex justify-start">
          <Image
            src={image5}
            alt="logo2"
            className="w-1/1 h-auto"
            width={600} // Встановіть ширину
            height={300}
          />
        </div>

        {/* Список справа */}
        <div className="w-1/2 pl-10">
          <ul className="space-y-4 text-2xl text-gray-800">
            <li className="border-t-2 border-b-2 flex justify-between min-h-[70px] hover:bg-gray-100 hover:text-gray-900">
              <span className="text-xl font-bold mt-4">01. Розробка</span>
              <span className="ml-2">{" >"}</span>
            </li>
            <li className="border-b-2 flex justify-between min-h-[70px] hover:bg-gray-100 hover:text-gray-900">
              <span className="text-xl font-bold">02. Брендінг</span>
              <span className="ml-2">{" >"}</span>
            </li>
            <li className="border-b-2 flex justify-between min-h-[70px] hover:bg-gray-100 hover:text-gray-900">
              <span className="text-xl font-bold">03. Реклама</span>
              <span className="ml-2">{" >"}</span>
            </li>
            <li className="border-b-2 flex justify-between min-h-[70px] hover:bg-gray-100 hover:text-gray-900">
              <span className="text-xl font-bold">04. Обслуговування</span>
              <span className="ml-2">{" >"}</span>
            </li>
            <li className="border-b-2 flex justify-between min-h-[70px] hover:bg-gray-100 hover:text-gray-900">
              <span className="text-xl font-bold">05. Web аналітика</span>
              <span className="ml-2">{" >"}</span>
            </li>
            <li className="border-b-2 flex justify-between min-h-[70px] hover:bg-gray-100 hover:text-gray-900">
              <span className="text-xl font-bold">06. Google My Business</span>
              <span className="ml-2">{" >"}</span>
            </li>
            <li className="border-b-2 flex justify-between min-h-[70px] hover:bg-gray-100 hover:text-gray-900">
              <span className="text-xl font-bold">07. SEO</span>
              <span className="ml-2">{" >"}</span>
            </li>
            <li className="border-b-2 flex justify-between min-h-[70px] hover:bg-gray-100 hover:text-gray-900">
              <span className="text-xl font-bold">08. SMM</span>
              <span className="ml-2">{" >"}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
