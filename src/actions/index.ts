"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const snippet = {
    title,
    code,
  };
  await db.snippet.create({ data: snippet });
  console.log(snippet);
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
