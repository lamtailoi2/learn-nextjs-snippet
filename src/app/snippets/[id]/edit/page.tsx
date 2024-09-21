import type { SnippetShowPageProps } from "@/interface/index";
import SnippetEditForm from "./SnippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function EditSnippet(props: SnippetShowPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id: id },
  });
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={snippet} />;
    </div>
  );
}
