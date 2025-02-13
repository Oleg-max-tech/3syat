import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-1 h-screen bg-white">
      <h1 className="text-3xl font-bold text-black ">
        Ласкаво просимо на головну сторінку!
      </h1>
      <p className="text-lg  text-black">
        Оберіть одну з послуг для переходу на відповідну сторінку.
      </p>
    </div>
  );
};

export default HomePage;
