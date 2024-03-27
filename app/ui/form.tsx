"use client";

import { Input } from "./input";

export const Form = () => {
  console.log("THIS IS FORM");
  return (
    <form className="flex flex-col gap-4">
      <Input placeholder="First Name" />
    </form>
  );
};
