import { db } from "../db";
import Link from "next/link";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippet = snippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <Link
          className="flex justify-between items-center p-2 border rounded"
          href={`/snippets/${snippet.id}`}
        >
          {snippet.title}
          <div>View</div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="flex justify-between items-center text-2xl p-5">
        <h1 className="font-bold">Snippet</h1>
        <Link className="border rounded p-2" href="/snippets/new">
          New Snippet
        </Link>
      </div>
      <h1>{renderSnippet}</h1>
    </>
  );
}
