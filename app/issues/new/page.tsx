"use client";
import React from "react";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { AiFillEdit } from "react-icons/ai";

const NewIssuePage: React.FC = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" size="1">
        <TextField.Slot>
          <AiFillEdit height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
