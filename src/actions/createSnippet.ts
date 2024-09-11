import { db } from "@/app/db";
import { redirect } from "next/navigation";
export default async function createSnippet(formData: FormData) {
  "use server";
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
