import { Snippet } from "@prisma/client";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
  snippet: Snippet;
}

export type { SnippetShowPageProps };
