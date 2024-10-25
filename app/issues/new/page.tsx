"use client";
import React from "react";
import { Button, TextField } from "@radix-ui/themes";
import { AiFillEdit } from "react-icons/ai";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/navigation";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface IIssueForm {
  title: string;
  description: string;
}
const NewIssuePage: React.FC<IIssueForm> = ({ title, description }) => {
  const { register, control, handleSubmit } = useForm<IIssueForm>();
  const router = useRouter();
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("http://localhost:8080/api/issues", data);
        void router.push("/issues");
      })}
    >
      <TextField.Root placeholder="Title" size="1" {...register("title")}>
        <TextField.Slot>
          <AiFillEdit height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
