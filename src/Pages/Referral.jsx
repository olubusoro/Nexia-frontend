"use client";

import {Table, TextInput, Button} from "flowbite-react";
import logo from "../Assets/nexia real logo.png";

export function Referral() {
  return (
    <div className="overflow-x-auto p-5">
      <div className="fixed top-0 w-full bg-white z-10 p-5 flex justify-between items-center lg:relative lg:top-auto lg:p-0">
        <img src={logo} alt="Nexia logo" className="pl-5 w-24 h-14 lg:m-4" />
      </div>
      <div className="pt-24 lg:pt-0">
        <div>
          <p className="p-5 text-2xl font-bold">Referrals</p>
        </div>
        <Table className="min-w-full divide-y divide-gray-200">
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Username</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Plan</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Raphael Fulfilled
              </Table.Cell>
              <Table.Cell>@asdafr</Table.Cell>
              <Table.Cell>12/43/2023</Table.Cell>
              <Table.Cell>
                <p>Smart Bundle</p>
              </Table.Cell>
              <Table.Cell>$54456</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Raphael Fulfilled
              </Table.Cell>
              <Table.Cell>@87654567</Table.Cell>
              <Table.Cell>12/34/2012</Table.Cell>
              <Table.Cell>Smart Bundle</Table.Cell>
              <Table.Cell>$2345</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Raphael Fulfilled
              </Table.Cell>
              <Table.Cell>@hdsgds</Table.Cell>
              <Table.Cell>!@/34/2023</Table.Cell>
              <Table.Cell>Smart Bundle</Table.Cell>
              <Table.Cell>$2449</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <div className="flex flex-col sm:flex-row pt-20 gap-4 sm:gap-2">
          <TextInput
            className="w-1/2"
            placeholder="Referral link"
            type="text"
          />
          <Button className="bg-purple w-full sm:w-auto">
            Copy link
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Referral;
