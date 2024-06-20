
"use client";

import { Card } from "flowbite-react";
import logo from "../Assets/nexia real logo.png";

export function Announcement() {
  return (
    <div>
      <img src={logo} alt="Nexia logo" className="pl-5 w-24 h-14 lg:m-4" />
      <Card
        className="max-w-sm m-7"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>

      <Card
        className="max-w-sm m-7"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>

      <Card
        className="max-w-sm m-7"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  ); 
}


export default Announcement
