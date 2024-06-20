import React from "react";
import {Label, TextInput, Button} from "flowbite-react";
import logo from "../Assets/nexia real logo.png";

const Bind = () => {
  return (
    <div>
      <img src={logo} alt="Nexia logo" className=" w-24 h-20 p-5" />
      <p className="pl-96 ml-40 text-2xl">Bind Card</p>
      <div className="ml-80 mt-24">
        <div className="mb-7">
          <div className="mb-2 block">
            <Label
              className="text-xl font-light"
              htmlFor="large"
              value="Account Holder's Name"
            />
          </div>
          <TextInput
            className="w-1/2 border border-purple rounded-md"
            id="large"
            type="text"
            sizing="lg"
          />
        </div>
        <div className="mb-7">
          <div className="mb-2 block">
            <Label
              className="text-xl font-light "
              htmlFor="large"
              value="Bank's Name"
            />
          </div>
          <TextInput
            className="w-1/2 border border-purple rounded-md"
            id="large"
            type="text"
            sizing="lg"
          />
        </div>
        <div className="mb-7">
          <div className="mb-2 block">
            <Label
              htmlFor="large"
              className="text-xl font-light"
              value="Account Number"
            />
          </div>
          <TextInput
            className="w-1/2 border border-purple rounded-md"
            id="large"
            type="text"
            sizing="lg"
          />
        </div>
        <Button className="bg-purple ml-24 w-72" size="xl">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Bind;
