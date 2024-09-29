"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
export async function createSnippet(
  formState: { message: string; state: string },
  formData: FormData
) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  if (title === "" || title.length < 3) {
    return { message: "Title must be longer", state: "error" };
  }
  if (code === "") {
    return { message: "Code cannot be empty", state: "error" };
  }
  const snippet = {
    title,
    code,
  };
  await db.snippet.create({ data: snippet }).catch((e) => {
    return { message: e.message, state: "error" };
  });
  redirect("/");
}

export async function updateSnippet(code: string, id: number) {
  const snippet = await db.snippet.update({
    where: { id },
    data: { code },
  });
  console.log(snippet);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  redirect("/");
}
