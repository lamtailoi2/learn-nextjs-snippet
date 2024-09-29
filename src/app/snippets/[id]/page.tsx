import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";
import type { SnippetShowPageProps } from "@/interface";
import { deleteSnippet } from "@/actions";
export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000));
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findUnique({ where: { id } });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <Link href={"/"} className="text-xl font-bold">
          Home
        </Link>
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={`${id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code className="text-xl text-gray-900">{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => ({
    params: { id: snippet.id.toString() },
  }));
}
