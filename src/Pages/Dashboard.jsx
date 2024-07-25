import {Card, Table} from "flowbite-react";
import logo from "../Assets/nexia real logo.png";

export function Dashboard() {
  return (
    <div className="flex flex-col items-center lg:items-start overflow-x-auto">
      <div className="fixed top-0 right-0 w-full bg-white z-10 p-5 flex justify-between items-center lg:relative lg:top-auto lg:p-0">
        <img src={logo} alt="Nexia logo" className="pl-5 w-24 h-14 lg:m-4" />
      </div>
      <div className="pt-24 lg:pt-0 lg:p-20 w-full">
        <div className="text-left pl-10 pt-7 lg:text-left mb-8">
          <h1 className="text-2xl font-bold pb-5 sm:mt-14">Good Morning, Username</h1>
          <p className="pb-2 text-[#E2E2E3]">Welcome to Nexia</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-80 gap-y-8 lg:gap-y-0 items-center">
          <Card className="max-w-lg w-full lg:w-96 bg-[#6A426A] text-white rounded-2xl">
            <h5 className="text-md font-light tracking-tight">Dashboard</h5>
            <p className="text-3xl font-bold block">$0.00</p>
            <p>Available Balance</p>
            <p className="font-bold text-3xl ">$0.00</p>
            <p>Referral Balance</p>
          </Card>
          <div className="grid grid-cols-2 gap-10 m-5 lg:grid-cols-2 lg:gap-8">
            <Card className="border-[#6A426A] text-center w-40 h-20 bg-white text-black rounded-2xl">
              <p>0</p>
              <p>lorem</p>
            </Card>
            <Card className="border-[#6A426A] text-center w-40 h-20 bg-white text-black rounded-2xl">
              <p>0</p>
              <p>lorem</p>
            </Card>
            <Card className="border-[#6A426A] text-center w-40 h-20 bg-white text-black rounded-2xl">
              <p>0</p>
              <p>lorem</p>
            </Card>
            <Card className="border-[#6A426A] text-center w-40 h-20 bg-white text-black rounded-2xl">
              <p>0</p>
              <p>lorem</p>
            </Card>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <div className="flex justify-between items-center px-4 lg:px-20">
          <h1 className="text-2xl font-bold">Recent Referrals</h1>
          <p>
            <a href="#" className="text-blue-600">
              View All
            </a>
          </p>
        </div>
        <div className="overflow-x-auto">
      <Table className="min-w-full mt-4">
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
            <Table.Cell>Smart Bundle</Table.Cell>
            <Table.Cell>$54456</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
      </div>
    </div>
  );
}

export default Dashboard;
