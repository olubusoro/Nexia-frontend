"use client";

import { Card } from "flowbite-react";
import logo from "../Assets/nexia real logo.png"
// import card from "../Assets/nexia.jpg"

export function Task() {
  return (
    <div className="">
      <img src={logo} alt="Nexia logo" className=" w-24 h-20 p-5" />
      <h1 className="border-b-black text-4xl underline font-bold p-5">Nexia Adverts</h1>
      <div className="p-5">
        <p>sat 15th jun, 2024</p>
        <Card href="./share" className="max-w-sm w-96 h-26 mb-7 bg-gray-400">
          {/* <img src={card} className=" w-16 h-8" alt="" /> */}
          <p>Nexia Adverts </p>
          <p>posted 3hrs ago</p>
        </Card>
        <p>Sat 15th june, 2024</p>
        <Card href="./share" className="max-w-sm w-96 h-26 mb-7 bg-gray-400">
          {/* <img src={card} className=" w-16 h-8" alt="" /> */}
          <p>Nexia Adverts</p>
          <p>Posted 3hrs ago</p>
        </Card>
        <p>Sat 15th jun,2024</p>
        <Card href="./share" className="max-w-sm w-96 h-26 mb-7 bg-gray-400">
          {/* <img src={card} className=" w-16 h-8" alt="" /> */}
          <p>Nexia Adverts</p>
          <p>Posted 3hrs ago</p>
        </Card>
        <p>Sat 15th jun, 2024</p>
        <Card href="./share" className="max-w-sm w-96 h-26 mb-7 bg-gray-400">
          {/* <img src={card} className=" w-16 h-8" alt="" /> */}
          <p>Nexia Adverts</p>
          <p>Posted 3hrs ago</p>
        </Card>
      </div>
    </div>
  );
}

export default Task;
