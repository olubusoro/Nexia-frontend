"use client";

import { Card } from "flowbite-react";
import logo from "../Assets/nexia real logo.png";
// import card from "../Assets/nexia.jpg"

export function Task() {
  return (
    <div>
      <div className="fixed top-0 right-0 w-full bg-white z-10 p-5 flex justify-between items-center lg:relative lg:top-auto lg:p-0">
        <img src={logo} alt="Nexia logo" className="pl-5 w-24 h-14 lg:m-4" />
      </div>
      <div className="lg:pt-0 sm:pt-24">
        <h1 className="border-b-black text-4xl underline font-bold sm:p-2">
          Nexia Adverts
        </h1>
        <div className="sm:p-2 lg:pt-4">
          <p>sat 15th jun, 2024</p>
          <Card
            href="./share"
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-7 bg-gray-400"
          >
            {/* <img src={card} className="w-16 h-8" alt="" /> */}
            <p>Nexia Adverts </p>
            <p>posted 3hrs ago</p>
          </Card>
          <p>Sat 15th june, 2024</p>
          <Card
            href="./share"
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-7 bg-gray-400"
          >
            {/* <img src={card} className=" w-16 h-8" alt="" /> */}
            <p>Nexia Adverts</p>
            <p>Posted 3hrs ago</p>
          </Card>
          <p>Sat 15th jun,2024</p>
          <Card
            href="./share"
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-7 bg-gray-400"
          >
            {/* <img src={card} className=" w-16 h-8" alt="" /> */}
            <p>Nexia Adverts</p>
            <p>Posted 3hrs ago</p>
          </Card>
          <p>Sat 15th jun, 2024</p>
          <Card
            href="./share"
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-7 bg-gray-400"
          >
            {/* <img src={card} className=" w-16 h-8" alt="" /> */}
            <p>Nexia Adverts</p>
            <p>Posted 3hrs ago</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Task;
