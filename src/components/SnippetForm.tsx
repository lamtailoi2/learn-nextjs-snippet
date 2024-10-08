"use client";
import * as actions from "@/actions/index";
import { useFormState } from "react-dom";
import { toastError } from "@/utils/toast";
export default function SnippetForm() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
    state: "pending",
  });
  if (formState.state === "error") {
    toastError(formState.message);
  }
  return (
    <>
      <form action={action}>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full text-gray-900"
              id="title"
              placeholder="Enter your title..."
            />
          </div>

          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full text-gray-900"
              id="code"
              placeholder="Enter your code..."
            />
          </div>
          <button type="submit" className="rounded p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
