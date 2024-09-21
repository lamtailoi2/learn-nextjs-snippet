"use client";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";
import {updateSnippet} from "@/actions";
interface EditSnippetProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: EditSnippetProps) {
  const [codeSnippet, setCodeSnippet] = useState<string>(snippet.code);
  const handleChange = (value: string = "") => {
    setCodeSnippet(value);
  };
  const editSnippetAction = updateSnippet.bind(
    null,
    codeSnippet,
    snippet.id
  );

  return (
    <div>
      <div className="flex justify-between items-center mx-5">
        <h1 className="m-5 text-2xl text-bold">Edit Snippet</h1>
      </div>
      <div>
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          defaultValue={codeSnippet}
          options={{ minimap: { enabled: false } }}
          onChange={handleChange}
        />
        <form action={editSnippetAction}>
          <button className="border border-gray-200 text-xl p-2">Save</button>
        </form>
      </div>
    </div>
  );
}
