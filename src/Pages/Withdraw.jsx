"use client";

import {Label, Button, TextInput, Table} from "flowbite-react";
import logo from "../Assets/nexia real logo.png";

export function Withdraw() {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-40">
      <div className="fixed top-0 right-0 w-full bg-white z-10 p-5 flex justify-between items-center lg:relative lg:top-auto lg:p-0">
        <img src={logo} alt="Nexia logo" className="pl-5 w-24 h-14 lg:m-4" />
      </div>
        <h1 className="p-5 ml-96 pl-40 text-2xl">Withdraw</h1>
        <div className="flex mb-14 text-2xl">
          <p className=" pl-40 pr-96 mr-96">Balance:</p>
          <p>$2578</p>
        </div>

        <div className="w-1/2 ml-72 ">
          <div className="mb-2 block">
            <Label
              htmlFor="large"
              className="text-3xl font-light"
              value="Amount"
            />
          </div>
          <TextInput
            id="large"
            sizing="lg"
            className="border rounded-md border-purple"
            placeholder=" Withdraw Amount"
          />
        </div>

        <Button className="ml-96 w-96 bg-purple" size="xl">
          Withdraw
        </Button>
        <Button className="ml-96 w-96 bg-purple" size="xl" href="./bind">
          Bind Card
        </Button>
      </div>
      <Table>
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
        </Table.Body>
      </Table>
    </div>
  );
}

export default Withdraw;
